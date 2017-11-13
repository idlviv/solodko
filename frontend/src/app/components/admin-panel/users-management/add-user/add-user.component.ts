import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../../../services/validate.service';
import {AuthService} from '../../../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  name:  string;
  username:  string;
  email:  string;
  password:  string;
  role: string;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
  ) {}

  ngOnInit() {
  }

  onRegisterSubmit(form: NgForm) {
    const user = {
      name: form.value.name,
      email: form.value.email,
      username: form.value.username,
      password: form.value.password,
      role: 'User',
    };
    // validateService перевіряє валідність даних
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show(
        'fill all fields',
        {
          cssClass: 'alert-danger',
          timeout: 3000
        });
      return false;
    }

    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show(
        'enter valid email',
        {
          cssClass: 'alert-danger',
          timeout: 3000
        });
      return false;
    }

    // підписка на authService.registerUser для реєстрації
    // this.authService.registerUser(user)
    //   .subscribe(data => {
    //       if (data.success) {
    //         this.flashMessage.show(
    //           'Registration successful',
    //           {
    //             cssClass: 'alert-success',
    //             timeout: 3000
    //           });
    //         // this.router.navigate(['/login']);
    //       } else {
    //         this.flashMessage.show(
    //           'Registration failed',
    //           {
    //             cssClass: 'alert-danger',
    //             timeout: 3000
    //           });
    //         this.router.navigate(['/register']);
    //       }
    //     },
    //     error => {
    //       if (error.status === 401) {
    //         this.flashMessage.show(
    //           'Please login',
    //           {
    //             cssClass: 'alert-danger',
    //             timeout: 3000
    //           });
    //         this.router.navigate(['/login']);
    //       }
    //     });
  }

}
