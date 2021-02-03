import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soutenances-prof',
  templateUrl: './soutenances-prof.component.html',
  styleUrls: ['./soutenances-prof.component.scss']
})
export class SoutenancesProfComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  detailsSoutenance(){
    this.router.navigate(['soutenances/details']);
  }

}
