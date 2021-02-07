import { Professor } from "./professor.model";

export interface Session {
  _id?: String;
  id?:String;
  startDate?:String;
  endDate?:String;
  capacity?:number;
  president?:Professor;
}

