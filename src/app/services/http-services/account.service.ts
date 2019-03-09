import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseHttpAuthService } from './base-services/base-http-auth.service';
import { TokenService } from '../utillities-services/token.service';
import { UserBindingModel } from 'src/app/models/account-models/binding-models/user-binding-model';
import { GuestBindingModel } from 'src/app/models/account-models/binding-models/guest-binding-model';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseHttpAuthService {

  constructor(tokenService: TokenService, private httpClient: HttpClient) {
    super(tokenService);
  }

  activateAccount(guest: GuestBindingModel): Observable<void> {
    return this.httpClient.post<void>(`${this.baseUrl}/api/accounts/new`, guest);
  }

  login(user: UserBindingModel): Observable<string> {
    return this.httpClient.post<string>(`${this.baseUrl}/api/accounts/login`, user);
  }

  deactivateAccount(userId: number): Observable<void> {
    return this.httpClient.post<void>(`${this.baseUrl}/api/accounts/deactivate`, userId);
  }
}
