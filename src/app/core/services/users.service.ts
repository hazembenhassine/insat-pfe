import {Student} from "../models/student.model";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Professor} from "../models/professor.model";


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  addStudents(students: Student[]) {
    return this.http.post("https://gestion-pfe.herokuapp.com/students", students)
  }

  addProfessors(professors: Professor[]) {
    return this.http.post("https://gestion-pfe.herokuapp.com/professors", professors)
  }
}
