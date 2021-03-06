import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSessionComponent } from './create-session/create-session.component';
import { DetailsSessionComponent } from './details-session/details-session.component';
import { EditSessionComponent } from './edit-session/edit-session.component';

import { SessionsComponent } from './sessions.component';
import { PlanSessionComponent } from "./plan-session/plan-session.component";
import { ProfessorResolver } from "../../core/resolvers/professor.resolver";
import { SessionResolver } from "../../core/resolvers/session.resolver";
import { AdminGuard } from '../../core/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: SessionsComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard],
    resolve: {sessions: SessionResolver}
  },
  {
    path: ':id/details',
    component: DetailsSessionComponent
  },
  {
    path: ':id/edit',
    component: EditSessionComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'new',
    component: CreateSessionComponent,
    canActivate: [AdminGuard],
    resolve: {professors: ProfessorResolver}
  },
  {
    path: ':id/plan',
    component: PlanSessionComponent,
    canActivate: [AdminGuard],
    resolve: {professors: ProfessorResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule {
}
