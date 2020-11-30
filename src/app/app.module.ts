import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CreateGroupComponent } from './create-group/create-group.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GroupViewComponent } from './group-view/group-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JoinGroupComponent } from './join-group/join-group.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { SignupComponent } from './Auth/signup/signup.component'; // CLI imports router
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './Service/auth-guard.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CreateMobileComponent } from './Mobile/create-mobile/create-mobile.component';
import { ViewGroupeMobileComponent } from './Mobile/view-groupe-mobile/view-groupe-mobile.component';
import { JoinMobileComponent } from './Mobile/join-mobile/join-mobile.component';
import { SignInMobileComponent } from './Mobile/sign-in-mobile/sign-in-mobile.component';
import { SignUpMobileComponent } from './Mobile/sign-up-mobile/sign-up-mobile.component';
import { NotFoundMobileComponent } from './Mobile/not-found-mobile/not-found-mobile.component';
import {MatCardModule} from '@angular/material/card';
import { JoinUrlComponent } from './join-url/join-url.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PassForgotComponent } from './Auth/pass-forgot/pass-forgot.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    CreateGroupComponent,
    GroupViewComponent,
    PageNotFoundComponent,
    JoinGroupComponent,
    SigninComponent,
    SignupComponent,
    CreateMobileComponent,
    ViewGroupeMobileComponent,
    JoinMobileComponent,
    SignInMobileComponent,
    SignUpMobileComponent,
    NotFoundMobileComponent,
    JoinUrlComponent,
    PassForgotComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
