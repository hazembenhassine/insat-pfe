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
    this.getRequests();
  }

  getRequests(){
     this.projectsService.getProjectRequests().then(
      res => {
        this.projects=res;
      }).catch(
      error => {
        console.log(error);
      }
    ).finally(() => {
    });
  }

  acceptProject(projectId: string){
    this.projectsService.acceptProjectRequest(projectId).then(
      res => {
        console.log(res);
         }).catch(
      error => {
        console.log(error);
            }
    ).finally(() => {});
    this.hide=true
  }

  showDetails(projectId){
  }





}
