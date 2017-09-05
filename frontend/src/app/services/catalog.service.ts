import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

// import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import {config} from '../app.config';

@Injectable()
export class CatalogService {

  constructor(private http: Http) {}



  getCatalog() {
    return this.http.get(
      config.serverUrl + 'api/getCatalog')
      .map(res => res.json());
  }

  getQueriedCatalog(params) {
    return this.http.get(
      config.serverUrl + 'api/getCatalog')
      .map(res => res.json())
      .map(data => {
        return data.find((value) => params.category0 === value.category0.name).category0.category1;
      });
  }
}