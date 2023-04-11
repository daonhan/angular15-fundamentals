import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

import { UserInfo } from '../../models/user-info.model';

export const AUTHORIZATION_KEY = 'tc-user-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userTokenSubject$ = new BehaviorSubject<UserInfo | null>(this.getUserInfo());
  currentUserInfo$ = this.userTokenSubject$.asObservable();

  constructor(private router: Router) { }

  private getUserInfo(): UserInfo {
    return JSON.parse(localStorage.getItem(AUTHORIZATION_KEY) || '{}')
  }

  get isAuthenticated(): boolean {
    const userInfo = this.userTokenSubject$.value as UserInfo;
    const { token = '' } = userInfo;
    return userInfo && token.length > 0;
  }
  login(playload: UserInfo) {
    localStorage.setItem(AUTHORIZATION_KEY, JSON.stringify(playload));
    this.userTokenSubject$.next(playload);
  }

  logout() {
    localStorage.removeItem(AUTHORIZATION_KEY);
    this.userTokenSubject$.next(null);
    // this.router.navigate(['login']);
  }

}
