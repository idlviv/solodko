import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {AuthService} from '../../services/auth.service';
import {AuthGuard} from '../../guards/auth.guard';

import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
  ],
  providers: [
    AuthService,
    AuthGuard,
  ]
})
export class UsersManagementModule {}
