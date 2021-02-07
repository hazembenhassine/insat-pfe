import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionsService } from 'src/app/core/services/sessions.service';
import { Conference } from '../../../core/models/conference.model';
import { Session } from '../../../core/models/sessions.model';
import { SoutenancesService } from '../../../core/services/soutenances.service';

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
