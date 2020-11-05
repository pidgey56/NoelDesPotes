import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createNewUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase.default.auth().createUserWithEmailAndPassword(email, password).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        });
    })
  }

  signInUser(email:string, password:string){
    return new Promise(
      (resolve, reject) => {
        firebase.default.auth().signInWithEmailAndPassword(email,password).then(
          ()=>{
            resolve();
          },
          (error) =>{
            reject(error);
          }
        )
      }
    )
  }

  signOutUser(){
    firebase.default.auth().signOut();
  }
}
