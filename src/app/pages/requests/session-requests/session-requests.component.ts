import {Component, OnInit} from '@angular/core';
import {Project} from 'src/app/core/models/project.model';
import {ProjectsService} from 'src/app/core/services/projects.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-session-requests',
  templateUrl: './session-requests.component.html',
  styleUrls: ['./session-requests.component.scss']
})
export class SessionRequestsComponent implements OnInit {
  projects: Project[];

  constructor(private projectsService: ProjectsService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getSessionRequests();
  }

  getSessionRequests() {
    this.projectsService.getAllProjects().then(
      (projects: Project[]) => {
        console.log(projects)
        this.projects = projects.filter(project => project.state === "PENDING")
      }).catch(
      error => {
      }
    ).finally(() => {
    });
  }

  acceptSessionRequest(projectId) {
    this.projectsService.acceptSessionRequest(projectId).then(
      res => this.toastr.success("Projet affecté avec succes")
    );
  }


  showDetails(id) {
  }
}
