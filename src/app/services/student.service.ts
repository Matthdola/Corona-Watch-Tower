import { Injectable } from '@angular/core';

export class Student {
  id: string;
  name: string;
  email: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[];
  constructor() {
    this.students = [
      {
        id: '0012',
        name: 'DOLA',
        email: 'matthiasdola@gmail.com',
        description: 'An engineer',
      },
      {
        id: '0012',
        name: 'Matthias',
        email: 'mdola@gmail.com',
        description: 'A trainer',
      },
      {
        id: '0012',
        name: 'Koami',
        email: 'koamidola@gmail.com',
        description: 'A computer scientist',
      }
    ];
   }


  getStudents() {
    return this.students;
  }

  createStudent(student) {
    this.students.push(student);
  }
}
