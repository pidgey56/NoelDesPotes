import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from "firebase";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Noel Des Potes';

  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyDaXY5HEDLzM0L4JzTV_QuT0NBaJXhuj8o",
      authDomain: "noel-des-potes.firebaseapp.com",
      databaseURL: "https://noel-des-potes.firebaseio.com",
      projectId: "noel-des-potes",
      storageBucket: "noel-des-potes.appspot.com",
      messagingSenderId: "726758925327",
      appId: "1:726758925327:web:856c26c3271e966527ef7a",
      measurementId: "G-3F7CYLRFDR"
    };
    firebase.default.initializeApp(firebaseConfig);
  }
}
