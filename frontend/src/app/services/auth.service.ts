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
  registerUser(user) {
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

    // profile.component підписується на getProfile
  getProfile() {
    // береться токен юзера loadToken() з localStorage
    // формується запит який містить в хедері токен
    // якщо токен валідний і є такий юзер то сервер
    // відповідаю даними юзера (розшифровує токен)
    // і цей юзер передається в profile.component
    let headers = new Headers();
    this.loadToken();

    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(
      config.serverUrl + 'api/profile',
      {headers: headers})
      .map(res => {
        console.log(res.json());
        return res.json()
      });
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

  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
