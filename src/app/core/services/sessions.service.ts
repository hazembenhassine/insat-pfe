import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Session} from '../models/sessions.model';
import {HttpClient} from '@angular/common/http';
import {Student} from "../models/student.model";
import {Enterprise} from "../models/entreprise.model";
import {Project} from "../models/project.model";
import {Professor} from "../models/professor.model";
import { API_URL } from 'src/app/app.constatnt';


@Injectable({
  providedIn: 'root'
})

export class SessionsService {
  private sessionURL:string=API_URL+'session';



  public sessionsURL;
  student1: Student = <Student>{
    id: "1",
    name: "Khaled",
    lastName: "Ghamgui",
    email: "gham.khaled@gmail.com",
    cin: "01",
    field: "GL",
    level: "4"
  }
  student2: Student = <Student>{
    id: "2",
    name: "Tarek",
    lastName: "Jarrar",
    email: "tarek.jarrar@gmail.com",
    cin: "02",
    field: "GL",
    level: "4"
  }
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

  getProjects(): Project[] {
    return [this.project1, this.project2];
  }

  getSessions():Observable<Session[]> {
    return this.http.get<Session[]>(this.sessionsURL);  
  }

  addSession(session:Session):any{
    return this.http.post(this.sessionsURL,session);
  }

  getSessionById(sessionId: String):Observable<Session> {
    return this.http.get(this.sessionURL+'/'+sessionId);
  } 

  /*   getSessions() {
    return this.sessions;
  } */
  /* getSessionById(sessionId: String) {
    if (sessionId === "1") return this.session1;
    else return this.session2;
  } */
}
