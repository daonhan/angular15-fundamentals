import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthPreloadStrategy implements PreloadingStrategy {
  constructor(private auth: AuthService) { }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return this.auth
      .currentUserInfo$
      .pipe(switchMap((userInfo) => {
        if (userInfo && userInfo.accessToken) {
          console.log('preload route:', route.path);
          return fn();
        }
        return of(null);
      }));
  }
}
