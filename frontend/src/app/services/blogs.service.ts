import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {config} from '../app.config';
import {AuthService} from './auth.service';

@Injectable()
export class BlogsService {
  //? or use this.authService.authToken
  authToken: any;

  constructor(private http: Http,
              private authService: AuthService) {
  }

  check() {
    const headers = new Headers();
    this.authToken = this.authService.loadToken();
    console.log('this.authToken', this.authToken);

    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      config.serverUrl + 'blogs/newBlog',
      {sd: 'yo'},
      {headers: headers})
      .map(res => res.json());

  }

}