import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { $ } from 'protractor';
import { DetailsSoutenanceComponent } from './details-soutenance/details-soutenance.component';
import { SoutenancesEtudiantComponent } from './soutenances-etudiant/soutenances-etudiant.component';
import { SoutenancesComponent } from './soutenances.component';

const routes: Routes = [
  {
    path: '',
    component: SoutenancesComponent
  },
  {
    path: 'details',
    component: DetailsSoutenanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoutenancesRoutingModule { }


