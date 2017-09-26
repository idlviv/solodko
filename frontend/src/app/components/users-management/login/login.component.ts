import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Object;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(form: NgForm) {
    this.user = {
      username: form.value.username,
      password: form.value.password,
    };

    this.authService.authUser(this.user)
      .subscribe((data) => {
        if (data.success) {
          this.authService.storeUserData(data.token, data.user);
          this.flashMessage.show(
            'Logged in',
            {
              cssClass: 'alert-success',
              timeout: 5000
            });
          this.router.navigate(['/dashboard']);

        } else {
          this.flashMessage.show(
             data.msg,
            {
              cssClass: 'alert-danger',
              timeout: 5000
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
