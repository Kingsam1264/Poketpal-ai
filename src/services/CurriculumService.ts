/**
 * Curriculum Service - Reads and parses educational content from the Input folder
 */

import RNFS from '@dr.pogodin/react-native-fs';
import {Grade, Subject, Unit} from '../types/curriculum';

export class CurriculumService {
  private static instance: CurriculumService;
  private gradesCache: Grade[] = [];

  private constructor() {}

  public static getInstance(): CurriculumService {
    if (!CurriculumService.instance) {
      CurriculumService.instance = new CurriculumService();
    }
    return CurriculumService.instance;
  }

  /**
   * Get the base path for curriculum files
   */
  private getBasePath(): string {
    // Use app's document directory + Input folder
    const docDir = RNFS?.DocumentDirectoryPath || '';
    return docDir ? `${docDir}/Input` : 'Input';
  }

  /**
   * List all grade directories
   */
  private async listGrades(): Promise<string[]> {
    try {
      const basePath = this.getBasePath();
      const exists = await RNFS.exists(basePath);
      if (!exists) {
        console.log('CurriculumService: Input folder not found at', basePath);
        return [];
      }
      const items = await RNFS.readDir(basePath);
      return items
        .filter(item => item.isDirectory())
        .map(item => item.name)
        .filter(name => name.startsWith('Grade'))
        .sort();
    } catch (error) {
      console.error('CurriculumService: Error listing grades:', error);
      return [];
    }
  }

  /**
   * List subjects within a grade
   */
  private async listSubjects(gradeName: string): Promise<string[]> {
    try {
      const gradePath = `${this.getBasePath()}/${gradeName}`;
      const exists = await RNFS.exists(gradePath);
      if (!exists) return [];
      
      const items = await RNFS.readDir(gradePath);
      return items
        .filter(item => item.isDirectory())
        .map(item => item.name)
        .sort();
    } catch (error) {
      console.error('CurriculumService: Error listing subjects:', error);
      return [];
    }
  }

  /**
   * List unit files within a subject
   */
  private async listUnits(
    gradeName: string,
    subjectName: string,
  ): Promise<string[]> {
    try {
      const subjectPath = `${this.getBasePath()}/${gradeName}/${subjectName}`;
      const exists = await RNFS.exists(subjectPath);
      if (!exists) return [];
      
      const items = await RNFS.readDir(subjectPath);
      return items
        .filter(item => item.isFile() && item.name.endsWith('.md'))
        .map(item => item.name)
        .sort();
    } catch (error) {
      console.error('CurriculumService: Error listing units:', error);
      return [];
    }
  }

  /**
   * Read unit content from a file
   */
  private async readUnitContent(
    gradeName: string,
    subjectName: string,
    fileName: string,
  ): Promise<string> {
    try {
      const filePath = `${this.getBasePath()}/${gradeName}/${subjectName}/${fileName}`;
      const exists = await RNFS.exists(filePath);
      if (!exists) return '';
      
      return await RNFS.readFile(filePath, 'utf8');
    } catch (error) {
      console.error('CurriculumService: Error reading unit content:', error);
      return '';
    }
  }

  /**
   * Parse grade name to extract grade number
   */
  private parseGradeNumber(gradeName: string): number {
    const match = gradeName.match(/Grade\s*(\d+)/i);
    return match ? parseInt(match[1], 10) : 0;
  }

  /**
   * Parse unit name from filename
   */
  private parseUnitName(fileName: string): string {
    return fileName
      .replace('.md', '')
      .replace(/^Unit\s*\d+\s*[-–—]\s*/, '')
      .trim();
  }

  /**
   * Load all curriculum data
   */
  public async loadCurriculum(): Promise<Grade[]> {
    // Return cache if available
    if (this.gradesCache.length > 0) {
      return this.gradesCache;
    }

    const grades: Grade[] = [];
    const gradeNames = await this.listGrades();

    for (const gradeName of gradeNames) {
      const subjects: Subject[] = [];
      const subjectNames = await this.listSubjects(gradeName);

      for (const subjectName of subjectNames) {
        const units: Unit[] = [];
        const unitFileNames = await this.listUnits(gradeName, subjectName);

        for (let i = 0; i < unitFileNames.length; i++) {
          const fileName = unitFileNames[i];
          units.push({
            id: `${gradeName}-${subjectName}-${i}`,
            name: this.parseUnitName(fileName),
            fileName: fileName,
            content: '', // Content loaded on demand
          });
        }

        subjects.push({
          id: `${gradeName}-${subjectName}`,
          name: subjectName,
          units,
        });
      }

      grades.push({
        id: gradeName,
        name: gradeName,
        subjects,
      });
    }

    // Sort grades by number
    grades.sort(
      (a, b) => this.parseGradeNumber(a.name) - this.parseGradeNumber(b.name),
    );

    this.gradesCache = grades;
    return grades;
  }

  /**
   * Load specific unit content
   */
  public async loadUnitContent(
    gradeName: string,
    subjectName: string,
    unit: Unit,
  ): Promise<string> {
    if (unit.content) {
      return unit.content;
    }
    return await this.readUnitContent(gradeName, subjectName, unit.fileName);
  }

  /**
   * Build context prompt from selected curriculum
   */
  public buildContextPrompt(
    grade: Grade,
    subject: Subject,
    unit: Unit,
    content: string,
  ): string {
    return `You are a helpful tutor helping a student with their ${grade.name} ${subject.name} curriculum.
Current topic: ${unit.name}

Please answer questions based on the following study material:

${content}

Guidelines:
- Be clear and educational in your responses
- Use examples when helpful
- If the question is outside the provided material, say so honestly
- Format your responses in a student-friendly way`;
  }

  /**
   * Check if curriculum data exists
   */
  public async hasCurriculumData(): Promise<boolean> {
    try {
      const basePath = this.getBasePath();
      const exists = await RNFS.exists(basePath);
      if (!exists) return false;
      
      const items = await RNFS.readDir(basePath);
      return items.some(item => item.isDirectory() && item.name.startsWith('Grade'));
    } catch (error) {
      return false;
    }
  }

  /**
   * Clear cache to force reload
   */
  public clearCache(): void {
    this.gradesCache = [];
  }
}

export const curriculumService = CurriculumService.getInstance();