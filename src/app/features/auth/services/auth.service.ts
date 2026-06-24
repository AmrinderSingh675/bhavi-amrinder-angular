import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthModel } from '../models/auth.model';
import { TokenService } from '@app/core/services/token.service';
import { tap } from 'rxjs';
import { LoginRequest } from '../models/loginrequest.model';
import { API_ENDPOINTS } from '@app/core/services/apiendpoints.service';
import { BaseApiService } from '@app/core/services/base-api.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenservice: TokenService, private api: BaseApiService) {}

  login(data: LoginRequest) {
    return this.api.post<AuthModel>(API_ENDPOINTS.AUTH.LOGIN, data)
      .pipe(
        tap(res => {
          this.tokenservice.setToken(res.token);
        })
    );
  }

  isLoggedIn(): boolean {
    return !!this.tokenservice.getToken();
  }
}