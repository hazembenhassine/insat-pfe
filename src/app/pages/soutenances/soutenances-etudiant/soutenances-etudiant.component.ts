import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soutenances-etudiant',
  templateUrl: './soutenances-etudiant.component.html',
  styleUrls: ['./soutenances-etudiant.component.scss']
})
export class SoutenancesEtudiantComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  detailsSoutenance(){
    this.router.navigate(['soutenances/details']);
  }

}
