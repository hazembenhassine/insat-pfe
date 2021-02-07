import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Professor } from 'src/app/core/models/professor.model';
import { SessionsService } from 'src/app/core/services/sessions.service';
import { UsersService } from 'src/app/core/services/users.service';


@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {

  profs:Professor[]=[];

  sessionForm=new FormGroup({
    dates:new FormControl(''),
    capacity:new FormControl(''),
    president: new FormControl(''),
  });
  loading= false;


  constructor(private userService:UsersService,private router:Router,public dialogRef: MatDialogRef<CreateSessionComponent>,private sessionsService:SessionsService) { }

  ngOnInit(): void {   
    this.getProfessors(); 
  }

  onSubmit(){
    this.dialogRef.close();
    const session={
      "startDate":this.sessionForm.value.dates[0],
      "endDate":this.sessionForm.value.dates[1],
      "capacity":this.sessionForm.value.capacity,
      "president":this.sessionForm.value.president._id
    }
    console.log(session);
    this.sessionsService.addSession(session).subscribe(
      (response)=>{
        console.log(response);
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

  getProfessors(){
  this.loading = true
  this.userService.getProfessors().then(
    res => {
      this.profs=res;
    }).catch(
    error => {
      console.log(error)
    }
  ).finally(() => {
    this.loading = false
  })}


}
