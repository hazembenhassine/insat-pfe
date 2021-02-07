import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProjectComponent} from './project.component';
import {AddProjectComponent} from './add-project/add-project.component';
import {ProjectResolver} from '../../core/resolvers/project.resolver';
import {EnterpriseResolver} from "../../core/resolvers/enterprise.resolver";
import {ProfessorResolver} from "../../core/resolvers/professor.resolver";

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    resolve: {
      project: ProjectResolver
    }

  },
  {
    path: 'add',
    component: AddProjectComponent,
    resolve: {
      professors: ProfessorResolver
    }

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {
}
