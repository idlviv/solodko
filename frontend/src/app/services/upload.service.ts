import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Http, Headers} from '@angular/http';
import {config} from '../app.config';

@Injectable()
export class UploadService {

  constructor(private http: Http,
              private authService: AuthService) { }

  uploadPic(file) {

    const formData: FormData = new FormData();

    // for (let i = 0; i < files.length; i++) {
    //   formData.append('file[]', files[i]);
    // }

    formData.append('file', file, file.name);

    formData.append("username", "Groucho");
    formData.append("accountnum", 123456); // number 123456 is immediately converted to a string "123456"
    // console.log('file', file);
    console.log('formData--', formData);
    const headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data;boundary=' + Math.random());
    // headers.append('Accept', 'application/json');
    // headers.set('Content-Type', 'application/x-www-form-urlencoded');
    // headers.set('Content-Type', 'multipart/form-data');
    // headers.set('Authorization', this.authService.authToken);
    return this.http.post(config.serverUrl + 'upload/upload',
      formData,
    // {headers}
    )
      .map(res => res.json());
  }
}
