import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersManagementComponent } from './users-management.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    // UsersManagementComponent,
    // AddUserComponent,
  ],
  declarations: [
    UsersManagementComponent,
    AddUserComponent,
  ]
})
export class UsersManagementModule { }
