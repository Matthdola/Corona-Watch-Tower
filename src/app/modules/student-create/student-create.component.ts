import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent implements OnInit {
  student: {id, name, description, email} = {id: null, name: '', description: '', email: ''};
  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
  }

  createStudent() {
    this.studentService.createStudent(this.student);
    this.student = {id: null, name: '', description: '', email: ''};
  }

}
