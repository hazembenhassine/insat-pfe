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
    this.getSessions();
  }



/*   getAllConferences(){
    return this.soutenancesService.getAllConferences();
  } */

  getConferencesBySession(sessionId: string){
    return this.soutenancesService.getConferencesBySession(sessionId).then(
      res => {
       this.conferences=res;
      }).catch(
      error => {
        console.log(error)
      }
    ).finally(() => {
    });
  }

  onSessionClicked(id: string){
    this.clicked=true;
    this.getConferencesBySession(id);
   }

 previous(){
   this.clicked=false;
   this.conferences=[];
 }


  getSessions(){
    this.sessionsService.getSessions().subscribe(
      (values:any)=>{
        this.sessions=values;
      },err=>{
        console.log(err)
      }
    )
  }


 detailsSoutenance(id: string){
  this.router.navigate(['soutenances',id,'details']);
  }


/*  getAllSessions(){
  return this.sessionsService.getSessions();
  } */
}
