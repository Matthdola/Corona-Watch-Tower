import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private db: AngularFirestore
  ) { }


  createPatient(patient) {
    return this.db.collection('users').add({
      email: patient.email,
      password: patient.password,
      firstname: patient.firstname,
      lastname: patient.lastname,
      profession: patient.profession,
      quartier: patient.quartier
    });
  }

  searchByFirstname(firstname) {

  }

  searchByProfession(profession) {

  }

  searchByQuartier(quartier) {

  }

  updatePatient(patient) {
    return null;
  }

  getPatients() {
    /*
    return new Promise<any> ((resolve, reject) => {
      this.afs.collections('/patients').snapshotchanges().
        subscribe(snapshots => {
          resolve(snapshots)
        })
    });
    */
    return this.db.collection('users').snapshotChanges();
  }
}
