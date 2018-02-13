import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Http, Headers} from '@angular/http';
import {config} from '../app.config';

@Injectable()
export class UploadService {

  constructor(private http: Http,
              private authService: AuthService) { }

  uploadPic(file, user) {

    const formData: FormData = new FormData();

    // for (let i = 0; i < files.length; i++) {
    //   formData.append('file[]', files[i]);
    // }

    formData.append('file', file, file.name);

    formData.append('user_id', user._id);
    // formData.append("accountnum", 123456); // number 123456 is immediately converted to a string "123456"
    const headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data;boundary=' + Math.random());
    return this.http.post(config.serverUrl + 'upload/change-avatar',
      formData,
    // {headers}
    )
      .map(res => res.json());
  }
}
