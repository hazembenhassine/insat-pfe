import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionsService } from 'src/app/core/services/sessions.service';
import { Conference } from 'src/app/core/models/conference.model';
import { Session } from 'src/app/core/models/sessions.model';
import { SoutenancesComponent } from '../soutenances.component';
import { SoutenancesService } from '../soutenances.service';

@Component({
  selector: 'app-soutenances-etudiant',
  templateUrl: './soutenances-etudiant.component.html',
  styleUrls: ['./soutenances-etudiant.component.scss']
})
export class SoutenancesEtudiantComponent implements OnInit {
  sessions:Session[];
  myId: String;
  myConference:Conference;
  clicked=false;

  constructor(private router: Router,private sessionsService:SessionsService,private soutenancesSession:SoutenancesService) {}

  ngOnInit(): void {
    this.sessions=this.getSessions();
    this.myConference=this.getConferenceByStudent(this.myId)
  }

  showDetailsSoutenance(id:String){
    this.router.navigate(['soutenances',id,'details']);
  }

  getConferenceByStudent(studentId:String){
    return this.soutenancesSession.getConferenceByStudent(studentId);
  }

  getSessions(){
    return this.sessionsService.getSessions();
  }

  demanderSession(sessionId:String){
    this.clicked=true;
  }
}
