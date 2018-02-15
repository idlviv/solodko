import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


@Injectable()
export class NoAuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.getLoggedUser()
      .map((result) => {
        console.log('noauthGuard role', result.role);
        if (result.role === 'Admin' || result.role ===  'Manager' || result.role ===  'User') {
          this.router.navigate(['']);
          console.log('noAuthGuard - canActivate', result.role);
          return false;
        } else {
          console.log('noAuthGuard - canActivate', result.role);
          return true;
        }
      })
      .catch(err => {
        console.log('noAuthGuard - canActivate - error handling', err);
        return Observable.of(true);
      });
  }
}
