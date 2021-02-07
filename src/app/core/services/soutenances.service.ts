import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConferenceRole } from '../models/conference-role.model';
import { Conference } from '../models/conference.model';
import { Enterprise } from '../models/entreprise.model';
import { Professor } from '../models/professor.model';
import { Project } from '../models/project.model';
import { Session } from '../models/sessions.model';
import { Student } from '../models/student.model';
import {API_URL} from "../../../app/app.constatnt";

@Injectable({
  providedIn: 'root'
})
export class SoutenancesService {



   session1:Session={
    'id': "1",
    'startDate': "27/06/2021",
    'endDate': "27/09/2021",
    'capacity': 250,
    'president': "dr.Ali Abdenadher"
  };

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
  prof1: Professor = <Professor>{
    id: "1",
    name: "Saloua",
    lastName: "Ben Yahia",
    email: "sby@gmail.com",
    department: "GMI",
    rank: "Maitre Assistant"
  }
  prof2: Professor = <Professor>{
    id: "2",
    name: "Aymen",
    lastName: "sellaouti",
    email: "aymen@gmail.com",
    department: "GMI",
    rank: "Maitre Assistant"
  }
  prof3: Professor = <Professor>{
    id: "3",
    name: "Riadh",
    lastName: "robbana",
    email: "rrobbana@gmail.com",
    department: "GMI",
    rank: "PROFESSOR"
  }

  enterprise = new Enterprise("bchal", "Vynd", "Sokra", "Nouisser");
  project1: Project = <Project>{
    id: "1",
    title: "Serverless computing",
    description: "akwa projeeet",
    supervisor: this.prof1,
    student: this.student1,
    enterprise: this.enterprise,
    field: "GL",
    level: "CYCLE"

  }
  project2: Project = <Project>{
    id: "2",
    title: "IA",
    description: "theni akwa projeeet",
    supervisor: this.prof2,
    student: this.student2,
    enterprise: this.enterprise,
    field: "GL",
    level: "CYCLE"

  }
  conference1: Conference = {
    id: "1",
    date: "24-09-2021",
    session: this.session1,
    president: this.prof3,
    inspector: this.prof2,
    project: this.project1,
    room: "2B6-1"
  }
  conference2: Conference = {
    id: "2",
    date: "24-09-2021",
    session: this.session1,
    president: this.prof3,
    inspector: this.prof2,
    project: this.project1,
    room: "2B6-1"
  }
  conferenceRole1: ConferenceRole = {conference: this.conference1, role: "inspecteur"};
  conferences: Conference[] = [this.conference1];
  conferencesRoles: ConferenceRole[] = [this.conferenceRole1];

  constructor(private http:HttpClient) { }

  /* getConferences(): Conference[] {
    return this.conferences;
  } */

/*   getConferences():Observable<Conference>{
    return this.http.get('')
  } */

  getConferencesRolesByProfId(id:String):ConferenceRole[]{
    return this.conferencesRoles;
  }

  getAllConferences():Conference[]{
    return this.conferences;
  }

  getConferenceById(id: String) {
     return this.conference1;
  }

  getConferencesBySession(sessionId:String){
   if(sessionId=="1") return [this.conference1];
   if(sessionId=="2") return [this.conference2];
  }

  getConferenceByStudent(studentId:String) {
    return this.conference1;
  }


}
