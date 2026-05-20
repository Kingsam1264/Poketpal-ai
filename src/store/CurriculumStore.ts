/**
 * Curriculum Store - Manages state for grade/subject/unit selection
 */

import {makeAutoObservable, runInAction} from 'mobx';
import {Grade, Subject, Unit} from '../types/curriculum';
import {curriculumService} from '../services/CurriculumService';

export class CurriculumStore {
  grades: Grade[] = [];
  selectedGrade: Grade | null = null;
  selectedSubject: Subject | null = null;
  selectedUnit: Unit | null = null;
  currentUnitContent: string = '';
  isLoading: boolean = false;
  error: string | null = null;
  hasCurriculumData: boolean = false;
  isActive: boolean = false; // Track if curriculum chat is active

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Load all curriculum data
   */
  async loadCurriculum(): Promise<void> {
    if (this.isLoading) return;
    
    runInAction(() => {
      this.isLoading = true;
      this.error = null;
    });

    try {
      // Check if curriculum data exists
      const hasData = await curriculumService.hasCurriculumData();
      runInAction(() => {
        this.hasCurriculumData = hasData;
      });

      if (!hasData) {
        runInAction(() => {
          this.isLoading = false;
          this.error = 'No curriculum data found. Please add content to the Input folder.';
        });
        return;
      }

      const grades = await curriculumService.loadCurriculum();
      runInAction(() => {
        this.grades = grades;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
        this.error = error instanceof Error ? error.message : 'Failed to load curriculum';
      });
    }
  }

  /**
   * Select a grade
   */
  selectGrade(grade: Grade): void {
    this.selectedGrade = grade;
    this.selectedSubject = null;
    this.selectedUnit = null;
    this.currentUnitContent = '';
  }

  /**
   * Select a subject
   */
  selectSubject(subject: Subject): void {
    this.selectedSubject = subject;
    this.selectedUnit = null;
    this.currentUnitContent = '';
  }

  /**
   * Select a unit and load its content
   */
  async selectUnit(unit: Unit): Promise<void> {
    if (!this.selectedGrade || !this.selectedSubject) return;

    runInAction(() => {
      this.selectedUnit = unit;
      this.isLoading = true;
    });

    try {
      const content = await curriculumService.loadUnitContent(
        this.selectedGrade.name,
        this.selectedSubject.name,
        unit
      );
      
      runInAction(() => {
        this.currentUnitContent = content;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
        this.error = error instanceof Error ? error.message : 'Failed to load unit content';
      });
    }
  }

  /**
   * Build context prompt for chat
   */
  getContextPrompt(): string {
    if (!this.selectedGrade || !this.selectedSubject || !this.selectedUnit) {
      return '';
    }
    return curriculumService.buildContextPrompt(
      this.selectedGrade,
      this.selectedSubject,
      this.selectedUnit,
      this.currentUnitContent
    );
  }

  /**
   * Activate curriculum chat mode
   */
  activate(): void {
    this.isActive = true;
  }

  /**
   * Deactivate curriculum chat mode
   */
  deactivate(): void {
    this.isActive = false;
  }

  /**
   * Clear selection and go back
   */
  clearSelection(): void {
    this.selectedGrade = null;
    this.selectedSubject = null;
    this.selectedUnit = null;
    this.currentUnitContent = '';
  }

  /**
   * Clear error
   */
  clearError(): void {
    this.error = null;
  }

  /**
   * Reset store
   */
  reset(): void {
    this.grades = [];
    this.selectedGrade = null;
    this.selectedSubject = null;
    this.selectedUnit = null;
    this.currentUnitContent = '';
    this.isLoading = false;
    this.error = null;
    curriculumService.clearCache();
  }

  /**
   * Get available subjects for selected grade
   */
  get availableSubjects(): Subject[] {
    return this.selectedGrade?.subjects ?? [];
  }

  /**
   * Get available units for selected subject
   */
  get availableUnits(): Unit[] {
    return this.selectedSubject?.units ?? [];
  }

  /**
   * Check if all selections are made
   */
  get hasFullSelection(): boolean {
    return !!(this.selectedGrade && this.selectedSubject && this.selectedUnit);
  }

  /**
   * Get current selection summary
   */
  get selectionSummary(): string {
    const parts = [];
    if (this.selectedGrade) parts.push(this.selectedGrade.name);
    if (this.selectedSubject) parts.push(this.selectedSubject.name);
    if (this.selectedUnit) parts.push(this.selectedUnit.name);
    return parts.join(' > ');
  }
}

export const curriculumStore = new CurriculumStore();