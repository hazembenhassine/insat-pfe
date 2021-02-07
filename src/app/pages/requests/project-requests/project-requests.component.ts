import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/project.model';
import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'app-project-requests',
  templateUrl: './project-requests.component.html',
  styleUrls: ['./project-requests.component.scss']
})
export class ProjectRequestsComponent implements OnInit {
  projects:Project[];
  hide=false;

  constructor(private projectsService:ProjectsService) { }

  ngOnInit(): void {
    this.projects=this.getRequests();
  }

  getRequests(){
    return this.projectsService.getProjectRequests();
  }

  acceptProject(projectId:String){
    this.projectsService.acceptProjectRequest(projectId);
    this.hide=true
  }

  showDetails(projectId){
  }





}
