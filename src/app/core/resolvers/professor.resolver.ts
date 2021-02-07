import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UsersService} from "../services/users.service";
import {ProjectsService} from "../services/projects.service";

@Injectable({
  providedIn: 'root'
})
export class ProfessorResolver implements Resolve<any> {

  constructor(private usersService: UsersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.usersService.getProfessors()
  }

}
