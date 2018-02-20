import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatInputModule, MatCardModule, MatButtonModule} from '@angular/material';
// import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {AuthService} from '../../services/auth.service';

import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import {SignupComponent} from './login/signup/signup.component';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    CartComponent,
    SignupComponent,
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    SharedModule,
  ],
  exports: [
    SignupComponent,
  ],

  providers: [
  ]
})
export class UsersModule {}
