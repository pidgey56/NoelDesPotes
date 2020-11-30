import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-view-groupe-mobile',
  templateUrl: './view-groupe-mobile.component.html',
  styleUrls: ['./view-groupe-mobile.component.scss']
})
export class ViewGroupeMobileComponent implements OnInit {



  constructor(private router: Router) { }

  user;
  groupes = [];
  ngOnInit(): void {
    this.user = firebase.default.auth().currentUser;
    firebase.default.database().ref(this.user.uid).on('value', (data)=>{
      this.groupes = data.val() ? data.val() : [];
      console.log(this.groupes);
    })
    
  }


  goto(id){
    this.router.navigate(['Mes groupes',id]);
  }

}
