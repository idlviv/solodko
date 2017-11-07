import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {AuthService} from '../../services/auth.service';

import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';

// import {Observable} from 'rxjs/Observable';

import {CustomErrorHandler} from '../../services/CustomErrorHandler';

@NgModule({
  declarations: [
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
  ]
})
export class UsersModule {}
