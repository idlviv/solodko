import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ActivatedRoute, Router, RouterStateSnapshot} from '@angular/router';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ValidateService} from '../../../services/validate.service';
import {IUser} from '../../../interfaces/i-user';
import {Observable} from 'rxjs/Observable';
import {AuthUserGuard} from '../../../guards/auth-user.guard';
import {emptyUser} from '../../../data/user';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  getLoggedUser$: Observable<IUser>;

  previousURL;
  redirectURL;

  guest: IUser = emptyUser;
  user: IUser = this.guest;

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private authUserGuard: AuthUserGuard,
    private location: Location
  ) {}

  ngOnInit() {
    // if try to get url without permission
    // authUserGuard redirects to login page
    // after login automatically redirects to this url
    if (this.authUserGuard.redirectURL) {
      this.flashMessage.show(
        'Потрібно увійти, щоб відкрити цю сторінку',
        {
          cssClass: 'alert-danger',
          timeout: 5000
        });
      this.previousURL = this.authUserGuard.redirectURL;
      this.authUserGuard.redirectURL = undefined;
    }
    // gets user role
    this.getLoggedUser$ = this.authService.getLoggedUser();
    this.getLoggedUser$
      .subscribe(
        user => this.user = user
      );

    this.loginForm = new FormGroup({
      usernameLogin: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.pattern('[a-zA-Z0-9]+'),
      ]),
      passwordLogin: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.pattern('[a-zA-Z0-9]+'),
      ]),
      recaptcha: new FormControl('', [
        Validators.required
      ])
    });
  }

  onLoginSubmit() {
    this.authService.authUser({
      username: this.loginForm.get('usernameLogin').value,
      password: this.loginForm.get('passwordLogin').value})
      .subscribe((data) => {
          if (data.success) {
            this.authService.storeUserData(data.token, data.user);
            this.flashMessage.show(
              'Logged in',
              {
                cssClass: 'alert-success',
                timeout: 2000
              });

            if (this.previousURL) {
              this.router.navigate([this.previousURL]);
            } else {
              this.location.back();
              // this.router.navigate(['/profile']);
            }

          } else {
            this.flashMessage.show(
              data.msg,
              {
                cssClass: 'alert-danger',
                timeout: 2000
              });
            this.router.navigate(['/login']);
          }

        }, err => {
          this.flashMessage.show(
            err,
            // err.status + ' ' + err.statusText,
            {
              cssClass: 'alert-danger',
              timeout: 5000
            });
          this.router.navigate(['/login']);
        }
      );
  }

  // onSigninSubmit(form: NgForm) {
  //   this.authService.authUser({
  //     username: form.value.usernameSignin,
  //     password: form.value.passwordSignin})
  //       .subscribe((data) => {
  //           if (data.success) {
  //             this.authService.storeUserData(data.token, data.user);
  //             this.flashMessage.show(
  //               'Logged in',
  //               {
  //                 cssClass: 'alert-success',
  //                 timeout: 2000
  //               });
  //
  //             if (this.previousURL) {
  //               this.router.navigate([this.previousURL]);
  //             } else {
  //               this.location.back();
  //               // this.router.navigate(['/profile']);
  //             }
  //
  //           } else {
  //             this.flashMessage.show(
  //               data.msg,
  //               {
  //                 cssClass: 'alert-danger',
  //                 timeout: 2000
  //               });
  //             this.router.navigate(['/login']);
  //           }
  //
  //         }, err => {
  //           this.flashMessage.show(
  //             err,
  //             // err.status + ' ' + err.statusText,
  //             {
  //               cssClass: 'alert-danger',
  //               timeout: 5000
  //             });
  //           this.router.navigate(['/login']);
  //         }
  //       );
  // }
}
