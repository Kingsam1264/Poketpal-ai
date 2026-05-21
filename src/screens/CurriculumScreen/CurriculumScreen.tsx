/**
 * CurriculumScreen - Grade/Subject/Unit selection screen
 */

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IconButton} from 'react-native-paper';

import {curriculumStore} from '../../store';
import {Grade, Subject, Unit} from '../../types/curriculum';
import {ROUTES} from '../../utils/navigationConstants';

type RootStackParamList = {
  Curriculum: undefined;
  Chat: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Curriculum'>;

export const CurriculumScreen: React.FC = observer(() => {
  const navigation = useNavigation<NavigationProp>();
  const [selectionStep, setSelectionStep] = useState<
    'grade' | 'subject' | 'unit'
  >('grade');

  useEffect(() => {
    curriculumStore.loadCurriculum();
  }, []);

  const handleGradeSelect = (grade: Grade) => {
    curriculumStore.selectGrade(grade);
    setSelectionStep('subject');
  };

  const handleSubjectSelect = (subject: Subject) => {
    curriculumStore.selectSubject(subject);
    setSelectionStep('unit');
  };

  const handleUnitSelect = async (unit: Unit) => {
    await curriculumStore.selectUnit(unit);
    if (!curriculumStore.isLoading && curriculumStore.currentUnitContent) {
      // Activate curriculum mode before navigating to chat
      curriculumStore.activate();
      navigation.navigate(ROUTES.CHAT as never);
    } else if (curriculumStore.error) {
      Alert.alert('Error', curriculumStore.error);
    }
  };

  const handleBack = () => {
    if (selectionStep === 'unit') {
      setSelectionStep('subject');
      curriculumStore.selectedSubject = null;
      curriculumStore.selectedUnit = null;
    } else if (selectionStep === 'subject') {
      setSelectionStep('grade');
      curriculumStore.selectedGrade = null;
    }
  };

  const handleClearSelection = () => {
    curriculumStore.clearSelection();
    setSelectionStep('grade');
  };

  const renderHeader = () => (
    <View style={styles.header}>
      {selectionStep !== 'grade' && (
        <IconButton icon="arrow-left" onPress={handleBack} />
      )}
      <Text style={styles.headerTitle}>
        {selectionStep === 'grade' && 'Select Grade'}
        {selectionStep === 'subject' && curriculumStore.selectedGrade?.name}
        {selectionStep === 'unit' && curriculumStore.selectedSubject?.name}
      </Text>
      <IconButton icon="close" onPress={handleClearSelection} />
    </View>
  );

  const renderBreadcrumb = () => (
    <View style={styles.breadcrumb}>
      <TouchableOpacity
        onPress={() => {
          setSelectionStep('grade');
          curriculumStore.selectGrade(curriculumStore.selectedGrade!);
          curriculumStore.selectedSubject = null;
          curriculumStore.selectedUnit = null;
        }}>
        <Text
          style={[
            styles.breadcrumbText,
            selectionStep === 'grade' && styles.breadcrumbActive,
          ]}>
          Grade
        </Text>
      </TouchableOpacity>
      <Text style={styles.breadcrumbSeparator}>›</Text>
      <TouchableOpacity
        onPress={() => {
          if (curriculumStore.selectedGrade) {
            setSelectionStep('subject');
            curriculumStore.selectedSubject = null;
            curriculumStore.selectedUnit = null;
          }
        }}
        disabled={!curriculumStore.selectedGrade}>
        <Text
          style={[
            styles.breadcrumbText,
            selectionStep === 'subject' && styles.breadcrumbActive,
            !curriculumStore.selectedGrade && styles.breadcrumbDisabled,
          ]}>
          Subject
        </Text>
      </TouchableOpacity>
      <Text style={styles.breadcrumbSeparator}>›</Text>
      <TouchableOpacity
        onPress={() => {
          if (curriculumStore.selectedSubject) {
            setSelectionStep('unit');
            curriculumStore.selectedUnit = null;
          }
        }}
        disabled={!curriculumStore.selectedSubject}>
        <Text
          style={[
            styles.breadcrumbText,
            selectionStep === 'unit' && styles.breadcrumbActive,
            !curriculumStore.selectedSubject && styles.breadcrumbDisabled,
          ]}>
          Unit
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderGrades = () => (
    <ScrollView style={styles.listContainer}>
      {curriculumStore.grades.map(grade => (
        <TouchableOpacity
          key={grade.id}
          style={[
            styles.itemCard,
            curriculumStore.selectedGrade?.id === grade.id && styles.itemCardSelected,
          ]}
          onPress={() => handleGradeSelect(grade)}
        >
          <Text style={styles.itemText}>{grade.name}</Text>
          <Text style={styles.itemSubtext}>
            {grade.subjects.length} subject{grade.subjects.length !== 1 ? 's' : ''}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderSubjects = () => (
    <ScrollView style={styles.listContainer}>
      {curriculumStore.availableSubjects.map(subject => (
        <TouchableOpacity
          key={subject.id}
          style={[
            styles.itemCard,
            curriculumStore.selectedSubject?.id === subject.id && styles.itemCardSelected,
          ]}
          onPress={() => handleSubjectSelect(subject)}
        >
          <Text style={styles.itemText}>{subject.name}</Text>
          <Text style={styles.itemSubtext}>
            {subject.units.length} unit{subject.units.length !== 1 ? 's' : ''}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderUnits = () => (
    <ScrollView style={styles.listContainer}>
      {curriculumStore.isLoading ? (
        <ActivityIndicator size="large" style={styles.loader} />
      ) : (
        curriculumStore.availableUnits.map(unit => (
          <TouchableOpacity
            key={unit.id}
            style={[
              styles.itemCard,
              curriculumStore.selectedUnit?.id === unit.id && styles.itemCardSelected,
            ]}
            onPress={() => handleUnitSelect(unit)}
          >
            <Text style={styles.itemText}>{unit.name}</Text>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );

  if (curriculumStore.isLoading && curriculumStore.grades.length === 0) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" style={styles.loader} />
        <Text style={styles.loadingText}>Loading curriculum...</Text>
      </View>
    );
  }

  if (curriculumStore.error && curriculumStore.grades.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{curriculumStore.error}</Text>
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => curriculumStore.loadCurriculum()}
        >
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderBreadcrumb()}
      
      {selectionStep === 'grade' && renderGrades()}
      {selectionStep === 'subject' && renderSubjects()}
      {selectionStep === 'unit' && renderUnits()}

      {curriculumStore.selectedGrade && curriculumStore.selectedSubject && curriculumStore.selectedUnit && (
        <View style={styles.footer}>
          <Text style={styles.selectionSummary}>
            Selected: {curriculumStore.selectionSummary}
          </Text>
          <TouchableOpacity
            style={styles.chatButton}
            onPress={() => {
              // Activate curriculum mode before navigating to chat
              curriculumStore.activate();
              navigation.navigate(ROUTES.CHAT as never);
            }}
          >
            <Text style={styles.chatButtonText}>Start Chat</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  breadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  breadcrumbText: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 8,
  },
  breadcrumbActive: {
    color: '#2196F3',
    fontWeight: '600',
  },
  breadcrumbDisabled: {
    color: '#ccc',
  },
  breadcrumbSeparator: {
    color: '#999',
    fontSize: 16,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  itemCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  itemCardSelected: {
    backgroundColor: '#E3F2FD',
    borderColor: '#2196F3',
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  itemSubtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 16,
  },
  errorText: {
    textAlign: 'center',
    color: '#f44336',
    padding: 16,
  },
  retryButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 16,
  },
  retryButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  selectionSummary: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 12,
  },
  chatButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});