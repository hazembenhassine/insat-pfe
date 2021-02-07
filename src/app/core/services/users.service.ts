import {Student} from "../models/student.model";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Professor} from "../models/professor.model";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  addStudents(students: Student[]): Promise<any> {
    return this.http.post(`${environment.BASE_URL}/students`, students).toPromise()
  }


  addProfessors(professors: Professor[]) {
    return this.http.post(`${environment.BASE_URL}/professors`, professors)
  }

  getProfessors(): Promise<any> {
    return this.http.get(`${environment.BASE_URL}/professors`).toPromise()
  }
  getEnterprises(): Promise<any> {
    return this.http.get(`${environment.BASE_URL}/enterprises`).toPromise()
  }
}
