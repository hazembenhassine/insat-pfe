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
      icon: '',
    },
    {
      label: 'Soutenances',
      link: 'soutenances',
      icon: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
