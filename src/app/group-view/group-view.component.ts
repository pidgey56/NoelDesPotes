import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.scss']
})
export class GroupViewComponent implements OnInit {
  durationInSeconds: number = 5;

  constructor(private router: Router,
    private _snackBar: MatSnackBar) { }
  imgSrc = "../../assets/logo-sans-blanc.png";
  imgSrc2 = "../../assets/ouvert.png";
  user;
  openBool = false;
  groupes: Array<any> = [];
  ngOnInit(): void {
    this.user = firebase.default.auth().currentUser;
    firebase.default.database().ref(this.user.uid).on('value', (data) => {
      if (data.val != null) {
        this.groupes = data.val();
      }
      let output: Array<any> = [];
      if (this.groupes != null) {
        for (let i = 0; i < this.groupes.length; i++) {
          output.push({
            GiftTo: this.groupes[i].GiftTo,
            groupeName: this.groupes[i].groupeName,
            id: this.groupes[i].id,
            display: false,
            imgSrc: this.imgSrc,
            imgSrc2: this.imgSrc2,
          })
        }
        this.groupes = output;
      }
      console.log(this.groupes);
    })


  }


  open(groupe) {
    console.log("open");
    groupe.display = !groupe.display;
  }

  mouseHover(groupe) {
    groupe.imgSrc = "../../assets/ouvert.png"
  }
  mouseOut(groupe) {
    groupe.imgSrc = "../../assets/logo-sans-blanc.png"
  }
  mouseHover2(groupe) {
    groupe.imgSrc2 = "../../assets/logo-sans-blanc.png"
  }
  mouseOut2(groupe) {
    groupe.imgSrc2 = "../../assets/ouvert.png"
  }


  goto(id) {
    this.router.navigate(['Mes groupes', id]);
  }
  openSnackBar() {
    this._snackBar.open("Lien copié dans le press papier","X", {

    })
  }

  copyfct(texte){
    let text = "https://noel-des-potes.web.app/Rejoindre%20un%20groupe/"+texte;
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
      
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    }).then(()=>{

      this.openSnackBar();
    })
    
  }

}
