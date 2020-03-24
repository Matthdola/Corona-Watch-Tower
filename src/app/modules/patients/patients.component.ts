import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

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
  'country', 'city', 'status', 'group', 'created'];
   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
   selection = new SelectionModel<PeriodicElement>(true, []);
   searchValue: any;

   constructor() { }

   ngOnInit() {
   }

  openConfirmDeleteUserDialog() {}

  openAddUserDialog() {

  }

  openDialog(action, element) {

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
