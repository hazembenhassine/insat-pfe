import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProjectRoutingModule} from './project-routing.module';
import {ProjectComponent} from './project.component';
import {AddProjectComponent} from './add-project/add-project.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [ProjectComponent, AddProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    TextFieldModule,
    ReactiveFormsModule,

  ]
})
export class ProjectModule {
}
