import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate() {
    if (this.authService.loggedIn()) {
      console.log('authGuard - canActivate', this.authService.loggedIn());
      return true;
    } else {
      console.log('authGuard - canActivate', this.authService.loggedIn());
      this.router.navigate(['/login']);
      return false;
    }
  }

}
