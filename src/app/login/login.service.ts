import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private client: HttpClient) {

  }
  login(email: string, password: string): any {
    return this.client.post(`/api/login`, { email, password });
  }
}
