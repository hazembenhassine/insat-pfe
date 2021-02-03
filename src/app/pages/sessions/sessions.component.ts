import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  createSession() {
   this.router.navigate(['sessions/new']);
}

showDetails(){
  this.router.navigate(['sessions/details'])  
}

delete(){}

}
