import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { Role } from '../../core/enums/role.enum';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  routes = [
    {
      label: 'Dashboard',
      link: '/dashboard/student',
      icon: 'fa-home',
      roles: [Role.STUDENT]
    },
    {
      label: 'Dashboard',
      link: '/dashboard/professor',
      icon: 'fa-home',
      roles: [Role.PROFESSOR]
    },
    {
      label: 'Dashboard',
      link: '/dashboard/admin',
      icon: 'fa-home',
      roles: [Role.ADMIN]
    },
    {
      label: 'Ma Soutenance',
      link: '/soutenances/etudiant',
      icon: 'fa-user-graduate',
      roles: [Role.STUDENT]
    },
    {
      label: 'Soutenances',
      link: '/soutenances/prof',
      icon: 'fa-user-graduate',
      roles: [Role.PROFESSOR]
    },
    {
      label: 'Soutenances',
      link: '/soutenances/admin',
      icon: 'fa-user-graduate',
      roles: [Role.ADMIN]
    },
    {
      label: 'Sessions',
      link: '/sessions',
      icon: 'fa-history',
      roles: [Role.ADMIN]
    },
    {
      label :'Propositions de sujets',
      link: '/requests/project-requests',
      icon :"fa-folder-plus",
      roles: [Role.ADMIN]
    },
    {
      label :"Demandes d'encadrement",
      link: '/requests/supervision-requests',
      icon: "fa-book",
      roles: [Role.PROFESSOR]
    },
    {
      label :'Affectations aux sessions',
      link: '/requests/session-requests',
      icon: "fa-calendar-plus",
      roles: [Role.ADMIN]
    },
    {
      label: 'Ajouter Etudiant',
      link: '/users/students/add',
      icon: 'fa-user',
      roles: [Role.ADMIN]
    },
    {
      label: 'Ajouter Professeur',
      link: '/users/professors/add',
      icon: 'fa-user',
      roles: [Role.ADMIN]
    },
    {
      label: 'Mon Projet',
      link: '/project',
      icon: 'fa-project-diagram',
      roles: [Role.STUDENT]
    }
  ];

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-console
    console.log(this.authenticationService.role);
  }

  get role(): Role {
    return this.authenticationService.role;
  }

}
