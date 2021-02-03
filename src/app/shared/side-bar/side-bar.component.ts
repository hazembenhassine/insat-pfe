import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  routes = [
    {
      label: 'Dashboard',
      link: 'dashboard',
      icon: 'fa-home'
    },
    {
      label: 'Soutenances',
      link: 'soutenances',
      icon: 'fa-user-graduate'
    },
    {
      label: 'Soutenances etudiant',
      link: 'soutenances/etudiant',
      icon: ''
    },
    {
      label: 'Soutenances prof',
      link: 'soutenances/prof',
      icon: ''
    },
    {
      label: 'Soutenances admin',
      link: 'soutenances/admin',
      icon: ''
    },
    {
      label: 'Sessions',
      link: 'sessions',
      icon: 'fa-history'
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
