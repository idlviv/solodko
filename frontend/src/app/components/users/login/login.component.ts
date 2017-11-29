import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ValidateService} from '../../../services/validate.service';
import {IUser} from '../../../interfaces/i-user';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // signupForm: FormGroup;
  // userSignup = {} as IUser;
  userSignin: Object;
  getLoggedUser$: Observable<IUser>;

  guest: IUser = {
    name: '',
    surname: '',
    email: '',
    username: '',
    password: '',
    role: 'Guest',
  };
  user: IUser = this.guest;

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

    // gets user role
    this.getLoggedUser$ = this.authService.getLoggedUser();
    this.getLoggedUser$
      .subscribe(
        user => this.user = user
      );
  }

  onSigninSubmit(form: NgForm) {
    this.authService.authUser({
      username: form.value.usernameSignin,
      password: form.value.passwordSignin})
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
