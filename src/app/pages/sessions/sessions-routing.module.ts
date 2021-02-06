import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateSessionComponent} from './create-session/create-session.component';
import {DetailsSessionComponent} from './details-session/details-session.component';
import {EditSessionComponent} from './edit-session/edit-session.component';

import {SessionsComponent} from './sessions.component';
import {PlanSessionComponent} from "./plan-session/plan-session.component";

const routes: Routes = [
  {path: '', component: SessionsComponent, pathMatch: 'full'},
  {path: ':id/details', component: DetailsSessionComponent},
  {path: ':id/edit', component: EditSessionComponent},
  {path: 'new', component: CreateSessionComponent},
  {path: 'plan', component: PlanSessionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
