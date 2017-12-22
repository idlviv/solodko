import { Injectable } from '@angular/core';
import {AbstractControl, ValidationErrors} from '@angular/forms';
import { ValidatorFn } from '@angular/forms';

@Injectable()
export class ValidateService {

  constructor() { }

  validateEmail(email) {
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(email);
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

  // username and password checker

  usernameValidChecker(control) {
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    if (regExp.test(control.value)) {
      return null;
    } else {
      return {'usernameValidChecker': true};
    }
  }

  // name and surname checker

  nameValidChecker(control) {
    const regExp = new RegExp(/^[a-zA-Z0-9а-яА-ЯіїєІЇЄ' ]+$/);
    if (regExp.test(control.value)) {
      return null;
    } else {
      return {'nameValidChecker': true};
    }
  }

  // validator for formGroup
  matchPassword(abstractControl: AbstractControl) {
    const password = abstractControl.get('passwordSignup').value; // to get value in input tag
    const passwordConfirm = abstractControl.get('passwordSignupConfirm').value; // to get value in input tag
    if (password === passwordConfirm) {
      abstractControl.get('passwordSignupConfirm').setErrors(null);
      return null;
    } else {
      // set error to 'passwordSignupConfirm' element
      // and dont set error (null) to formGroup
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
