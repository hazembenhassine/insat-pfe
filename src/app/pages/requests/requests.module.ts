import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsComponent } from './requests.component';
import { SessionRequestsComponent } from './session-requests/session-requests.component';
import { ProjectRequestsComponent } from './project-requests/project-requests.component';
import { SupervisionRequestsComponent } from './supervision-requests/supervision-requests.component';


@NgModule({
  declarations: [RequestsComponent, SessionRequestsComponent, ProjectRequestsComponent, SupervisionRequestsComponent],
  imports: [
    CommonModule,
    RequestsRoutingModule
  ]
})
export class RequestsModule { }
