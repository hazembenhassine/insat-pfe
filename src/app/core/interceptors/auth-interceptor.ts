import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { credentialsKey } from '../authentication/authentication.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token: string;
    if ((localStorage.getItem(credentialsKey))) {
      token = localStorage.getItem(credentialsKey);
    } else if ((sessionStorage.getItem(credentialsKey))) {
      token = sessionStorage.getItem(credentialsKey);
    }
    if (token) {
      request = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});
    }

    if (!request.headers.has('Content-Type') && !request.headers.has('File-Upload')) {
      request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
    }

    request = request.clone({headers: request.headers.set('Accept', 'application/json')});

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        // tslint:disable-next-line:no-console
        console.error(`Error ${error.status}: ${error.statusText}`);
        return throwError(error);
      })
    );
  }
}
