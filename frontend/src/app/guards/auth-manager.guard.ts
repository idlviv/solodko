import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthManagerGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.getLoggedUser()
      .map((result) => {
        if (result.role === 'Admin' || result.role ===  'Manager') {
          console.log('authManagerGuard - canActivate', result.role);
          return true;
        } else {
          console.log('authManagerGuard - canActivate', result.role);
          this.router.navigate(['/login']);
          return false;
        }
      })
      .catch(err => {
        console.log('auth.user-guard - getProfile - error handling', err);
        this.router.navigate(['/login']);
        return Observable.of(false);
      });
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> {

    return this.authService.getLoggedUser()
      .map((result) => {
        if (result.role === 'Admin' || result.role ===  'Manager') {
          console.log('authManagerGuard - canActivateChild', result.role);
          return true;
        } else {
          console.log('authManagerGuard - canActivateChild', result.role);
          this.router.navigate(['/login']);
          return false;
        }
      })
      .catch(err => {
        console.log('auth.user-guard - getProfile - error handling', err);
        this.router.navigate(['/login']);
        return Observable.of(false);
      });
  }
}
