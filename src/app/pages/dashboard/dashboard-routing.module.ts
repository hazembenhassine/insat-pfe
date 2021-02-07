import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { DashboardProfessorComponent } from './dashboard-professor/dashboard-professor.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'student',
    component: DashboardStudentComponent
  },
  {
    path: 'professor',
    component: DashboardProfessorComponent
  },
  {
    path: 'admin',
    component: DashboardAdminComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
