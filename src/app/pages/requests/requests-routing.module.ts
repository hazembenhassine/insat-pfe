import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectRequestsComponent } from './project-requests/project-requests.component';

import { RequestsComponent } from './requests.component';
import { SessionRequestsComponent } from './session-requests/session-requests.component';
import { SupervisionRequestsComponent } from './supervision-requests/supervision-requests.component';
import { ProfessorGuard } from '../../core/guards/professor.guard';
import { AdminGuard } from '../../core/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: RequestsComponent,
    pathMatch: 'full'
  },
  {
    path:'session-requests',
    component:SessionRequestsComponent,
    canActivate: [AdminGuard]
  },
  {
    path:'supervision-requests',
    component:SupervisionRequestsComponent,
    canActivate: [ProfessorGuard]
  },
  {
    path:'project-requests',
    component:ProjectRequestsComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
