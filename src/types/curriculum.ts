/**
 * Types for curriculum data structure
 */

export interface Unit {
  id: string;
  name: string;
  fileName: string;
  content: string;
}

export interface Subject {
  id: string;
  name: string;
  units: Unit[];
}

export interface Grade {
  id: string;
  name: string;
  subjects: Subject[];
}

export interface CurriculumState {
  grades: Grade[];
  selectedGrade: Grade | null;
  selectedSubject: Subject | null;
  selectedUnit: Unit | null;
  isLoading: boolean;
  error: string | null;
}