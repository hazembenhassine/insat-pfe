import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionsService } from 'src/app/core/services/sessions.service';
import { Conference } from 'src/app/core/models/conference.model';
import { Session } from 'src/app/core/models/sessions.model';
import { SoutenancesService } from '../../../core/services/soutenances.service';

@Component({
  selector: 'app-soutenances-prof',
  templateUrl: './soutenances-prof.component.html',
  styleUrls: ['./soutenances-prof.component.scss']
})
export class SoutenancesProfComponent implements OnInit {
  soutenances:Conference[];
  id;


  constructor(private router: Router ,private soutenanceSession:SoutenancesService,private sessionsService:SessionsService ) { }


  ngOnInit() {
    this.getAllConferences();
    console.log(this.soutenances);

  }

  detailsSoutenance(id :string){
    this.router.navigate(['soutenances',id,'details']);
  }



  getAllConferences(){
    return this.soutenanceSession.getConferencesByProf().then(
      res => {
        this.soutenances=res;
      }).catch(
      error => {
        console.log(error)
      }
    ).finally(() => {
    });
  }
}
