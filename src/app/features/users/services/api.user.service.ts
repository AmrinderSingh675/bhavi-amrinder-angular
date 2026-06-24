import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '@app/core/services/apiendpoints.service';
import { BaseApiService } from '@app/core/services/base-api.service';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: BaseApiService) {}

  getUsers() {
    return this.api.get<UserModel[]>(API_ENDPOINTS.USERS.GET_ALL);
  }

  getUserById(id: number) {
    return this.api.get<UserModel>(API_ENDPOINTS.USERS.GET_BY_ID(id));
  }

  createUser(payload: UserModel) {
    return this.api.post(API_ENDPOINTS.USERS.CREATE, payload);
  }

  updateUser(id: number, payload: any) {
    return this.api.put(API_ENDPOINTS.USERS.UPDATE(id), payload);
  }

  deleteUser(id: number) {
    return this.api.delete(API_ENDPOINTS.USERS.DELETE(id));
  }
}