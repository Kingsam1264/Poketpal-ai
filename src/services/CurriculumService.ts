/**
 * Curriculum Service - Reads and parses educational content from the Input folder
 */

import {Platform} from 'react-native';
import * as RNFS from '@dr.pogodin/react-native-fs';
import {Grade, Subject, Unit} from '../types/curriculum';

const INPUT_DIR = 'Input';
const SEED_FLAG_FILE = '.curriculum_seeded';

export class CurriculumService {
  private static instance: CurriculumService;
  private gradesCache: Grade[] = [];
  private resolvedBasePath: string | null = null;

  private constructor() {}

  public static getInstance(): CurriculumService {
    if (!CurriculumService.instance) {
      CurriculumService.instance = new CurriculumService();
    }
    return CurriculumService.instance;
  }

  private getDocumentInputPath(): string {
    const docDir = RNFS?.DocumentDirectoryPath || '';
    return docDir ? `${docDir}/${INPUT_DIR}` : INPUT_DIR;
  }

  private getBundleInputPath(): string | null {
    const bundle = RNFS?.MainBundlePath;
    if (!bundle) {
      return null;
    }
    return `${bundle}/${INPUT_DIR}`;
  }

  /**
   * Resolve where curriculum files live and seed documents from the app bundle on first run.
   */
  private async resolveBasePath(): Promise<string> {
    if (this.resolvedBasePath) {
      return this.resolvedBasePath;
    }

    const docInput = this.getDocumentInputPath();

    if (await this.hasGradesInPath(docInput)) {
      this.resolvedBasePath = docInput;
      return docInput;
    }

    await this.seedCurriculumFromBundle(docInput);

    if (await this.hasGradesInPath(docInput)) {
      this.resolvedBasePath = docInput;
      return docInput;
    }

    const bundleInput = this.getBundleInputPath();
    if (bundleInput && (await this.hasGradesInPath(bundleInput))) {
      this.resolvedBasePath = bundleInput;
      return bundleInput;
    }

    this.resolvedBasePath = docInput;
    return docInput;
  }

  private async hasGradesInPath(basePath: string): Promise<boolean> {
    try {
      const exists = await RNFS.exists(basePath);
      if (!exists) {
        return false;
      }
      const items = await RNFS.readDir(basePath);
      return items.some(
        item => item.isDirectory() && item.name.startsWith('Grade'),
      );
    } catch {
      return false;
    }
  }

  private getSeedMarkerPath(docInput: string): string {
    return `${docInput}/${SEED_FLAG_FILE}`;
  }

  private async clearSeedMarker(docInput: string): Promise<void> {
    const seedMarker = this.getSeedMarkerPath(docInput);
    if (await RNFS.exists(seedMarker)) {
      await RNFS.unlink(seedMarker);
    }
  }

  public async bundleHasCurriculumAssets(): Promise<boolean> {
    if (Platform.OS === 'android') {
      try {
        const entries = await RNFS.readDirAssets(INPUT_DIR);
        return entries.some(
          entry => entry.isDirectory() && entry.name.startsWith('Grade'),
        );
      } catch {
        return false;
      }
    }

    const bundleInput = this.getBundleInputPath();
    return bundleInput ? await this.hasGradesInPath(bundleInput) : false;
  }

  private async removeDirectoryRecursive(path: string): Promise<void> {
    if (!(await RNFS.exists(path))) {
      return;
    }

    const items = await RNFS.readDir(path);
    for (const item of items) {
      if (item.isDirectory()) {
        await this.removeDirectoryRecursive(item.path);
      } else {
        await RNFS.unlink(item.path);
      }
    }
    await RNFS.unlink(path);
  }

  private async copyAndroidAssetsToDocuments(
    assetDir: string,
    destDir: string,
  ): Promise<void> {
    const entries = await RNFS.readDirAssets(assetDir);
    await RNFS.mkdir(destDir).catch(() => {});

    for (const entry of entries) {
      const assetPath = `${assetDir}/${entry.name}`;
      const destPath = `${destDir}/${entry.name}`;

      if (entry.isDirectory()) {
        await this.copyAndroidAssetsToDocuments(assetPath, destPath);
      } else {
        const content = await RNFS.readFileAssets(assetPath, 'utf8');
        await RNFS.writeFile(destPath, content, 'utf8');
      }
    }
  }

