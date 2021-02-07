import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import { Conference } from '../models/conference.model';


@Injectable({
  providedIn: 'root'
})
export class ConferencesService {

  constructor(private http:HttpClient) { }


  getConferencesBySession(sessionId):Promise<any>{
    return  this.http.get(`${environment.BASE_URL}/conferences/session/$sessionId`).toPromise();
  }

  getConferencesByProfessor(professorId):Promise<any>{
    return this.http.get(`${environment.BASE_URL}/conferences/professor`).toPromise();
  }

  addConference(conference:Object):Promise<any>{
    return this.http.get('${environment.BASE_URL}/conferences/professor').toPromise();
  }
}
