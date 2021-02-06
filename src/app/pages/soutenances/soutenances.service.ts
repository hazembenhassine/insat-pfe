import { Injectable } from '@angular/core';
import { ConferenceRole } from 'src/app/shared/models/conference-role.model';
import { Conference } from 'src/app/shared/models/conference.model';
import { Enterprise } from 'src/app/shared/models/entreprise.model';
import { Professor } from 'src/app/shared/models/professor.model';
import { Project } from 'src/app/shared/models/project.model';
import { Session } from 'src/app/shared/models/session.model';
import { Student } from 'src/app/shared/models/student.model';

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

  student1 = new Student("1", "Khaled", "Ghamgui", "gham.khaled@gmail.com", "GL", '4');
  student2 = new Student("2", "Tarek", "Jarrar", "gham.khaled@gmail.com", "GL", '4');
  prof1 = new Professor("1", "Saloua", "Ben Yahia", "sby@gmail.com", "Info", "PROFESSOR");
  prof2 = new Professor("2", "Aymen", "sellaouti", "aymen@gmail.com", "Info", "ASSISTANT");
  prof3 = new Professor("3", "Riadh", "robbana", "rrobbana@gmail.com", "Info", "PROFESSOR");
  enterprise = new Enterprise("bchal", "Vynd", "Sokra", "Nouisser");
  project1 = new Project("1", "Serverless computing","akwa projeeet", this.prof1, this.student1, this.enterprise, "GL", "cycle")
  project2 = new Project("2", "IA","theni akwa projet fel aalem", this.prof1, this.student2, this.enterprise, "GL", "cycle")
  conference1:Conference ={id:"1",date:"24-09-2021",session:this.session1,president:this.prof3,inspector:this.prof2,project:this.project1,room:"2B6-1"}
  conference2:Conference ={id:"2",date:"24-09-2021",session:this.session1,president:this.prof3,inspector:this.prof2,project:this.project1,room:"2B6-1"}
  conferenceRole1:ConferenceRole={conference:this.conference1,role:"inspecteur"};
  conferences:Conference[]=[this.conference1];
  conferencesRoles:ConferenceRole[]=[this.conferenceRole1];

  constructor() { }

  getConferences(): Conference[] {
    return this.conferences;
  }

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
