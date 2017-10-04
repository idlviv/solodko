import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthMenuGuard {

  constructor(private authService: AuthService) {}

  canActivateMenuAdmin() {
    return this.authService.loggedInRole()
      .take(1)
      .subscribe((result) => {
        if (result === 'Admin') {
          console.log('authMenuGuard - isAdmin', result);
          return true;
        } else {
          console.log('authMenuGuard - isAdmin', result);
          return false;
        }
      });
  }
}
