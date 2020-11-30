import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PassForgotComponent } from './Auth/pass-forgot/pass-forgot.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { GroupViewComponent } from './group-view/group-view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JoinGroupComponent } from './join-group/join-group.component';
import { CreateMobileComponent } from './Mobile/create-mobile/create-mobile.component';
import { HomeComponent } from './Mobile/home/home.component';
import { JoinMobileComponent } from './Mobile/join-mobile/join-mobile.component';
import { NotFoundMobileComponent } from './Mobile/not-found-mobile/not-found-mobile.component';
import { SignInMobileComponent } from './Mobile/sign-in-mobile/sign-in-mobile.component';
import { SignUpMobileComponent } from './Mobile/sign-up-mobile/sign-up-mobile.component';
import { ViewGroupeMobileComponent } from './Mobile/view-groupe-mobile/view-groupe-mobile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './Service/auth-guard.service';
import { ApplicationStateService } from './Service/Screen/application-state.service';

const routes: Routes = [
  { path: "Acceuil", component: HomePageComponent },
  { path: "Créer un groupe", canActivate: [AuthGuardService], component: CreateGroupComponent },
  { path: "Mes groupes", canActivate: [AuthGuardService], component: GroupViewComponent },
  { path: "Rejoindre un groupe", canActivate: [AuthGuardService], component: JoinGroupComponent },
  { path: "Rejoindre un groupe/:id", canActivate: [AuthGuardService], component: JoinGroupComponent},
  { path: "Se connecter", component: SigninComponent },
  { path: "PassReset", component: PassForgotComponent},
  { path: "Inscription", component: SignupComponent },
  
  { path: '', component: HomePageComponent },
  { path: "**", component: PageNotFoundComponent },

]; // sets up routes constant where you define your routes

const mobile_routes: Routes = [
  { path: "Acceuil", component: HomeComponent },
  { path: "Créer un groupe", canActivate: [AuthGuardService], component: CreateMobileComponent },
  { path: "Mes groupes", canActivate: [AuthGuardService], component: ViewGroupeMobileComponent },
  { path: "Rejoindre un groupe", canActivate: [AuthGuardService], component: JoinMobileComponent },
  { path: "Se connecter", component: SignInMobileComponent },
  { path: "Inscription", component: SignUpMobileComponent },
  { path: '', component: HomeComponent},
  { path: "**", component: NotFoundMobileComponent },

]; // sets up routes constant where you define your routes



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  public constructor(private router: Router,
    private applicationStateService : ApplicationStateService){
      if (applicationStateService.getIsMobileResolution()) {
       console.log("mobile resolution")// router.resetConfig(mobile_routes);
      }

  }

  
}
