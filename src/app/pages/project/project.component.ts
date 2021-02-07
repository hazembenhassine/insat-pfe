import { Component, OnInit } from '@angular/core';
import {Professor} from "../../core/models/professor.model";
import {ActivatedRoute} from "@angular/router";
import {Project} from "../../core/models/project.model";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project: Project
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { project: Project }) => {
      this.project = data.project
      console.log(this.project)
    })
  }

}
