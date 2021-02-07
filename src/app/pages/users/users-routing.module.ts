import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {$} from 'protractor';
import {UsersComponent} from "./users.component";
import {AddStudentsComponent} from "./students/add-students/add-students.component";
import {AddProfessorsComponent} from "./professors/add-professors/add-professors.component";

const routes: Routes = [
  {path: '', component: UsersComponent, pathMatch: 'full'},
  {path: 'students/add', component: AddStudentsComponent},
  {path: 'professors/add', component: AddProfessorsComponent},
  // { path:'student/add',component: Add},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}


