import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/project.model';
import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'app-supervision-requests',
  templateUrl: './supervision-requests.component.html',
  styleUrls: ['./supervision-requests.component.scss']
})
export class SupervisionRequestsComponent implements OnInit {
  projects:Project[];

  constructor(private projectsService:ProjectsService) {}

  ngOnInit(): void {
    this.getSupervisionRequests();
  }

  acceptSupervisionRequest(projectId){
    this.projectsService.acceptSupervisionRequest(projectId).then(
      res => {
       console.log(res)
      }).catch(
      error => {
        console.log(error)
      }
    ).finally(() => {
    });
  }

  getSupervisionRequests(){
    return this.projectsService.getSupervisionRequests().then(
      res => {
        this.projects=res;
      }).catch(
      error => {
        console.log(error)
      }
    ).finally(() => {
     
    });
  }

  showDetails(id){

  }

}
