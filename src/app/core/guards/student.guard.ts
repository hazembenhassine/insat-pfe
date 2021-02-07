import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import { Role } from '../enums/role.enum';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authenticationService.isAuthenticated() || this.authenticationService.role !== Role.STUDENT) {
      return this.router.parseUrl('/dashboard');
    } else {
      return true;
    }
  }

}
