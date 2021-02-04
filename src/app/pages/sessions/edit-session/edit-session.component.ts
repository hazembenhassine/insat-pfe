import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.scss']
})
export class EditSessionComponent implements OnInit {
  id:string;
  profs=[{
    'id':1,'name':'tarek','lastname':'jarrar'
  }];
  constructor(private router:Router,public dialogRef: MatDialogRef<EditSessionComponent>,
    @Inject(MAT_DIALOG_DATA) data ) {this.id = data.id; }

  ngOnInit(): void {
  }
  
  onSubmit(){}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
