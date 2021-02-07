import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CreateSessionComponent} from './create-session/create-session.component';
import {EditSessionComponent} from './edit-session/edit-session.component';
import {Session} from '../../core/models/sessions.model';
import {SessionsService} from 'src/app/core/services/sessions.service';
import {Professor} from "../../core/models/professor.model";


@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  sessions: Session[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              public dialog: MatDialog, private sessionsService: SessionsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { sessions: Session[] }) => {
      this.sessions = data.sessions
      this.sessions.map(session => {
        session.startDate = session.startDate.split("T")[0]
        session.endDate = session.endDate.split("T")[0]
        session.id = session._id
      })
    })
  }


  createSession() {
    const dialogRef = this.dialog.open(CreateSessionComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  showDetails(id: string) {
    this.router.navigate(['sessions', id, 'details']);
    console.log("details for session n°", id)
  }

  delete(id: string) {
  }


  edit(id: string) {
    const dialogRef = this.dialog.open(EditSessionComponent, {
      data: {id: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
