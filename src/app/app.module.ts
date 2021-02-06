import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SessionRequestsComponent } from './pages/session-requests/session-requests.component';
import { ProjectRequestsComponent } from './pages/project-requests/project-requests.component';
import { SupervisionRequestsComponent } from './pages/supervision-requests/supervision-requests.component';


@NgModule({
  declarations: [
    AppComponent,
    SessionRequestsComponent,
    ProjectRequestsComponent,
    SupervisionRequestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
