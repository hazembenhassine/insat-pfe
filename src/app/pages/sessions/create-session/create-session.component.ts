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
    'id':1,'name':'tarek','lastname':'jarrar'
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
    this.sessionsService.addSession(this.sessionForm.value.dates[0],this.sessionForm.value.dates[1],this.sessionForm.value.capacity,this.sessionForm.value.presidentId)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
