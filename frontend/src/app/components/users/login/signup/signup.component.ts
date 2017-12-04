import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../../../services/validate.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IUser} from '../../../../interfaces/i-user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  userSignup = {} as IUser;
  userSignin: Object;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
    ) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
        usernameSignup: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10)
        ]),
        emailSignup: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
        passwordSignup: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10)
        ]),
        passwordSignupConfirm: new FormControl('', [
          Validators.required,
        ]),
        nameSignup: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ]),
        surnameSignup: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ]),
      },
      this.validateService.matchPassword
    );
  }

  onSignupSubmit() {
    this.userSignup = {
      username: this.signupForm.value.usernameSignup,
      password: this.signupForm.value.passwordSignup,
      email: this.signupForm.value.emailSignup,
      name: this.signupForm.value.nameSignup,
      surname: this.signupForm.value.surnameSignup,
      role: 'User',
    };
    // this.userSignup = {
    //   username: form.controls.usernameSignup.value,
    //   password: form.controls.passwordSignup.value,
    //   email: form.controls.emailSignup.value,
    //   name: form.controls.nameSignup.value,
    //   surname: form.controls.surnameSignup.value,
    //   role: 'User',
    // };

    this.authService.registerUser(this.userSignup)
      .subscribe(data => {
          if (data.success) {
            this.flashMessage.show(
              data.msg,
              {
                cssClass: 'alert-success',
                timeout: 3000
              });
            // this.signin(this.userSignup.username, this.userSignup.password);
          } else {
            console.log('data', data);
            this.flashMessage.show(
              data.msg,
              {
                cssClass: 'alert-danger',
                timeout: 3000
              });
            // this.router.navigate(['/login']);
          }
        },
        error => {
          let errorMessage;
          if (error.status === 401) {
            errorMessage = 'Недостатньо прав для реєстрації нового користувача';
          } else {
            errorMessage = 'Не вдалося зареєструвати нового користувача';
          }
          this.flashMessage.show(
            errorMessage,
            {
              cssClass: 'alert-danger',
              timeout: 3000
            });
          this.router.navigate(['/login']);
        });
  }

  // signin(username, password) {
  //   this.authService.authUser({username, password})
  //     .subscribe((data) => {
  //         if (data.success) {
  //           this.authService.storeUserData(data.token, data.user);
  //           this.flashMessage.show(
  //             'Logged in',
  //             {
  //               cssClass: 'alert-success',
  //               timeout: 2000
  //             });
  //           this.router.navigate(['/profile']);
  //
  //         } else {
  //           this.flashMessage.show(
  //             data.msg,
  //             {
  //               cssClass: 'alert-danger',
  //               timeout: 2000
  //             });
  //           this.router.navigate(['/login']);
  //         }
  //
  //       }, err => {
  //         this.flashMessage.show(
  //           err,
  //           // err.status + ' ' + err.statusText,
  //           {
  //             cssClass: 'alert-danger',
  //             timeout: 5000
  //           });
  //         this.router.navigate(['/login']);
  //       }
  //     );
  // }
}
