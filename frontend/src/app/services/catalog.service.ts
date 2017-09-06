import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

// import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import {config} from '../app.config';
import {localCatalog} from '../data/catalog'

@Injectable()
export class CatalogService {

  constructor(private http: Http) {}

  getCatalog() {

    return localCatalog;
    // return this.http.get(
    //   config.serverUrl + 'api/getCatalog')
    //   .map(res => res.json());
  }

  getQueriedCatalog(params) {
    for(let i = 0; i < localCatalog.length; i++){
      if (params.category0 === localCatalog[i].category0.name) {
        return localCatalog[i].category0.category1;
      }
    }

    // return this.http.get(
    //   config.serverUrl + 'api/getCatalog')
    //   .map(res => res.json())
    //   .map(data => {
    //     return data.find((value) => params.category0 === value.category0.name).category0.category1;
    //   });
  }
}