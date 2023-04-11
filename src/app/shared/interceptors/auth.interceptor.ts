import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const isAuthenticated = this.authService.isAuthenticated;
    if (isAuthenticated) {
      const whiteListUrls = ['http://localhost:4200', 'http://localhost:3000']; // TODO: get from config

      let currentUrl = request.url.toLowerCase();
      if (!currentUrl.startsWith('http')) {
        currentUrl = `http://localhost:4200/${currentUrl}`;
      }
      if (whiteListUrls.some((apiRul) => currentUrl.startsWith(apiRul))) {
        const { accessToken } = this.authService.getCurrentUserInfo();
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${accessToken}`
          }
        })
      }
    }
    return next.handle(request);
  }
}
