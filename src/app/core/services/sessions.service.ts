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

export class SessionsService {
  sessionURL: string = environment.BASE_URL + '/sessions';

  constructor(private http: HttpClient) {
  }

  getSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(this.sessionURL);
  }

  addSession(session: Session): any {
    return this.http.post(this.sessionURL, session);
  }

  getSessionById(sessionId: string): Observable<Session> {
    return this.http.get(this.sessionURL + '/' + sessionId);
  }

  editSession(sessionId,session):Observable<Session>{
    return this.http.put(this.sessionURL+'/'+sessionId,{session});
  }

}
