import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { HttpHeaders } from '@angular/common/http';
import { TokenService } from '../../utillities-services/token.service';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseHttpAuthService extends BaseHttpService {
  httpHeaders: HttpHeaders;

  constructor(tokenService: TokenService) {
    super();

    let token = tokenService.get();
    this.httpHeaders = new HttpHeaders().append('Authorization', token);
  }
}
