import {Professor} from "./professor.model";
import {Project} from "./project.model";
import {Session} from "./sessions.model";

export interface Conference {
  id?: String;
  date?: String;
  session?: Session;
  president?: Professor;
  inspector?: Professor;
  project?: Project;
  room?: String;
}

export enum Room {
  "2B6-1",
  "2B6-2",
  "2B6-3",
  "2B6-4"
}
