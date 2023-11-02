import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MESSAGES } from 'src/app/constants/student-data.constants';
import { GraphDataService } from 'src/app/services/graph-data/graph-data.service';

@Component({
  selector: 'app-graph-settings',
  templateUrl: './graph-settings.component.html',
  styleUrls: ['./graph-settings.component.css'],
})
export class GraphSettingsComponent implements OnInit {
  studentNames: string[] = [];
  selectedStudents: string[] = [];
  students: FormGroup = new FormGroup([]);
  message = '';
  constructor(
    private graphDataService: GraphDataService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.studentNames = this.graphDataService.getStudentNames();
    this.selectedStudents = [this.studentNames[0]];
    this.buildForm();
    this.graphDataService.setSelectedStudents(this.selectedStudents);
  }

  buildForm() {
    if (!this.studentNames) return;

    const formGroupConfig: Record<string, FormControl> =
      this.studentNames.reduce(
        (config: Record<string, FormControl>, studentName) => {
          if (Object.keys(config).length == 0) {
            config[studentName] = new FormControl(true);
            return config;
          }

          config[studentName] = new FormControl(false);
          return config;
        },
        {}
      );

    this.students = this.fb.group(formGroupConfig);
  }

  modifySelectedStudents() {
    let studentsFormValue = this.students.value;
    this.selectedStudents = [];

    this.studentNames.forEach((studentName) => {
      if (studentsFormValue[studentName])
        this.selectedStudents.push(studentName);
    });

    if (this.selectedStudents.length == 0) {
      this.message = MESSAGES.NO_STUDENT_SELECTED_MESSAGE;
    } else {
      this.message = '';
    }

    this.graphDataService.setSelectedStudents(this.selectedStudents);
  }
}
