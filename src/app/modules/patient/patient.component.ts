import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';


export interface PatientCheck {
  id: string;
  firstname: string;
  lastname: string;
  date: string;
  photo: number;
  present: boolean;
}

const ELEMENT_DATA: PatientCheck[] = [];

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  panelOpenState = false;
  @Input() patient: any ;
  patientDialogForm: FormGroup;
  symptomsDialogForm: FormGroup;
  image: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  profession: string;
  quartier: string;

  temperature: number;
  toux: boolean;
  grippe: boolean;
  diff_respiratoire: boolean;
  revenu_etranger: boolean;

  @Input() user: any;
  @Input() mode = 'Create';
  loading: boolean;
  notChanged: boolean;

  patientCheck: PatientCheck;
  displayedColumns: string[] = ['select', 'name', 'date', 'photo', 'present'];

  dataSource = new MatTableDataSource<PatientCheck>(ELEMENT_DATA);
  selection = new SelectionModel<PatientCheck>(true, []);

  @ViewChild('fform', { static: false}) patientFormDirective;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.notChanged = true;
    this.patient = {
      firstname: 'Isidore',
      lastname: 'SADAT',
      quartier: 'Lome',
      age: ''
    };
    this.createPatientForm();
    this.createSymptomsForm();
  }

  deletePatient() {

  }

  applyChanges() {

  }

  onSubmit() {
  }

  createPatientForm() {
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
      firstname: [name, Validators.required],
      lastname: [name, Validators.required],
      profession: [profession, Validators.required],
      quartier: [quartier, Validators.required],
    });
  }

  createSymptomsForm() {
    let temperature = 37;
    let toux = false;
    let grippe = false;
    let respDiff = false;
    let etranger = false;
    if (this.patient !== undefined && this.patient !== null) {
      temperature = this.patient.email;
      toux = this.patient.password;
      grippe = this.patient.firstname;
      respDiff = this.patient.lastname;
      etranger = this.patient.profession;
    }
    this.symptomsDialogForm = this.fb.group({
      toux: [toux],
      diff_respiratoire: [respDiff],
      grippe: [grippe],
      etranger: [etranger],
      temperature: [temperature],
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PatientCheck): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}
