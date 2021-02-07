import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateSessionComponent } from './create-session/create-session.component';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { Session } from '../../core/models/sessions.model';
import { SessionsService } from 'src/app/core/services/sessions.service';


@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  sessions:Session[];
  constructor(private router:Router, public dialog: MatDialog,private sessionsService:SessionsService) { }

  ngOnInit(): void {
    this.sessions=this.getAllSessions();
  }
  

  createSession() {
      const dialogRef = this.dialog.open(CreateSessionComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


showDetails(id:string){
  this.router.navigate(['sessions',id,'details']);
  console.log("details for session n°",id)
}

delete(id:string){}


edit(id:string){
  const dialogRef = this.dialog.open(EditSessionComponent, {
    data:{id:id}
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

getAllSessions(): Session[] {
  return this.sessionsService.getSessions();}
}
