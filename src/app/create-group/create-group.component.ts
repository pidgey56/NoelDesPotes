import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  constructor(private router: Router,
    private formBuilder: FormBuilder,
  ) { }
  flagValider = false;
  userForm: FormGroup;
  errorMessage: string;
  listeDesPotes : any;
  identifiantDuGroupe : String = '';
  creatorName : string;
  groupeName : string;
  voir = false;
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      usersList: ['', [Validators.required]],
      nomCreateur: ['', [Validators.required]],
      nomGroupe: ['', [Validators.required]],
    })
  }
  makeId(length: number) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  CreateGroup(numberOfPerson: number) {
    this.router.navigate(['/Créer un groupe', numberOfPerson]);
  }

  onSubmit() {
    let users = this.userForm.get('usersList').value;
    this.creatorName = this.userForm.get('nomCreateur').value;
    this.groupeName = this.userForm.get('nomGroupe').value;
    let reg = new RegExp("[ ,;/]+", "g");
    while(users.charAt(users.length -1)==' '){
      users = users.slice(0,-1);
    }
    let usersList = users.split(reg);

    usersList.push(this.creatorName);
    const usersList2 = this.distribution(usersList);
    const out = [];
    for(let i = 0; i<usersList.length;i++){
      out.push([usersList[i],usersList2[i]]);
    }
    this.listeDesPotes = out;
    this.flagValider = true;
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  valider(){
    const id = this.makeId(6);
    const GroupeDePoteDistribution = {
      code : id,
      listedespotes : this.listeDesPotes,
      groupeName : this.groupeName,
      creator: firebase.default.auth().currentUser.uid,
    }
    this.identifiantDuGroupe = id;
    firebase.default.database().ref(id).set(GroupeDePoteDistribution);
    let userGroups = [];
    const user = firebase.default.auth().currentUser;
    firebase.default.database().ref(user.uid).on('value', (data)=>{
      userGroups = data.val() ? data.val() : [];
    })

    userGroups.push({
      id : id,
      GiftTo : this.listeDesPotes[this.listeDesPotes.length-1][1],
      groupeName : this.groupeName
    });
    firebase.default.database().ref(user.uid).set(userGroups).then(()=>{
      this.router.navigate(["/Mes groupes"])
    })
  }

  distribution(list1) {
    let list2 = [...list1];
    let flag = true;
    while (flag) {
      flag = false;
      this.shuffle(list2);
      for (let i = 0; i < list2.length; i++) {
        if (list1[i] == list2[i]) {
          flag = true;
        }
      }
    }
    return list2;
  }
}
