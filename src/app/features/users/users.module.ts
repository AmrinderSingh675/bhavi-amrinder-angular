import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { ManageUserComponent } from './pages/manage-user/manage-user.component';
import { UserService } from './services/api.user.service';


@NgModule({
  declarations: [
    UserListComponent,
    ManageUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [UserService]
})
export class UsersModule { }
