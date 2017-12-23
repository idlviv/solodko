import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { URLSearchParams, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import {AuthService} from './auth.service';
import {config} from '../app.config';

@Injectable()
export class ProductService {

  constructor(private http: Http,
              private authService: AuthService) { }

  getProducts() {
      return this.http.get(
        config.serverUrl + 'api/getProducts')
        .map(res => res.json());
  }


  getQueriedProducts(searchQuery) {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    // const data = {key: this.authService.getCSRFCookie()};
    const params = new URLSearchParams();
    // params.set('category', 'Toys');
    params.set('obj', JSON.stringify(searchQuery));
    const options = new RequestOptions({ headers: headers, params: params });
    console.log('options', options);

    return this.http.get(
        config.serverUrl + 'api/getQueriedProducts',
        // data,
        options)
        .map(res => res.json());
  }

  addProduct(product) {

    const headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);

    headers.append('Content-Type', 'application/json');
    return this.http.post(
      config.serverUrl + 'api/addProduct',
      product,
      {headers: headers})
      .map(res => res.json());
  }

  editProduct(product) {

    const headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);

    headers.append('Content-Type', 'application/json');
    return this.http.put(
      config.serverUrl + 'api/editProduct',
      product,
      {headers: headers})
      .map(res => res.json());
  }

  deleteProduct(_id) {

    const headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    console.log('api/deleteProduct/' + _id);
    return this.http.delete(
      config.serverUrl + 'api/deleteProduct/' + _id,
      {headers: headers})
      .map(res => res.json());
  }

}
