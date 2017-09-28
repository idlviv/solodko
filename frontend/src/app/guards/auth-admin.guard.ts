import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthAdminGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {

    return this.authService.loggedInAdmin()
      .map((result) => {
        if (result === 'ADMIN') {
          console.log('authGuardAdmin - canActivate', result);
          return true;
        } else {
          console.log('authGuardAdmin - canActivate', result);
          this.router.navigate(['/login']);
          return false;
        }
      });
      // .take(1)
      // .do ((result) => {
      //   if (!result) {
      //     this.router.navigate['/login'];
      //   }
      //   return false;
      // });
  }

  canActivateChild(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {

    return this.authService.loggedInAdmin()
      .map((result) => {
        if (result === 'ADMIN') {
          console.log('authGuardAdmin - canActivateChild', result);
          return true;
        } else {
          console.log('authGuardAdmin - canActivateChild', result);
          this.router.navigate(['/login']);
          return false;
        }
      });
  }
}
