import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'http://localhost:3000/api/auth/register'; // URL du backend

  constructor(private http: HttpClient) { }

  register(userData: { username: string, email: string, password: string, role: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}
