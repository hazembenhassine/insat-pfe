import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ConferenceRole} from '../models/conference-role.model';
import {Conference} from '../models/conference.model';
import {Enterprise} from '../models/entreprise.model';
import {Professor} from '../models/professor.model';
import {Project} from '../models/project.model';
import {Session} from '../models/sessions.model';
import {Student} from '../models/student.model';
import {API_URL} from "../../../app/app.constatnt";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SoutenancesService {


  constructor(private http: HttpClient) {
  }


  

  getAllConferences() {
/*     return this.conferences;
 */  }

  getConferenceById(id: string):Promise<any> {
     return
   }

  getConferencesBySession(sessionId: string): Promise<any> {
    return this.http.get(`${environment.BASE_URL}/conferences/session/${sessionId}`).toPromise()
  }

  getConferencesByProf():Promise<any>{
    return this.http.get(`${environment.BASE_URL}/conferences/professor`).toPromise();
  }

  /* getConferenceByStudent(studentId:String) {
   getConferenceByStudent(studentId:string) {
     return this.http.get(`${this.sessionURL}/conferences/session/${sessionId}`).toPromise()
   } */


}
