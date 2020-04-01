import { Component, OnInit, Input, Output, ViewChild, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-patient-dialog',
  templateUrl: './patient-dialog.component.html',
  styleUrls: ['./patient-dialog.component.scss']
})
export class PatientDialogComponent implements OnInit {
  @Input() patient: any;
  patientDialogForm: FormGroup;
  image: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  profession: string;
  quartier: string;
  @Output() invalidIconDropped = new EventEmitter<boolean>();
  @Input() user: any;
  @Input() mode = 'Create';
  loading: boolean;

  @ViewChild('fform', { static: false}) patientFormDirective;

  constructor(
    private firebaseService: FirebaseService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) data,
    private dialogRef: MatDialogRef<PatientDialogComponent>
  ) {
    if (data !== undefined && data !== null) {
      this.patient = data.patient;
      this.mode = data.mode;
      this.firstname = data.patient.firstname;
      this.lastname = data.patient.lastname;
    }

    this.createForm();
  }

  ngOnInit(): void {
  }


  initializeFormData(p: any) {
    this.email = p.email;
    this.password = p.password;
    this.firstname = p.firstname;
    this.lastname = p.lastname;
  }

  createForm() {
    let email = '';
    let password = '';
    let firstname = '';
    let lastname = '';
    let profession = '';
    let quartier = '';
    if (this.patient !== undefined && this.patient !== null) {
      email = this.patient.email;
      password = this.patient.password;
      firstname = this.patient.firstname;
      lastname = this.patient.lastname;
      profession = this.patient.profession;
      quartier = this.patient.quartier;
    }
    this.patientDialogForm = this.fb.group({
      email: [email, Validators.required],
      password: [password, Validators.required],
      firstname: [name, Validators.required],
      lastname: [name, Validators.required],
      profession: [profession, Validators.required],
      quartier: [quartier, Validators.required],
    });
  }

  onSubmit() {
    const temp = this.patientDialogForm.value;
    this.loading = true;
    if (this.mode  === 'Create') {
      this.patient = temp;
      this.firebaseService.createPatient(this.patient).then(
        res => {
          this.loading = false;
          this.dialogRef.close();
        });
    } else if (this.mode === 'Update') {

      this.firebaseService.updatePatient(this.patient).then(
        res => {
          this.loading = false;
          this.dialogRef.close();
        });
    }

    // console.log(JSON.stringify(this.project));
  }
}
