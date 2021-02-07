import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable} from 'rxjs';
import {UsersService} from "../services/users.service";
import {ProjectsService} from "../services/projects.service";
import {SessionsService} from "../services/sessions.service";

@Injectable({
  providedIn: 'root'
})
export class SessionResolver implements Resolve<any> {

  constructor(private sessionsService: SessionsService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.sessionsService.getSessions()
  }

}
