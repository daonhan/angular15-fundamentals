import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { APP_CONFIG } from '../services/app-config.service';
import { AppConfig } from '../models/appconfig.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig, private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const isAuthenticated = this.authService.isAuthenticated;
    if (isAuthenticated) {
      const { baseUrl = '', apiUrl = '' } = this.appConfig;
      const whiteListUrls = [baseUrl, apiUrl];

      let currentUrl = request.url.toLowerCase();
      if (!currentUrl.startsWith('http')) {
        currentUrl = `${baseUrl}/${currentUrl}`;
      }
      if (whiteListUrls.some((apiUrl) => apiUrl && currentUrl.startsWith(apiUrl))) {
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
