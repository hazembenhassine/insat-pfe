import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {

  /* sessionForm = new FormGroup({
    startDate = new FormControl(''),
    endDate = new FormControl(''),
    capacity = new FormControl(''),
    president = new FormControl('')
  }); */
  startDate = new Date(2021, 1, 1);


  constructor() { }

  ngOnInit(): void {
  }


}
