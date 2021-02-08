import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Session} from '../models/sessions.model';
import {HttpClient} from '@angular/common/http';
import {Student} from "../models/student.model";
import {Enterprise} from "../models/entreprise.model";
import {Project} from "../models/project.model";
import {Professor} from "../models/professor.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  public projectUR;

  constructor(private http: HttpClient) {
  }

  sendSessionRequest(sessionId: string): Promise<any> {
    return this.http.put(`${environment.BASE_URL}/sessions/reserve`, {"sessionId": sessionId}).toPromise();
  }

  acceptSupervisionRequest(projectId: string) {
    return this.http.put(`${environment.BASE_URL}/projects/accept/${projectId}`, {}).toPromise();
  }

  acceptProjectRequest(projectId: string) {
    return this.http.put(`${environment.BASE_URL}/projects/validate/${projectId}`, {}).toPromise();
  }

  acceptSessionRequest(projectId): Promise<any> {
    return this.http.put(`${environment.BASE_URL}/sessions/confirm/${projectId}`, {}).toPromise();
  }

  getSupervisionRequests(): Promise<any> {
    return this.http.get(`${environment.BASE_URL}/projects/to-accept`).toPromise();
  }


  getProjectRequests(): Promise<any> {
    return this.http.get(`${environment.BASE_URL}/projects/to-accept`).toPromise();
  }

  /* getSessionRequests(sessionId): Promise<any> {

  } */

  addProject(project: Project): Promise<any> {
    return this.http.post(`${environment.BASE_URL}/projects`, project).toPromise()
  }

  getProject(): Promise<any> {
    return this.http.get(`${environment.BASE_URL}/projects`).toPromise()
  }

  getAllProjects(): Promise<any> {
    return this.http.get(`${environment.BASE_URL}/projects/all`).toPromise();
  }


  getProjectBySessionId(sessionId): Promise<any> {
    return this.http.get(`${environment.BASE_URL}/sessions/project/${sessionId}`).toPromise()
  }

}
