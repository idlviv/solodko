import { Injectable } from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Injectable()
export class ValidateService {





  constructor() { }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateProduct(product) {
    return true;
  }

  validateRegister(user) {
    if (user.name === undefined ||
      user.email === undefined ||
      user.username === undefined ||
      user.password === undefined) {
      return false;
    } else {
      return true;
    }
  }

  matchPassword(abstractControl: AbstractControl) {
    const password = abstractControl.get('password').value; // to get value in input tag
    const passwordConfirm = abstractControl.get('passwordConfirm').value; // to get value in input tag
    return abstractControl.get('password').value === abstractControl.get('passwordConfirm').value
      ? null : {'mismatch': true};

    // if (password !== passwordConfirm) {
    //   console.log('false');
    //   abstractControl.get('confirmPassword').setErrors({MatchPassword: true});
    // } else {
    //   console.log('true');
    //   return null;
    // }
  }

}
