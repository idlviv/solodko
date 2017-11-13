import { Injectable } from '@angular/core';
import {AbstractControl, ValidationErrors} from '@angular/forms';
import { ValidatorFn } from '@angular/forms';

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
    const password = abstractControl.get('passwordSignup').value; // to get value in input tag
    const passwordConfirm = abstractControl.get('passwordSignupConfirm').value; // to get value in input tag
    if (password === passwordConfirm) {
      abstractControl.get('passwordSignupConfirm').setErrors(null);
      return null;
    }
    else {
      abstractControl.get('passwordSignupConfirm').setErrors({mismatch: true});
      return null;
    }
      // ? null : {'mismatch': true};

    // if (password !== passwordConfirm) {
    //   console.log('false');
    //   abstractControl.get('confirmPassword').setErrors({MatchPassword: true});
    // } else {
    //   console.log('true');
    //   return null;
    // }
  }

}
