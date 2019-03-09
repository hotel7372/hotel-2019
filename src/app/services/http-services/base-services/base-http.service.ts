import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseHttpService {
  baseUrl: string;
  constructor() {
    this.baseUrl = environment.serverUrl;
  }
}
