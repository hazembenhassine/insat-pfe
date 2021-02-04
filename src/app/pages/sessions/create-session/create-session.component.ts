import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {

  profs=[{
    'id':1,'name':'tarek','lastname':'jarrar'
  }];


  constructor(private router:Router,public dialogRef: MatDialogRef<CreateSessionComponent>) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
