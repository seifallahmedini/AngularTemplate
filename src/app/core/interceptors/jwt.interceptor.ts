import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.indexOf('signup') !== -1) {
      return next.handle(request); 
    }
    if (request.url.indexOf('login') !== -1) {
      return next.handle(request); 
    }
    if (request.url.indexOf('forgotPassword') !== -1) {
      return next.handle(request); 
    }
    if (request.url.indexOf('resetPassword') !== -1) {
      return next.handle(request); 
    }
    if(this.authService.currentUserValue){
      let currentToken = this.authService.currentUserValue['token'];
      if (currentToken) {
        request = request.clone({
          setHeaders: { 
            Authorization: `Bearer ${currentToken}`
          }
        });
      }
    }
    return next.handle(request);
  }
}

export const JwtInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtInterceptor,
  multi: true
};