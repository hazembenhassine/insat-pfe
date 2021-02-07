import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectRequestsComponent } from './project-requests/project-requests.component';

import { RequestsComponent } from './requests.component';
import { SessionRequestsComponent } from './session-requests/session-requests.component';
import { SupervisionRequestsComponent } from './supervision-requests/supervision-requests.component';

const routes: Routes = [
  { path: '', component: RequestsComponent,pathMatch: 'full'},
  {path:'session-requests',component:SessionRequestsComponent},
  {path:'supervision-requests',component:SupervisionRequestsComponent},
  {path:'project-requests',component:ProjectRequestsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
