import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) {}

  activateAccount(guest: GuestBindingModel): Observable<void> {
    return this.httpClient.post<void>(`${baseUrl}/api/accounts/new`, guest);
  }

  login(user: UserBindingModel): Observable<string> {
    return this.httpClient.post<string>(`${baseUrl}/api/accounts/login`, user);
  }

  deactivateAccount(userId: number): Observable<void> {
    return this.httpClient.post<void>(`${baseUrl}/api/accounts/deactivate`, userId);
  }
}
