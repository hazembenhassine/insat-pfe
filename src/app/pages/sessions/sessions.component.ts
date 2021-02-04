import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateSessionComponent } from './create-session/create-session.component';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { Session } from './sessions.model';


@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  public sessions:Session[]=[
    {
      'id':1,
       'startDate':"27/06/2021",
       'endDate':"27/09/2021",
       'capacity':250,
       'president':"dr.Ali Abdenadher"
    },
    {
      'id':2,
      'startDate':"15/09/2021",
       'endDate':"15/10/2021",
       'capacity':300,
       'president':"dr.Riadh Robbana"
    }
  ];

  constructor(private router:Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createSession() {
  /*    this.router.navigate(['sessions/new']);
  */
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

}
