import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conference } from 'src/app/core/models/conference.model';
import { Session } from 'src/app/core/models/sessions.model';
import { SessionsService } from 'src/app/core/services/sessions.service';
import { SoutenancesService } from '../../../core/services/soutenances.service';

@Component({
  selector: 'app-soutenances-admin',
  templateUrl: './soutenances-admin.component.html',
  styleUrls: ['./soutenances-admin.component.scss']
})
export class SoutenancesAdminComponent implements OnInit {

  conferences:Conference[];
  clicked:boolean;
  sessions:Session[]=[];


  constructor(private router:Router,private soutenancesService:SoutenancesService,private sessionsService:SessionsService) { }

  ngOnInit(): void {
    this.clicked=false;
    this.sessions=this.getAllSessions();
  }



  getAllConferences(){
    return this.soutenancesService.getAllConferences();
  }

  getConferencesBySession(sessionId:String){
    return this.soutenancesService.getConferencesBySession(sessionId);
  }

  onSessionClicked(id:String){
    this.clicked=true;
    this.conferences=this.getConferencesBySession(id);
   }

 previous(){
   this.clicked=false;
   this.conferences=[];
 }

 getAllSessions(){
  return this.sessionsService.getSessions();
  }


 detailsSoutenance(id:String){
  this.router.navigate(['soutenances',id,'details']);
  }
}
