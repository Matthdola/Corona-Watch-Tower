import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  student;
  selectedStudent;

  constructor(
    public studentService: StudentService
  ) { }

  ngOnInit(): void {
  }

  public setStudent(student) {
    this.selectedStudent = student;
  }

}
