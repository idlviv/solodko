import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Http, Headers} from '@angular/http';
import {config} from '../app.config';

@Injectable()
export class UploadService {

  constructor(private http: Http,
              private authService: AuthService) { }

  uploadPic(file) {
    const headers = new Headers();
    // headers.set('Content-Type', 'application/x-www-form-urlencoded');
    headers.set('Authorization', this.authService.authToken);
    return this.http.put(config.serverUrl + 'upload/change-avatar',
      {file},
      {headers})
      .map(res => res.json());
  }
}
