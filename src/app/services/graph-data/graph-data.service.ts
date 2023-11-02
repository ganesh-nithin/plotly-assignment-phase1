import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  CRITERIA_NAMES,
  STUDENTS_DATA,
} from 'src/app/constants/student-data.constants';
import { GraphData } from 'src/app/models/graph.model';
import { StudentScores } from 'src/app/models/student.models';

@Injectable({
  providedIn: 'root',
})
export class GraphDataService {
  private studentsData: StudentScores[] = [];
  private studentNames: string[] = [];
  private selectedStudentsDataSubject: Subject<GraphData[]> = new Subject<
    GraphData[]
  >();
  private criteriaNames: string[] = [];
  private criteriaKeys: string[] = [];
  selectedStudentsData$: Observable<GraphData[]> =
    this.selectedStudentsDataSubject.asObservable();

  constructor() {
    this.studentsData = STUDENTS_DATA;
    this.studentNames = this.studentsData.map(
      (studentData) => studentData.studentName
    );
    this.criteriaNames = Object.values(CRITERIA_NAMES);
    this.criteriaKeys = Object.keys(CRITERIA_NAMES);
  }

  getStudentNames() {
    return this.studentNames;
  }

  setSelectedStudents(students: string[]) {
    let studentGraphData: GraphData[] = [];

    this.studentsData.forEach((studentData) => {
      if (!students.includes(studentData.studentName)) return;

      let r = this.criteriaKeys.map((criteria) => {
        return studentData.scores[criteria];
      });
      let theta = this.criteriaNames;
      let name = studentData.studentName;

      // push the first indexes to display graph in closed path
      r.push(r[0]);
      theta.push(theta[0]);

      studentGraphData.push({ r, theta, name });
    });

    this.selectedStudentsDataSubject.next(studentGraphData);
  }
}
