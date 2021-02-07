import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionsService } from 'src/app/core/services/sessions.service';
import { Session } from '../../../core/models/sessions.model';

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.scss']
})
export class EditSessionComponent implements OnInit {
  id:string;
  
  profs=[{
    'id':1,'name':'tarek','lastName':'jarrar'
  }];

  sessionForm=new FormGroup({
    dates:new FormControl(''),
    capacity:new FormControl(''),
    president: new FormControl(''),
  });
  currentData:Session;

  constructor(private router:Router,private sessionsService:SessionsService,public dialogRef: MatDialogRef<EditSessionComponent>,
    @Inject(MAT_DIALOG_DATA) data ) {this.id = data.id;}

  ngOnInit(): void {
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

  getSessionById(sessionId:String){
    this.sessionsService.getSessionById(sessionId).subscribe(
      (value:any)=>{
        this.currentData=value;
        this.sessionForm.patchValue(value);
      },err=>{
        console.log(err)
      }
     )  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  

}
