import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AuthService} from '../../services/auth.service';

import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';

// import {Observable} from 'rxjs/Observable';

import {CustomErrorHandler} from '../../services/CustomErrorHandler';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './login/signup/signup.component';

@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    CartComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
  ],

  providers: [
  ]
})
export class UsersModule {}
