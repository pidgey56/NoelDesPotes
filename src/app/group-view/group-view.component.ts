import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.scss']
})
export class GroupViewComponent implements OnInit {

  constructor(private router: Router) { }

  user;
  groupes = [];
  ngOnInit(): void {
    this.user = firebase.default.auth().currentUser;
    firebase.default.database().ref(this.user.uid).on('value', (data)=>{
      this.groupes = data.val() ? data.val() : [];
    })
  }


  goto(id){
    this.router.navigate(['Mes groupes',id]);
  }
}
