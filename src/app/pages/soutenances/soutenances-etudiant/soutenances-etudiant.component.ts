import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionsService } from 'src/app/core/services/sessions.service';
import { Conference } from 'src/app/core/models/conference.model';
import { Session } from 'src/app/core/models/sessions.model';
import { SoutenancesComponent } from '../soutenances.component';
import { SoutenancesService } from '../../../core/services/soutenances.service';

@Component({
  selector: 'app-soutenances-etudiant',
  templateUrl: './soutenances-etudiant.component.html',
  styleUrls: ['./soutenances-etudiant.component.scss']
})
export class SoutenancesEtudiantComponent implements OnInit {
  sessions:Session[];
  myId: string;
  myConference:Conference;
  clicked=false;

  constructor(private router: Router,private sessionsService:SessionsService,private soutenancesSession:SoutenancesService) {}

  ngOnInit(): void {
    this.getSessions();
/*     this.myConference=this.getConferenceByStudent(this.myId)
 */
}

  showDetailsSoutenance(id: string){
    this.router.navigate(['soutenances',id,'details']);
  }

/*   getConferenceByStudent(studentId:string){
    return this.soutenancesSession.getConferenceByStudent(studentId);
  } */


  demanderSession(sessionId: string){
    this.clicked=true;
  }

  getSessions(){
    this.sessionsService.getSessions().subscribe(
      (values:any)=>{
        this.sessions=values;
      },err=>{
        // tslint:disable-next-line:no-console
        console.log(err);
      }
    )
  }

  /* getSessions(){
    return this.sessionsService.getSessions();
  } */

}
