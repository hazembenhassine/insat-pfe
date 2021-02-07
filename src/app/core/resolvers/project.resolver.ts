import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {UsersService} from "../services/users.service";
import {ProjectsService} from "../services/projects.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectResolver implements Resolve<any>{

  constructor(private projectsService: ProjectsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
  }

}
