import { Injectable } from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Injectable()
export class ValidateService {

  constructor() { }

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
  static validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  static matchPassword(AC: AbstractControl) {
    let password = AC.get('password').value; // to get value in input tag
    let passwordConfirm = AC.get('passwordConfirm').value; // to get value in input tag
    if(password != passwordConfirm) {
      console.log('false');
      AC.get('confirmPassword').setErrors( {MatchPassword: true} )
    } else {
      console.log('true');
      return null
    }
  }
}
