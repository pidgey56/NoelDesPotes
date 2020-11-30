import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-sign-in-mobile',
  templateUrl: './sign-in-mobile.component.html',
  styleUrls: ['./sign-in-mobile.component.scss']
})
export class SignInMobileComponent implements OnInit {


  signupForm: FormGroup;
  errorMessage: string;
  constructor(
    private formBuilder: FormBuilder,
    private authService : AuthService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    })
  }

  onSubmit(){
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;

    this.authService.signInUser(email,password).then(
      () => {
        this.router.navigate(['/Acceuil']);
      },
      (error) => {
        this.errorMessage = error;
      }
    )
  }

}
