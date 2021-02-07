import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {SessionsRoutingModule} from './sessions-routing.module';
import {SessionsComponent} from './sessions.component';
import {DetailsSessionComponent} from './details-session/details-session.component';
import {CreateSessionComponent} from './create-session/create-session.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {EditSessionComponent} from './edit-session/edit-session.component';
import {PlanSessionComponent} from './plan-session/plan-session.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import {SchedulerComponent} from './plan-session/scheduler/scheduler.component';
import {CalendarModule, DateAdapter} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/moment";
import {SchedulerModule} from "angular-calendar-scheduler";
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import * as moment from 'moment';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


registerLocaleData(localeFr);

export function momentAdapterFactory() {
  return adapterFactory(moment);
}

@NgModule({
  declarations: [SessionsComponent, DetailsSessionComponent, CreateSessionComponent, EditSessionComponent, PlanSessionComponent, SchedulerComponent],
  imports: [
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: momentAdapterFactory
    }),
    SchedulerModule.forRoot({locale: 'fr', headerDateFormat: 'daysRange'}),
    CommonModule,
    SessionsRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatStepperModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class SessionsModule {
}
