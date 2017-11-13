import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import {tokenNotExpired} from 'angular2-jwt';
import {config} from '../app.config';
import {CustomErrorHandler} from './CustomErrorHandler';
import {IUser} from '../interfaces/i-user';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  private _logging: ReplaySubject<IUser> = new ReplaySubject<IUser>();

  constructor(
    private http: Http,
    private customErrorHandler: CustomErrorHandler
  ) {}

  // create Observable for user login watch
  logUserIn(user: IUser) {
    this._logging.next(user);
  }

  logUserOut(user: IUser) {
    this._logging.next(user);
  }

  getLoggedUser(): Observable < IUser > {
    return this._logging.asObservable();
  }
  // end of observable

  // register.component підписується на registerUser
  // юзер з хедером передається на сервер
  registerUser(user: IUser) {
    const headers = new Headers();
    this.loadToken();
    // headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      config.serverUrl + 'api/register',
      user,
      {headers: headers})
      .map(res => res.json());
  }

  authUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      config.serverUrl + 'api/authenticate',
      user,
      {headers: headers})
      .map(res => res.json())
      .catch(this.customErrorHandler.httpErrorHandler);
  }

    // profile.component підписується на getProfile
  getProfile(): Observable<IUser> {
    // береться токен юзера loadToken() з localStorage
    // формується запит який містить в хедері токен
    // якщо токен валідний і є такий юзер то сервер
    // відповідаю даними юзера (розшифровує токен)
    // і цей юзер передається в profile.component
    const headers = new Headers();
    this.loadToken();

    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(
      config.serverUrl + 'api/profile',
      {headers: headers})
      .map(user => {
        // console.log('res', res.json());
        // this.logUserIn(user.json());

        return user.json();
      })
      .catch(this.customErrorHandler.httpErrorHandler);
    }

  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    this.authToken = localStorage.getItem('token');
  }

  loggedInRole(): Observable<string> {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(
      config.serverUrl + 'api/role',
  {headers: headers})
      .map(res => {
        return res.json();
      })
      .catch(this.customErrorHandler.httpErrorHandler);
  }

  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
