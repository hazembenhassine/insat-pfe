import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionsService } from 'src/app/core/services/sessions.service';
import { ConferenceRole } from 'src/app/core/models/conference-role.model';
import { Conference } from 'src/app/core/models/conference.model';
import { Session } from 'src/app/core/models/sessions.model';
import { SoutenancesService } from '../../../core/services/soutenances.service';

@Component({
  selector: 'app-soutenances-prof',
  templateUrl: './soutenances-prof.component.html',
  styleUrls: ['./soutenances-prof.component.scss']
})
export class SoutenancesProfComponent implements OnInit {
  soutenancesRoles:ConferenceRole[];
  id;


  constructor(private router: Router ,private soutenanceSession:SoutenancesService,private sessionsService:SessionsService ) { }


  ngOnInit() {
    this.soutenancesRoles=this.getAllConferencesRoles();
    console.log(this.soutenancesRoles);

  }

  detailsSoutenance(id :String){
    this.router.navigate(['soutenances',id,'details']);
  }



  getAllConferencesRoles(){
    return this.soutenanceSession.getConferencesRolesByProfId(this.id);
  }
}
