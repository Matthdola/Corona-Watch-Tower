import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { PatientsComponent } from './modules/patients/patients.component';
import { RepartitionGeoComponent } from './modules/repartition-geo/repartition-geo.component';
import { HomeComponent } from './modules/home/home.component';
import { StudentListComponent } from './modules/student-list/student-list.component';
import { StudentCreateComponent } from './modules/student-create/student-create.component';
import { PatientComponent } from './modules/patient/patient.component';
import { SignUpComponent } from './shared/components/sign-up/sign-up.component';
import { LoginComponent } from './shared/components/login/login.component';
import { ForgotPasswordComponent } from './shared/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './shared/components/verify-email/verify-email.component';
import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard';
import { AuthGuard } from './shared/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'posts',
        component: PostsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'patients',
        component: PatientsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'repartitiongeo',
        component: AuthGuard
      },
      {
        path: 'patient',
        component: PatientComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'register-user',
    component: SignUpComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'verify-email-address',
    component: VerifyEmailComponent,
    canActivate: [SecureInnerPagesGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
