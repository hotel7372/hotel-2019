import { Injectable } from '@angular/core';
import { TokenModel } from 'src/app/models/utillities-models/token-model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token: TokenModel;

  constructor() {
  }

  getParsedToken(): TokenModel {
    return this.token;
  }

  get(): string {
    return localStorage.getItem('access_token');
  }

  set(token: string): void {
    localStorage.setItem('access_token', token);
  }

  delete(): void {
    localStorage.removeItem('access_token');
  }
}
