import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {

          case 400:
            this.toastr.warning('Bad Request');
            break;

          case 401:
            this.toastr.error('Session Expired');
            localStorage.clear();
            this.router.navigate(['/login']);
            break;

          case 403:
            this.toastr.error('Access Denied');
            break;

          case 404:
            this.toastr.error('Resource Not Found');
            break;

          case 500:
            this.toastr.error('Server Error');
            break;

          default:
            this.toastr.error('Unexpected Error');
            break;
        }

        return throwError(() => error);
      })
    );
  }
}