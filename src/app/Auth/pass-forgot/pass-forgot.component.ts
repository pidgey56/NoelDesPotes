import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-pass-forgot',
  templateUrl: './pass-forgot.component.html',
  styleUrls: ['./pass-forgot.component.scss']
})
export class PassForgotComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage: string;


  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,) { }


  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }
  resetPassword() {
    const email = this.signupForm.get("email").value;

    firebase.default.auth().sendPasswordResetEmail(email).then(
      () => {

        this.errorMessage = "Un mail de réinitialisation vous a été envoyé à l'adresse "+email;
      },
      (error) => {
        this.errorMessage = error;
      })
  }
}
