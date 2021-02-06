import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConferenceRole } from 'src/app/shared/models/conference-role.model';
import { Conference } from 'src/app/shared/models/conference.model';
import { Session } from 'src/app/shared/models/session.model';
import { SessionsService } from '../../sessions/sessions.service';
import { SoutenancesService } from '../soutenances.service';

@Component({
  selector: 'app-soutenances-prof',
  templateUrl: './soutenances-prof.component.html',
  styleUrls: ['./soutenances-prof.component.scss']
})
export class SoutenancesProfComponent implements OnInit {
  soutenancesRoles:ConferenceRole[];
  id;
  

  constructor(private router: Router ,private soutenanceSession:SoutenancesService,private SessionsService:SessionsService ) { }
   

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
