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
    this.currentData=this.getSessionById(this.id);
    const currentDates=[this.currentData.startDate,this.currentData.endDate];
    this.sessionForm.patchValue({dates: currentDates, capacity: this.currentData.capacity,president: this.currentData.president});
  }
  
  
  onSubmit(){
    this.dialogRef.close();
    this.sessionsService.addSession(this.sessionForm.value.dates[0],this.sessionForm.value.dates[1],this.sessionForm.value.capacity,this.sessionForm.value.presidentId)
  }

  getSessionById(sessionId:String){
    return this.sessionsService.getSessionById(sessionId);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  

}
