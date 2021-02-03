import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { SessionsRoutingModule } from './sessions-routing.module';
import { SessionsComponent } from './sessions.component';
import { DetailsSessionComponent } from './details-session/details-session.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [SessionsComponent, DetailsSessionComponent, CreateSessionComponent],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SessionsModule { }
