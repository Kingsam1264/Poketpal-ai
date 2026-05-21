class MockCurriculumStore {
  isActive = false;
  hasFullSelection = false;
  currentUnitContent = '';

  getContextPrompt = jest.fn(() => '');
  loadCurriculum = jest.fn(async () => {});
  clearSelection = jest.fn(() => {
    this.isActive = false;
    this.hasFullSelection = false;
    this.currentUnitContent = '';
  });
  activate = jest.fn(() => {
    this.isActive = true;
  });
}

export const mockCurriculumStore = new MockCurriculumStore();
