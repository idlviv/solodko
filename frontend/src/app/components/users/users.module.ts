import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {AuthService} from '../../services/auth.service';

import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';

// import {Observable} from 'rxjs/Observable';

import {CustomErrorHandler} from '../../services/CustomErrorHandler';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
  ],

  providers: [
    AuthService,
    CustomErrorHandler,
  ]
})
export class UsersModule {}
