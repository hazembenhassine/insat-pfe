import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { SessionsRoutingModule } from './sessions-routing.module';
import { SessionsComponent } from './sessions.component';
import { DetailsSessionComponent } from './details-session/details-session.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { EditSessionComponent } from './edit-session/edit-session.component';




@NgModule({
  declarations: [SessionsComponent, DetailsSessionComponent, CreateSessionComponent, EditSessionComponent],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    MatInputModule,
    MatSelectModule,
    MatDialogModule    
  ]
})
export class SessionsModule { }
