import { StudentScores } from '../models/student.models';

export const STUDENTS_DATA: StudentScores[] = [
  {
    studentName: 'Nithin',
    scores: { criteria1: 5, criteria2: 8, criteria3: 6 },
  },
  {
    studentName: 'Ash',
    scores: { criteria1: 9, criteria2: 7, criteria3: 10 },
  },
  {
    studentName: 'Priya',
    scores: { criteria1: 8, criteria2: 10, criteria3: 9 },
  },
  {
    studentName: 'Ganesh',
    scores: { criteria1: 3, criteria2: 5, criteria3: 7 },
  },
];

export const CRITERIA_NAMES = {
  criteria1: 'Logical Thinking',
  criteria2: 'Implementation',
  criteria3: 'Examly Score',
};

export const enum MESSAGES {
  NO_STUDENT_SELECTED_MESSAGE = 'Please select at least one student to display in graph',
}
