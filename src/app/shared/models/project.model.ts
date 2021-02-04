import {Professor} from "./professor.model";
import {Student} from './student.model';
import {Enterprise} from "./entreprise.model";

export class Project {

  constructor(public id: string,
              public title: string,
              public supervisor: Professor,
              public student: Student,
              public enterprise: Enterprise,
              public field: string,
              public level: string) {

  }

}

