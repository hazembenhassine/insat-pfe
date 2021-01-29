import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoutenancesComponent } from './soutenances.component';
import { SoutenancesRoutingModule } from './soutenances-routing.module';
import { SoutenancesEtudiantComponent } from './soutenances-etudiant/soutenances-etudiant.component';
import { DetailsSoutenanceComponent } from './details-soutenance/details-soutenance.component';
import { SoutenancesProfComponent } from './soutenances-prof/soutenances-prof.component';



@NgModule({
  declarations: [SoutenancesComponent, SoutenancesEtudiantComponent, DetailsSoutenanceComponent, SoutenancesProfComponent],
  imports: [
    CommonModule,
    SoutenancesRoutingModule
  ]
})
export class SoutenancesModule { }