  private async seedCurriculumFromBundle(docInput: string): Promise<void> {
    const seedMarker = this.getSeedMarkerPath(docInput);
    if (await RNFS.exists(seedMarker)) {
      if (await this.hasGradesInPath(docInput)) {
        return;
      }
      await this.clearSeedMarker(docInput);
    }

    if (!(await this.bundleHasCurriculumAssets())) {
      console.warn(
        'CurriculumService: curriculum not bundled in app — rebuild after adding Input/',
      );
      return;
    }

    try {
      await RNFS.mkdir(docInput).catch(() => {});

      if (Platform.OS === 'android') {
        try {
          await RNFS.copyFileAssets(INPUT_DIR, docInput);
        } catch (copyError) {
          console.warn(
            'CurriculumService: copyFileAssets failed, using fallback:',
            copyError,
          );
        }
        if (!(await this.hasGradesInPath(docInput))) {
          await this.copyAndroidAssetsToDocuments(INPUT_DIR, docInput);
        }
      } else {
        const bundleInput = this.getBundleInputPath();
        if (bundleInput && (await RNFS.exists(bundleInput))) {
          if (RNFS.copyFolder) {
            await RNFS.copyFolder(bundleInput, docInput);
          }
        }
      }

      if (await this.hasGradesInPath(docInput)) {
        await RNFS.writeFile(seedMarker, '1', 'utf8');
      }
    } catch (error) {
      console.warn('CurriculumService: failed to seed Input folder:', error);
    }
  }

  private async listGrades(): Promise<string[]> {
    try {
      const basePath = await this.resolveBasePath();
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

  private async listSubjects(gradeName: string): Promise<string[]> {
    try {
      const gradePath = `${await this.resolveBasePath()}/${gradeName}`;
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

  private async listUnits(
    gradeName: string,
    subjectName: string,
  ): Promise<string[]> {
    try {
      const subjectPath = `${await this.resolveBasePath()}/${gradeName}/${subjectName}`;
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

  private async readUnitContent(
    gradeName: string,
    subjectName: string,
    fileName: string,
  ): Promise<string> {
    try {
      const filePath = `${await this.resolveBasePath()}/${gradeName}/${subjectName}/${fileName}`;
      const exists = await RNFS.exists(filePath);
      if (!exists) return '';

      return await RNFS.readFile(filePath, 'utf8');
    } catch (error) {
      console.error('CurriculumService: Error reading unit content:', error);
      return '';
    }
  }

  private parseGradeNumber(gradeName: string): number {
    const match = gradeName.match(/Grade\s*(\d+)/i);
    return match ? parseInt(match[1], 10) : 0;
  }

  private parseUnitName(fileName: string): string {
    return fileName
      .replace('.md', '')
      .replace(/^Unit\s*\d+\s*[-–—]\s*/, '')
      .trim();
  }

  public async loadCurriculum(): Promise<Grade[]> {
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
            content: '',
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

    grades.sort(
      (a, b) => this.parseGradeNumber(a.name) - this.parseGradeNumber(b.name),
    );

    this.gradesCache = grades;
    return grades;
  }

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

  public buildContextPrompt(
    grade: Grade,
    subject: Subject,
    unit: Unit,
    content: string,
  ): string {
    // Limit content to prevent context overflow (keep first 2000 chars)
    const maxContentLength = 2000;
    const truncatedContent =
      content.length > maxContentLength
        ? content.substring(0, maxContentLength) +
          '\n\n[Content truncated - ask for specific sections if needed]'
        : content;

    return `You are a helpful tutor helping a student with their ${grade.name} ${subject.name} curriculum.
Current topic: ${unit.name}

Please answer questions based on the following study material:

${truncatedContent}

Guidelines:
- Be clear and educational in your responses
- Use examples when helpful
- If the question is outside the provided material, say so honestly
- Format your responses in a student-friendly way`;
  }

  public async hasCurriculumData(): Promise<boolean> {
    try {
      const basePath = await this.resolveBasePath();
      return this.hasGradesInPath(basePath);
    } catch {
      return false;
    }
  }

  public clearCache(): void {
    this.gradesCache = [];
    this.resolvedBasePath = null;
  }

  /** Clears seed state so the next load re-copies from bundled assets. */
  public async prepareForReload(): Promise<void> {
    const docInput = this.getDocumentInputPath();
    await this.clearSeedMarker(docInput);
    await this.removeDirectoryRecursive(docInput);
    this.clearCache();
  }
}

export const curriculumService = CurriculumService.getInstance();
