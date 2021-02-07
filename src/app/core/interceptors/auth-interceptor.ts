import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  AUTH_HEADER = "Authorization"
  adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpbmRhQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImFjYWRlbWljWWVhciI6eyJzdGFydERhdGUiOjIwMjAsImVuZERhdGUiOjIwMjF9LCJpYXQiOjE2MTI2ODQzNTl9.0qwAu41I5ukoQbva6frPtCgCw0eLXcpE1P9yERuvB0c"
  studentToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtoYWxlZEBnbWFpbC5jb20iLCJyb2xlIjoiU1RVREVOVCIsImFjYWRlbWljWWVhciI6eyJfaWQiOiI2MDFmY2FkOTIzMTk3NzAwMTU0ZTZiMDEiLCJzdGFydERhdGUiOjIwMjAsImVuZERhdGUiOjIwMjF9LCJpYXQiOjE2MTI3MjQ3MDN9.YqSC4E5aG_a779ucjOZYxf7D0Pay-YTHjKg61tI3VAE"

  token = this.studentToken

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req) {
      const duplicate = req.clone({headers: req.headers.set(this.AUTH_HEADER, "Bearer " + this.token)});
      return next.handle(duplicate);
    }
    return next.handle(req);
  }
}
