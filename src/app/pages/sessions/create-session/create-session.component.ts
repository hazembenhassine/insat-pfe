import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SessionsService } from 'src/app/core/services/sessions.service';


@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {

  profs=[{
    'id':1,'name':'tarek','lastName':'jarrar'
  }];

  sessionForm=new FormGroup({
    dates:new FormControl(''),
    capacity:new FormControl(''),
    president: new FormControl(''),
  });


  constructor(private router:Router,public dialogRef: MatDialogRef<CreateSessionComponent>,private sessionsService:SessionsService) { }

  ngOnInit(): void {    
  }

  onSubmit(){
    this.dialogRef.close();
    console.log(this.sessionForm.value)
    const session={
      "startDate":this.sessionForm.value.dates[0],
      "endDate":this.sessionForm.value.dates[1],
      "capacity":this.sessionForm.value.capacity,
      "president":this.sessionForm.value.presidentId
    }
    this.sessionsService.addSession(session).subscribe(
      (response)=>{
        alert("session created successfully!")
      },err=>{
        console.log(err);
        alert("session creation failed!")
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
