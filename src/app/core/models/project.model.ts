import {Professor} from "./professor.model";
import {Student} from './student.model';
import {Enterprise} from "./entreprise.model";
import {Session} from "./sessions.model";

export class Project {

  constructor(public id: string,
              public title: string,
              public description: string,
              public supervisor: Professor,
              public student: Student,
              public enterprise: Enterprise,
              public field: string,
              public level: string) {
  }

}

export interface IProject {
  id: string,
  title: string,
  description: string,
  supervisor: Professor,
  student: Student,
  enterprise: Enterprise,
  session: Session,
  state: string,
  field: string,
  level: string
}

export enum projectState {
  "NONE",
  "PENDING",
  "CONFIRMED",
  "PROGRAMMED"
}
