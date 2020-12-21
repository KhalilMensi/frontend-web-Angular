import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserSignIn } from './data/userSettings';

@Injectable({
  providedIn: 'root',
})
export class AdministratorService {
  private baseUrl = 'http://localhost:8080/api/v1/getAdministrator';

  constructor() {}

}
