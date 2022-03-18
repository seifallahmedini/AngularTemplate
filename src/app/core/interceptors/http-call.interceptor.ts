import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, finalize } from 'rxjs/operators';

// Services
import { LoadingService } from '../services/loading.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class HttpCallInterceptor implements HttpInterceptor {

  notLoadingUrl: string[] = [];

  constructor(private loadingService: LoadingService, 
    private toastrService: ToastrService, 
    private translateService: TranslateService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!this.notLoadingUrl.includes(request.url)){
      this.loadingService.startLoading();
    }
    return next.handle(request).pipe(
      finalize(() => {
        this.loadingService.stopLoading();
      }),
      catchError((error: HttpErrorResponse) => {
          this.doCatchError(error, this.translateService, this.toastrService);
          this.loadingService.stopLoading();
          return throwError(error);
      })
    );
  }

  doCatchError(error, translateService: TranslateService, toastrService: ToastrService) {
    let message;
    if (error instanceof HttpErrorResponse) {
      console.log(error)
      if (error.status === 0) {
        message = translateService.instant('errors.serverDown');
      }
      if (error.status === 401) {
        toastrService.error("You do not have permission to perform this action", "Error");
      }
      if (error.error.status === 400) {
      }
      if (error.error.msg){
        message = error.error.msg;
      }
      if (error.error?.message){
        message = error.error.message;
      }
      if (error.error.detail){
        message = error.error.detail;
      }
      if (error.error['errors']){
        message = error.error['errors'][0].msg;
      }
    }
    if(!message){
      message = "UNKNOWN ERROR";
    }
    toastrService.error(message, "Error");
  }
}

export const HttpCallInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpCallInterceptor,
  multi: true
};
