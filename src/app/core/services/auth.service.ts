import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthModel } from '../model/auth.model';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  getLogin() {
    return this.http.get<AuthModel[]>(
        `${environment.apiUrl}/login`
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}