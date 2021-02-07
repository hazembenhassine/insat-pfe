import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateSessionComponent} from './create-session/create-session.component';
import {DetailsSessionComponent} from './details-session/details-session.component';
import {EditSessionComponent} from './edit-session/edit-session.component';

import {SessionsComponent} from './sessions.component';
import {PlanSessionComponent} from "./plan-session/plan-session.component";
import {ProfessorResolver} from "../../core/resolvers/professor.resolver";
import {SessionResolver} from "../../core/resolvers/session.resolver";

const routes: Routes = [
  {path: '', component: SessionsComponent, resolve: {sessions: SessionResolver}, pathMatch: 'full'},
  {path: ':id/details', component: DetailsSessionComponent},
  {path: ':id/edit', component: EditSessionComponent},
  {path: 'new', component: CreateSessionComponent, resolve: {professors: ProfessorResolver}},
  {path: ':id/plan', component: PlanSessionComponent, resolve: {professors: ProfessorResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule {
}
