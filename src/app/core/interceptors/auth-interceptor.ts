import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  AUTH_HEADER = "Authorization"
  adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpbmRhQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImFjYWRlbWljWWVhciI6eyJzdGFydERhdGUiOjIwMjAsImVuZERhdGUiOjIwMjF9LCJpYXQiOjE2MTI2ODQzNTl9.0qwAu41I5ukoQbva6frPtCgCw0eLXcpE1P9yERuvB0c"

  token = this.adminToken

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req) {
      const duplicate = req.clone({headers: req.headers.set(this.AUTH_HEADER, "Bearer " + this.token)});
      return next.handle(duplicate);
    }
    return next.handle(req);
  }
}
