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
      isExpanded: false,
      children: [
        'test1',
        'test2'
      ]
    },
    {
      label: 'Soutenances',
      link: 'soutenances',
      icon: '',
      children: [
        'test1',
        'test2'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
