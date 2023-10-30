import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}
  token: any = localStorage.getItem('token');
  intercept(
    req: HttpRequest<any>, 
    next: HttpHandler): 
    Observable<HttpEvent<any>> {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
          'accept': 'applcation/json',
          'x-auth-token': this.token
        },
      });
    return next.handle(req);
  }
}
