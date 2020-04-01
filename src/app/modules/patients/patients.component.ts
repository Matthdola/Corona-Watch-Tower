import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { PatientServiceService } from 'src/app/services/patient-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';

export interface PeriodicElement {
  uref: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  country: string;
  city: string;
  birth: string;
  geoplace: string; // position
  status: string;
  group: string;
  created: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    uref: '1',
    firstname: 'Adjo',
    lastname: 'BOKON',
    email: 'adjobokon@gmail.com',
    phone: '91 74 74 74',
    whatsapp: '',
    address: 'Lomé Zanguera',
    country: 'TOGO',
    city: 'Lomé',
    birth: '',
    geoplace: '',
    status: 'Saint',
    group: '',
    created: ''
  },
  {
    uref: '2',
    firstname: 'Matthias',
    lastname: 'DOLA',
    email: 'matthiasdola@gmail.com',
    phone: '91 74 67 97',
    whatsapp: '',
    address: 'Lomé Agoè',
    country: 'TOGO',
    city: 'Lomé',
    birth: '',
    geoplace: '',
    status: 'Saint',
    group: '',
    created: ''
  },
  {
    uref: '3',
    firstname: 'Deric',
    lastname: 'AKAKPO',
    email: 'dericakakpo@gmail.com',
    phone: '91 74 67 97',
    whatsapp: '',
    address: 'Lomé Agoè',
    country: 'TOGO',
    city: 'Lomé',
    birth: '',
    geoplace: '',
    status: 'Saint',
    group: '',
    created: ''
  },
];

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  displayedColumns: string[] =
  ['select', 'firstname', 'lastname', 'email', 'phone', 'whatsapp', 'address',
 'city', 'status', 'actions'];
   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
   selection = new SelectionModel<PeriodicElement>(true, []);
   searchValue: any;
   patients: any[];
   loading: boolean;

  @ViewChild(MatTable, {static: true}) patientstable: MatTable<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

   constructor(
     private patientService: PatientServiceService,
     private firebaseService: FirebaseService,
     private router: Router
   ) { }

   ngOnInit() {
     this.loading = true;
     this.patients = [];
     this.firebaseService.getPatients().subscribe(
       res => {
         /*
         res.forEach(element => {
            const item = {
              uref: element.id,
              firstname:  element.firstname,
              lastname: element.lastname,
              email: element.email,
              phone: element.telephone1,
              whatsapp: element.telephone2,
              address: element.quartier,
              country: '',
              city: '',
              status: ''
            };
            this.patients.push(item);
         });
         */
         // this.dataSource.data = this.patients;
         // this.patientstable.renderRows();
         this.loading = false;
       },
       err => {
         this.loading = false;
       }
     );
   }

  openConfirmDeleteUserDialog(element) {}

  openDialog(element) {
  }

  openAddUserDialog() {

  }

  openPatientPage(element) {
    this.router.navigate(['/patient']);
  }

  openUpdatePatient(element) {

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
   checkboxLabel(row?: PeriodicElement): string {
     if (!row) {
       return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
     }
     return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.uref + 1}`;
   }

}
