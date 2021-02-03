import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { $ } from 'protractor';
import { DetailsSoutenanceComponent } from './details-soutenance/details-soutenance.component';
import { SoutenancesAdminComponent } from './soutenances-admin/soutenances-admin.component';
import { SoutenancesEtudiantComponent } from './soutenances-etudiant/soutenances-etudiant.component';
import { SoutenancesProfComponent } from './soutenances-prof/soutenances-prof.component';
import { SoutenancesComponent } from './soutenances.component';

const routes: Routes = [
  { path: '', component: SoutenancesComponent , pathMatch: 'full'},
  { path:'details',component: DetailsSoutenanceComponent},
  { path:'etudiant',component: SoutenancesEtudiantComponent},
  { path:'prof',component: SoutenancesProfComponent}, 
  { path:'admin',component: SoutenancesAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoutenancesRoutingModule { }


