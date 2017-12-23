import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {config} from '../app.config';
import {AuthService} from './auth.service';

@Injectable()
export class BlogsService {

  constructor(private http: Http,
              private authService: AuthService) {
  }

  addBlog(newBlog) {
    const headers = new Headers();
    this.authService.loadToken();

    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      config.serverUrl + 'blogs/add-blog',
      newBlog,
      {headers: headers})
      .map(res => res.json());
  }

  getBlogs() {
    const headers = new Headers();
    this.authService.loadToken();

    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(
      config.serverUrl + 'blogs/get-blogs',
      {headers: headers})
      .map(res => res.json());
  }

  getQueriedBlogs(searchQuery) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);

    const params = new URLSearchParams();
console.log('searchQuery', JSON.stringify(searchQuery));
    params.set('obj', JSON.stringify(searchQuery));
console.log(params);
    const options = new RequestOptions({ headers: headers, params: params });
console.log('options', options);
    return this.http.get(
      config.serverUrl + 'blogs/get-queried-blogs',
       options)
      .map(res => res.json());
  }
}
