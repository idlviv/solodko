import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import {Observable} from 'rxjs/Observable';
//
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

import {tokenNotExpired} from 'angular2-jwt';
import {config} from '../app.config';
import {CustomErrorHandler} from './CustomErrorHandler';
import {IUser} from '../interfaces/i-user';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(
    private http: Http,
    private customErrorHandler: CustomErrorHandler
  ) {}

  // register.component підписується на registerUser
  // юзер з хедером передається на сервер
  registerUser(user: IUser) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
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

  updateUser() {
    this.getProfile()
      .subscribe()
  }

    // profile.component підписується на getProfile
  getProfile() {
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
      .map(res => {
        // console.log('res', res.json());
        return res.json();
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

  // showForUser(): boolean {
  //   if (!tokenNotExpired()) {
  //     return false;
  //   }
  //   this.loadToken();
  //   let jwtData = this.authToken.split('.')[1];
  //   let decodedJwtJsonData = window.atob(jwtData);
  //   let decodedJwtData = JSON.parse(decodedJwtJsonData);
  //
  //   let role = decodedJwtData.sub.role;
  //
  //   console.log('jwtData: ' + jwtData);
  //   console.log('decodedJwtJsonData: ' + decodedJwtJsonData);
  //   console.log('decodedJwtData: ' + decodedJwtData);
  //   console.log('Is admin: ' + role);
  //
  //   return role === 'USER';
  // }

  loggedIn() {
    // console.log('loggedIn');
    return tokenNotExpired();
  }

  // getCSRFCookie() {
  //   return 'sdfdfgdfgdfg'
  // }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
