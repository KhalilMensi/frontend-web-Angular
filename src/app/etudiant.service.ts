import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private baseUrl = "http://localhost:8080/api/";

  constructor(private http: HttpClient) { }

  getStudentList(): Observable<any>{
    return this.http.get(`${this.baseUrl}` + 'studentts-list');
  }

  createStudent(userSignUp: Object): Observable<object>{
    return this.http.post(`${this.baseUrl}` + 'save-student', userSignUp);
  }
}
