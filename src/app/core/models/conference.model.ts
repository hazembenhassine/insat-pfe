import {Professor} from "./professor.model";
import {Project} from "./project.model";
import {Session} from "./sessions.model";


export interface Conference {
  id?: string;
  date?: string;
  session?: Session;
  president?: Professor;
  inspector?: Professor;
  project?: Project;
  enterpriseSupervisor?: string;
  room?: string;
}

export enum Room {
  "2B6-1",
  "2B6-2",
  "2B6-3",
  "2B6-4"
}
