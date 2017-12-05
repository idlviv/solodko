import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NoAuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.getProfile()
      .map((result) => {
        if (result.role === 'Admin' || result.role ===  'Manager' || result.role ===  'User') {
          this.router.navigate(['/']);
          console.log('noAuthGuard - canActivate', result.role);
          return false;
        } else {
          console.log('noAuthGuard - canActivate', result.role);
          return true;
        }
      });
  }
}
