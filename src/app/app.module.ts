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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { GroupViewComponent } from './group-view/group-view.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JoinGroupComponent } from './join-group/join-group.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { SignupComponent } from './Auth/signup/signup.component'; // CLI imports router
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './Service/auth-guard.service';
import { GroupeComponent } from './groupe-view/groupe/groupe.component';


const routes: Routes = [
  {path:"Acceuil", component:HomePageComponent},
  {path:"Créer un groupe", canActivate: [AuthGuardService],component:CreateGroupComponent},
  {path:"Mes groupes", canActivate: [AuthGuardService], component: GroupViewComponent},
  {path:"Mes groupes/:id", canActivate: [AuthGuardService], component: GroupeComponent},
  {path:"Rejoindre un groupe", canActivate: [AuthGuardService], component: JoinGroupComponent},
  {path:"Se connecter", component: SigninComponent},
  {path:"Inscription", component: SignupComponent},
  {path:'', component: HomePageComponent},
  {path:"**", component:PageNotFoundComponent},
  
]; // sets up routes constant where you define your routes

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
    GroupeComponent,
    
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
    RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
