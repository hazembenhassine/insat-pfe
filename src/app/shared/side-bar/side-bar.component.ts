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
    },
    {
      label :'Propositions de sujets',
      link: 'requests/project-requests',
      icon :"fa-folder-plus"
    },
    {
      label :"Demandes d'encadrement",
      link: 'requests/supervision-requests',
      icon :"fa-book"
    },
    {
      label :'affectations aux sessions',
      link: 'requests/session-requests',
      icon :"fa-calendar-plus"
    },

    {
      label: 'Ajouter Etudiant',
      link: 'users/students/add',
      icon: 'fa-user'
    },    {
      label: 'Ajouter Professeur',
      link: 'users/professors/add',
      icon: 'fa-user'
    },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
