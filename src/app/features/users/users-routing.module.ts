import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { ManageUserComponent } from './pages/manage-user/manage-user.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: ':id',
    component: ManageUserComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
