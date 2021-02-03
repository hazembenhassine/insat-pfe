import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soutenances-admin',
  templateUrl: './soutenances-admin.component.html',
  styleUrls: ['./soutenances-admin.component.scss']
})
export class SoutenancesAdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  edit(){}

  
  detailsSoutenance(){
    this.router.navigate(['soutenances/details']);
  }

}
