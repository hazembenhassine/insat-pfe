import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProjectRoutingModule} from './project-routing.module';
import {ProjectComponent} from './project.component';
import {AddProjectComponent} from './add-project/add-project.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import {ReactiveFormsModule} from "@angular/forms";
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ProjectComponent, AddProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    TextFieldModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,

  ]
})
export class ProjectModule {
}
