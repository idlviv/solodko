import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthManagerGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.loggedInRole()
      .map((result) => {
        if (result === 'Admin' || result ===  'Manager') {
          console.log('authManagerGuard - canActivate', result);
          return true;
        } else {
          console.log('authManagerGuard - canActivate', result);
          this.router.navigate(['/login']);
          return false;
        }
      });
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> {

    return this.authService.loggedInRole()
      .map((result) => {
        if (result === 'Admin' || result ===  'Manager') {
          console.log('authManagerGuard - canActivateChild', result);
          return true;
        } else {
          console.log('authManagerGuard - canActivateChild', result);
          this.router.navigate(['/login']);
          return false;
        }
      });
  }
}
