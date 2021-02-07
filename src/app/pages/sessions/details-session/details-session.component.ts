import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SessionsService} from 'src/app/core/services/sessions.service';
import {Conference} from '../../../core/models/conference.model';
import {Session} from '../../../core/models/sessions.model';
import {SoutenancesService} from '../../../core/services/soutenances.service';

@Component({
  selector: 'app-details-session',
  templateUrl: './details-session.component.html',
  styleUrls: ['./details-session.component.scss']
})
export class DetailsSessionComponent implements OnInit {
  sessionId: string;
  session: Session;
  conferences: Conference[];
  loading = false

  constructor(private router: Router,
              private activatedRouter: ActivatedRoute,
              private soutenancesSession: SoutenancesService,
              private sessionsService: SessionsService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.sessionId = this.activatedRouter.snapshot.params['id'];
    this.getSessionById(this.sessionId)

    this.soutenancesSession.getConferencesBySession(this.sessionId).then(
      conferences => {
        this.conferences = conferences
        console.log(conferences)
      }
    )
    this.conferences = []
  }


  showDetailsConference(conferenceId: String) {
    this.router.navigate(['/soutenances', conferenceId, 'details']);
  }

  getSessionById(sessionId: string) {
    this.loading = true
    this.sessionsService.getSessionById(sessionId).subscribe(
      (value: any) => {
        this.session = value;
        this.session.startDate = this.session.startDate.split("T")[0]
        this.session.endDate = this.session.endDate.split("T")[0]
        this.loading = false
      }, err => {
        console.log(err)
      }
    )
  };

  programmerSoutenance() {
    this.router.navigate(['/sessions', this.sessionId, 'plan']);
  }
}
