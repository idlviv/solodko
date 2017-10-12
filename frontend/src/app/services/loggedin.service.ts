// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
// import { ReplaySubject } from 'rxjs/ReplaySubject';
// import {NavigationStart, Router} from '@angular/router';
// import {AuthService} from './auth.service';
// import {IUser} from '../interfaces/i-user';
//
//
// @Injectable()
// export class LoggedinService {
//
//   private _loggedIn: ReplaySubject<IUser> = new ReplaySubject<IUser>();
//
//     logUserIn(user: IUser) {
//       this._loggedIn.next(user);
//     }
//
//     logUserOut(user: IUser) {
//       this._loggedIn.next(user);
//     }
//
//     getUserLoggedInObs(): Observable < IUser > {
//       return this._loggedIn.asObservable();
//   }
//
//
// }
