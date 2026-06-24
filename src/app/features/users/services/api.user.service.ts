import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserModel } from "../models/user.model";
import { environment } from "../../../../environments/environment";


@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<UserModel[]>(
       `${environment.apiUrl}/users`
    );
  }
}