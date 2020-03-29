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
        component: PostsComponent
      },
      {
        path: 'patients',
        component: PatientsComponent
      },
      {
        path: 'repartitiongeo',
        component: RepartitionGeoComponent
      }
    ]
  },
  {
    path: 'courses',
    component: HomeComponent
  },
  {
    path: 'students',
    component: StudentListComponent
  },
  {
    path: 'enroll',
    component: StudentCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
