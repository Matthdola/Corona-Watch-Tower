import { Injectable, NgZone } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { auth } from 'firebase';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  userData: any;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
  ) {
    // Saving user data in localstorage when
    // logged in and setting up null when logged out
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }



  /*
  https://stackoverflow.com/questions/37403747/firebase-permission-denied

  https://morioh.com/p/5028714eeebf



   endConversation(chatID) {
    const agentMeta = {
        name: '',
        new: false
    };
    const userMeta = {
        new: false
    };
    this.db.database.ref(`Chat/${chatID}/meta-data/agent`).update(agentMeta);
    this.db.database.ref(`Chat/${chatID}/meta-data/user`).update(userMeta);
    }
    chat.component.tsendConversation() {
      this.chatService.endConversation(this.selectedUser);
    }

    sendMessage(user, message, chatID) {
      const messageData = {
          senderID: user.id,
          messageBody: message,
          senderName: user.name,
          timeStamp: new Date().getTime()
      };
      const agentMeta = {
          name: user.name,
          new: true
      };
      const userMeta = {
          new: false
      };    this.db.list(`Chat/${chatID}/messages`).push(messageData);
      this.db.database.ref(`Chat/${chatID}/meta-data/agent`).update(agentMeta);
      this.db.database.ref(`Chat/${chatID}/meta-data/user`).update(userMeta);
    }

    postMessage() {
      const user = {
          id: this.agent._id,
          name: this.agent.name
      };
      this.chatService.sendMessage(user, this.chatMessage, this.selectedUser);
    }

    this.chatService.getMessagesList().subscribe(messagesList => {
      this.messagesList = messagesList;
      this.usersList = Object.keys(this.messagesList).map(val => {
          return val;
      });
    });

    getMessages(user) {
      return this.db
      .list('Chat/' + user + '/messages', ref => {
      return ref.orderByChild('timeStamp');
      })
      .valueChanges();
    }
   */

  createPatient(patient): Promise<any> {
    /*
    return this.db.object('patients').add({
      email: patient.email,
      password: patient.password,
      firstname: patient.firstname,
      lastname: patient.lastname,
      profession: patient.profession,
      quartier: patient.quartier
    });
    */
   return this.db.object('patients').set(patient);
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
    return this.db.object('patients').valueChanges();
  }

  getPatientChecks() {
    /*
    return new Promise<any> ((resolve, reject) => {
      this.afs.collections('/patients').snapshotchanges().
        subscribe(snapshots => {
          resolve(snapshots)
        })
    });
    */
    return this.db.object('patients_checks').valueChanges();
  }
}
