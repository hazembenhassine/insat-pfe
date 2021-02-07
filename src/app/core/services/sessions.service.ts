import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Session} from '../models/sessions.model';
import {HttpClient} from '@angular/common/http';
import {Student} from "../models/student.model";
import {Enterprise} from "../models/entreprise.model";
import {Project} from "../models/project.model";
import {Professor} from "../models/professor.model";

@Injectable({
  providedIn: 'root'
})

export class SessionsService {
  public sessionsURL;
  student1 = new Student("1", "Khaled", "Ghamgui", "gham.khaled@gmail.com", "GL", '4');
  student2 = new Student("2", "Tarek", "Jarrar", "gham.khaled@gmail.com", "GL", '4');
  prof = new Professor("1", "Saloua", "Ben Yahia", "sby@gmail.com", "Info", "chamta");
  enterprise = new Enterprise("bchal", "Vynd", "Sokra", "Nouisser");
  project1 = new Project("1", "Serverless computing", "akwa projeeet", this.prof, this.student1, this.enterprise, "GL", "cycle")
  project2 = new Project("2", "IA", "theni akwa projeeet", this.prof, this.student2, this.enterprise, "GL", "cycle")
  session1 = {
    'id': "1",
    'startDate': "27/06/2021",
    'endDate': "27/09/2021",
    'capacity': 250,
    'president': "dr.Ali Abdenadher"
  };
  session2 = {
    'id': "2",
    'startDate': "15/09/2021",
    'endDate': "15/10/2021",
    'capacity': 300,
    'president': "dr.Riadh Robbana"
  }

  sessions: Session[] = [this.session1, this.session2];

  constructor(private http: HttpClient) {
  }

  /* getAllSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(this.sessionsURL + '/getAllSessions')
  } */

  getSessions() {
    return this.sessions;
  }

  getProjects() {
    return [this.project2, this.project1]
  }

  getSessionProjects(sessionId: string): Project[] {
    if (sessionId === "1") return [this.project1];
    if (sessionId === "2") return [this.project2];
  }

  addSession(startDate: Date, endDate: Date, capacity: number, presidentId: String) {
    console.log("session added!")
  }

  getSessionById(sessionId: String) {
    if (sessionId === "1") return this.session1;
    else return this.session2;
  }

}
