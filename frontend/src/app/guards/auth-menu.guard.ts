import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs/Observable';
import {Router, GuardsCheckEnd, Event, NavigationStart} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class AuthMenuGuard {

  constructor(private authService: AuthService,
              private router: Router) {}

  isAdmin(): Observable<Subscription> {
    return this.router.events
      .filter(event => event instanceof NavigationStart)
      .map(() => {
        return this.authService.loggedInRole()
          .subscribe(
            (result) => {
            if (result === 'Admin') {
              console.log('authMenuGuard - isAdmin', result);
              return true;
            } else {
              console.log('authMenuGuard - isAdmin', result);
              return false;
            }
          },
            (err) => {
              console.log('authMenuGuard - isAdmin - false', err);
              // return false;
              throw err;
            }
          );
      });
  }

  // canActivateMenuAdmin(): Observable<boolean> {
  //   return this.authService.loggedInRole()
  //     // .take(1)
  //     .map((result) => {
  //       if (result === 'Admin') {
  //         console.log('authMenuGuard - isAdmin', result);
  //         return true;
  //       } else {
  //         console.log('authMenuGuard - isAdmin', result);
  //         return false;
  //       }
  //     });
  // }
}
