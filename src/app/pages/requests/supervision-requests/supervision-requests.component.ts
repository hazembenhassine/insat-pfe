import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/project.model';
import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'app-supervision-requests',
  templateUrl: './supervision-requests.component.html',
  styleUrls: ['./supervision-requests.component.scss']
})
export class SupervisionRequestsComponent implements OnInit {
  myId;
  projects:Project[];

  constructor(private projectsService:ProjectsService) {}

  ngOnInit(): void {
    this.projects=this.getSupervisionRequests();
  }

  acceptSupervisionRequest(projectId){
    this.projectsService.acceptSupervisionRequest(projectId);
  }

  getSupervisionRequests(){
    return this.projectsService.getSupervisionRequests(this.myId);
  }

  showDetails(id){

  }

}
