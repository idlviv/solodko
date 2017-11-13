import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ValidateService} from '../../../services/validate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;
  user: Object;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
  ) {
      // this.form = formBuilder.group({
      //   password: ['', Validators.required],
      //   passwordConfirm: ['', Validators.required]
      // },
      //   {
      //   validators: this.validateService.matchPassword
      // }
      // );
  }

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

  onSubmit(form: NgForm) {
  }

  onSignupSubmit(form: NgForm) {
    console.log('submit signup form', form);
    console.log('submit signup form', this.signupForm);

    // console.log('submit signup form');
    // this.user = {
    //   username: form.value.username,
    //   password: form.value.password,
    // };
    //
    // this.authService.authUser(this.user)
    //   .subscribe((data) => {
    //       if (data.success) {
    //         this.authService.storeUserData(data.token, data.user);
    //         this.flashMessage.show(
    //           'Logged in',
    //           {
    //             cssClass: 'alert-success',
    //             timeout: 5000
    //           });
    //         this.router.navigate(['/profile']);
    //
    //       } else {
    //         this.flashMessage.show(
    //           data.msg,
    //           {
    //             cssClass: 'alert-danger',
    //             timeout: 5000
    //           });
    //         this.router.navigate(['/login']);
    //       }
    //
    //     },err => {
    //       this.flashMessage.show(
    //         err,
    //         // err.status + ' ' + err.statusText,
    //         {
    //           cssClass: 'alert-danger',
    //           timeout: 5000
    //         });
    //       this.router.navigate(['/login']);
    //     }
    //   )
  }

  onSigninSubmit(form: NgForm) {
    this.user = {
      username: form.value.usernameSignin,
      password: form.value.passwordSignin,
    };

    this.authService.authUser(this.user)
      .subscribe((data) => {
        if (data.success) {
          this.authService.storeUserData(data.token, data.user);
          this.flashMessage.show(
            'Logged in',
            {
              cssClass: 'alert-success',
              timeout: 2000
            });
          this.router.navigate(['/profile']);

        } else {
          this.flashMessage.show(
             data.msg,
            {
              cssClass: 'alert-danger',
              timeout: 2000
            });
          this.router.navigate(['/login']);
        }

      },err => {
          this.flashMessage.show(
            err,
            // err.status + ' ' + err.statusText,
            {
              cssClass: 'alert-danger',
              timeout: 5000
            });
          this.router.navigate(['/login']);
        }
      )
  }
}
