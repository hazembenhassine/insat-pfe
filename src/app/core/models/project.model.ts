import {Professor} from "./professor.model";
import {Student} from './student.model';
import {Enterprise} from "./entreprise.model";
import {Session} from "./sessions.model";


export interface Project {
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
