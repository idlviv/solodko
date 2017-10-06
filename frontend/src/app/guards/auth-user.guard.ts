import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthUserGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.getProfile()
      .map((result) => {
        if (result.role === 'Admin' || result.role ===  'Manager' || result.role ===  'User') {
          console.log('authManagerGuard - canActivate', result.role);
          return true;
        } else {
          console.log('authManagerGuard - canActivate', result.role);
          this.router.navigate(['/login']);
          return false;
        }
      });
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> {

    return this.authService.getProfile()
      .map((result) => {
        if (result.role === 'Admin' || result.role ===  'Manager' || result.role ===  'User') {
          console.log('authManagerGuard - canActivateChild', result.role);
          return true;
        } else {
          console.log('authManagerGuard - canActivateChild', result.role);
          this.router.navigate(['/login']);
          return false;
        }
      });
  }
}
