import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import {SignupComponent} from './login/signup/signup.component';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../../material.module';

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
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [
    SignupComponent,
  ],

  providers: [
  ]
})
export class UsersModule {}
