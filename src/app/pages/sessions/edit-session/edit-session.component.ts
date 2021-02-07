import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionsService } from 'src/app/core/services/sessions.service';
import { UsersService } from 'src/app/core/services/users.service';
import { Session } from '../../../core/models/sessions.model';

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.scss']
})
export class EditSessionComponent implements OnInit {
  id:string;
  loading= false;
  profs=[{
    'id':1,'name':'tarek','lastName':'jarrar'
  }];

  sessionForm=new FormGroup({
    dates:new FormControl(''),
    capacity:new FormControl(''),
    president: new FormControl(''),
  });
  currentData:Session;

  constructor(private userService:UsersService,private router:Router,private sessionsService:SessionsService,public dialogRef: MatDialogRef<EditSessionComponent>,
    @Inject(MAT_DIALOG_DATA) data ) {this.id = data.id;}

  ngOnInit(): void {
    this.getProfessors();
    this.getSessionById(this.id);
  }


  onSubmit(){
    this.dialogRef.close();
    const session={
      "startDate":this.sessionForm.value.dates[0],
      "endDate":this.sessionForm.value.dates[1],
      "capacity":this.sessionForm.value.capacity,
      "president":this.sessionForm.value.presidentId
    }
    this.sessionsService.addSession(session);
  }

  getSessionById(sessionId: string){
    this.sessionsService.getSessionById(sessionId).subscribe(
      (value:any)=>{
        this.currentData=value;
        this.sessionForm.patchValue(value);
      },err=>{
        // tslint:disable-next-line:no-console
        console.log(err)
      }
     )  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getProfessors(){
    this.loading = true
    this.userService.getProfessors().then(
      res => {
        this.profs=res;
      }).catch(
      error => {
        // tslint:disable-next-line:no-console
        console.log(error)
      }
    ).finally(() => {
      this.loading = false
    })}




}
