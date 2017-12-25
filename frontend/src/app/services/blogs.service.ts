import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
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
    params.set('searchQuery', JSON.stringify(searchQuery));
    const options = new RequestOptions({ headers: headers, params: params });
    return this.http.get(
      config.serverUrl + 'blogs/get-queried-blogs',
       options)
      .map(res => res.json());
  }

  editBlog(searchQuery) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authService.authToken);
    // const params = new URLSearchParams();
    // params.set('searchQuery', JSON.stringify(searchQuery));
    // const options = new RequestOptions({ headers: headers, params: params });
    return this.http.put(
      config.serverUrl + 'blogs/edit-blog',
      {searchQuery: JSON.stringify(searchQuery)},
      headers)
      // options)
      .map(res => res.json());
  }
}
