import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSessionComponent } from './create-session/create-session.component';
import { DetailsSessionComponent } from './details-session/details-session.component';

import { SessionsComponent } from './sessions.component';

const routes: Routes = [
  { path: '', component: SessionsComponent,pathMatch:'full' },
  {path:'details',component:DetailsSessionComponent},
  {path:'new',component:CreateSessionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
