import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conference } from 'src/app/shared/models/conference.model';
import { Session } from 'src/app/shared/models/session.model';
import { SoutenancesService } from '../../soutenances/soutenances.service';
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'app-details-session',
  templateUrl: './details-session.component.html',
  styleUrls: ['./details-session.component.scss']
})
export class DetailsSessionComponent implements OnInit {
  sessionId:string;
  session: Session;
  conferences:Conference[];
  constructor(private router:Router,private activatedRouter:ActivatedRoute,private soutenancesSession:SoutenancesService,private sessionsService:SessionsService) { }

  ngOnInit(): void {
    this.sessionId=this.activatedRouter.snapshot.params['id'];
    this.session=this.getSessionById(this.sessionId);
    console.log(this.session);
    this.conferences=this.getSessionConferences(this.sessionId) 
  }

  getSessionConferences(sessionId:string){
    return this.soutenancesSession.getConferencesBySession(sessionId);
  }

  showDetailsConference(conferenceId:String){
    this.router.navigate(['/soutenances',conferenceId,'details']);
  }

  getSessionById(sessionId:string){
    return this.sessionsService.getSessionById(sessionId);
  }

}
