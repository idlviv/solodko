import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';


@Injectable()
export class CustomErrorHandler {
  statusText: string;

  httpErrorHandler(err: Response) {
      if (err.status === 401) {
        this.statusText = 'Не авторизовано';
        return Observable.throw(this.statusText);
      }


      return Observable.throw('Помилка сервера');
    }
}


