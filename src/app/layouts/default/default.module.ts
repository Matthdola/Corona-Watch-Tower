import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatSliderModule} from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PatientsComponent } from 'src/app/modules/patients/patients.component';
import { RepartitionGeoComponent } from 'src/app/modules/repartition-geo/repartition-geo.component';
import { PatientMapItemComponent } from 'src/app/modules/patient-map-item/patient-map-item.component';
import { UserProfilComponent } from 'src/app/modules/user-profil/user-profil.component';
import { AgmCoreModule } from '@agm/core';

import { GraphComponent } from 'src/app/visuals/graph/graph.component';
import { SHARED_VISUALS, LinkVisualComponent, NodeVisualComponent } from 'src/app/visuals/shared';
import { D3_DIRECTIVES, D3Service, ZoomableDirective, DraggableDirective } from 'src/app/d3';
import { PatientDialogComponent } from 'src/app/modules/patient-dialog/patient-dialog.component';
import { PatientComponent } from 'src/app/modules/patient/patient.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    PatientsComponent,
    RepartitionGeoComponent,
    PatientMapItemComponent,
    UserProfilComponent,
    GraphComponent,
    NodeVisualComponent,
    LinkVisualComponent,
    ZoomableDirective,
    DraggableDirective,
    PatientDialogComponent,
    PatientComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatPseudoCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatDatepickerModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatGridListModule,
    MatExpansionModule,
    MatStepperModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCGvQ8knHyLuE4gbs5d2w5mO2tW-8tgVYs'
    })
  ],
  providers: [
    D3Service
  ],
  entryComponents: [
    PatientMapItemComponent,
    PatientDialogComponent,
  ]
})
export class DefaultModule { }
