import {Injectable} from '@angular/core';
import {ConferenceRole} from '../models/conference-role.model';
import {Conference} from '../models/conference.model';
import {Enterprise} from '../models/entreprise.model';
import {Project} from '../models/project.model';
import {Session} from '../models/sessions.model';
import {Student} from '../models/student.model';
import {Professor} from "../models/professor.model";

@Injectable({
  providedIn: 'root'
})
export class SoutenancesService {
  session1: Session = {
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
  project1 = new Project("1", "Serverless computing", "akwa projeeet", this.prof1, this.student1, this.enterprise, "GL", "cycle")
  project2 = new Project("2", "IA", "theni akwa projet fel aalem", this.prof1, this.student2, this.enterprise, "GL", "cycle")
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

  constructor() {
  }

  getConferences(): Conference[] {
    return this.conferences;
  }

  getConferencesRolesByProfId(id: String): ConferenceRole[] {
    return this.conferencesRoles;
  }

  getAllConferences(): Conference[] {
    return this.conferences;
  }

  getConferenceById(id: String) {
    return this.conference1;
  }

  getConferencesBySession(sessionId: String) {
    if (sessionId == "1") return [this.conference1];
    if (sessionId == "2") return [this.conference2];
  }

  getConferenceByStudent(studentId: String) {
    return this.conference1;
  }


}
