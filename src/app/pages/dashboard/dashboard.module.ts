import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CalendarModule } from 'angular-calendar';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { DashboardProfessorComponent } from './dashboard-professor/dashboard-professor.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';


@NgModule({
  declarations: [DashboardComponent, DashboardStudentComponent, DashboardProfessorComponent, DashboardAdminComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CalendarModule
  ]
})
export class DashboardModule { }
