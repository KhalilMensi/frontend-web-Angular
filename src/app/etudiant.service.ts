import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSignIn, userSignUp } from './data/userSettings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private baseUrl = "http://localhost:8080/api/v1/";

  constructor(private http: HttpClient) { }

  createStudent(student: userSignUp): Observable<Object>{
    let url = this.baseUrl + 'saveStudent';
    return this.http.post(`${url}`, student);
  }

  getStudent(user: UserSignIn) {
    let url = this.baseUrl + "getStudentByMailAndPass";
    return this.http.post(`${url}`, user);
  }

  
}
