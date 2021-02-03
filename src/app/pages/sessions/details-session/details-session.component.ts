import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-session',
  templateUrl: './details-session.component.html',
  styleUrls: ['./details-session.component.scss']
})
export class DetailsSessionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  showDetails(){
    this.router.navigate(['/soutenances/details'])
  }
}
