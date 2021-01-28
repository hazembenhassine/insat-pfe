import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoutenancesComponent } from './soutenances.component';
import { SoutenancesRoutingModule } from './soutenances-routing.module';
import { SoutenancesEtudiantComponent } from './soutenances-etudiant/soutenances-etudiant.component';



@NgModule({
  declarations: [SoutenancesComponent, SoutenancesEtudiantComponent],
  imports: [
    CommonModule,
    SoutenancesRoutingModule
  ]
})
export class SoutenancesModule { }
