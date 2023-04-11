import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { EMPTY, Subject, catchError, exhaustMap, takeUntil, throwError } from 'rxjs';
export interface UserLogin {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  private onDestroy$ = new Subject<void>();
  submitted$ = new Subject<UserLogin>();
  constructor(private authService: AuthService, private loginService: LoginService) {
    const login$ = this.submitted$.pipe(
      exhaustMap(
        ({ email, password }) => this.loginService.login(email, password).pipe(catchError((err) => {
          console.error(err.message);
          return EMPTY;
        }))),
      takeUntil(this.onDestroy$));

    login$.subscribe({
      next: (a: any) => {
        this.authService.login({ ...a })
      }, error: (err: any) => {
        console.log(err);
      }
    });
  }

  handleLogin(form: NgForm) {
    if (form.valid) {
      const { username, password } = form.value;
      this.submitted$.next({ email: username, password });
    } else {
      form.form.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }


}
