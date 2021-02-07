import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable} from 'rxjs';
import {UsersService} from "../services/users.service";
import {ProjectsService} from "../services/projects.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectResolver implements Resolve<any> {

  constructor(private projectsService: ProjectsService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.projectsService.getProject().catch(
      error => {
        console.log(error)
        this.router.navigate(["project/add"]);
        return EMPTY
      }
    )
  }

}
