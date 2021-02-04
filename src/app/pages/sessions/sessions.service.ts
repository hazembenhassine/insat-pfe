import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Session} from './sessions.model';
import {HttpClient} from '@angular/common/http';
import {Student} from "../../shared/models/student.model";
import {Enterprise} from "../../shared/models/entreprise.model";
import {Project} from "../../shared/models/project.model";
import {Professor} from "../../shared/models/professor.model";

@Injectable({
  providedIn: 'root'
})

export class SessionsService {
  public sessionsURL;
  student1 = new Student("1", "Khaled", "Ghamgui", "gham.khaled@gmail.com", "GL", '4');
  student2 = new Student("2", "Tarek", "Jarrar", "gham.khaled@gmail.com", "GL", '4');
  prof = new Professor("1", "Saloua", "Ben Yahia", "sby@gmail.com", "Info", "chamta");
  enterprise = new Enterprise("bchal", "Vynd", "Sokra", "Nouisser");
  project1 = new Project("1", "Serverless computing", this.prof, this.student1, this.enterprise, "GL", "cycle")
  project2 = new Project("2", "IA", this.prof, this.student2, this.enterprise, "GL", "cycle")
  public sessions: Session[] = [
    {
      'id': 1,
      'startDate': "27/06/2021",
      'endDate': "27/09/2021",
      'capacity': 250,
      'president': "dr.Ali Abdenadher"
    },
    {
      'id': 1,
      'startDate': "15/09/2021",
      'endDate': "15/10/2021",
      'capacity': 300,
      'president': "dr.Riadh Robbana"
    }
  ];

  constructor(private http: HttpClient) {
  }

  getAllSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(this.sessionsURL + '/getAllSessions')
  }

  getProjects(): Project[] {
    return [this.project1, this.project2];
  }

}
