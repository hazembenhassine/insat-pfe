import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from "./users.component";
import {AddStudentsComponent} from "./students/add-students/add-students.component";
import {UsersRoutingModule} from "./users-routing.module";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { AddProfessorsComponent } from './professors/add-professors/add-professors.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [UsersComponent, AddStudentsComponent, AddProfessorsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTabsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ]
})
export class UsersModule {
}
