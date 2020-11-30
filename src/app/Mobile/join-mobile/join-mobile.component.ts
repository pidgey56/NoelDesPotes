import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-join-mobile',
  templateUrl: './join-mobile.component.html',
  styleUrls: ['./join-mobile.component.scss']
})
export class JoinMobileComponent implements OnInit {

  userForm: any;
  user;
  code;
  userGroups = [];
  constructor(private router: Router,
    private formBuilder: FormBuilder,) { }

  retour;
  listedespotes = [];
  ngOnInit(): void {    this.initForm();

  }

  initForm() {
    this.userForm = this.formBuilder.group({
      usersList: ['', [Validators.required]],
    })
  }

  onSubmit(){
    this.code = this.userForm.get('usersList').value;
    console.log(this.code);
    firebase.default.database().ref(this.code).on('value', (data)=>{
      this.retour = data.val() ? data.val() : [];
      console.log(this.retour);
      this.listedespotes = this.retour.listedespotes;
    })
    

  }

  validate(user){
    console.log(user);
    this.user = firebase.default.auth().currentUser;
    console.log(this.user.uid);
     
    firebase.default.database().ref(this.user.uid).on('value', (data)=>{
      this.userGroups = data.val() ? data.val() : [];
      console.log("userGroupe : ",this.userGroups)
    })
    this.userGroups.push({
      GiftTo: user[1],
      groupeName: this.retour.groupeName,
      id: this.retour.code,
    })
    //this.userGroups.push([this.code,user[1]])
    firebase.default.database().ref(this.user.uid).set(this.userGroups);
    this.router.navigate(['/Mes groupes']);
  }

}
