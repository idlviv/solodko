import { Injectable } from '@angular/core';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class CustomErrorHandler {
  statusText: string;

  httpErrorHandler(err: Response) {
    console.log('customErrorHandler works, error - ', err);
      if (err.status === 401) {
        this.statusText = 'Не авторизовано';
        return Observable.throw(this.statusText);
      }
      return Observable.throw('Помилка сервера');
    }
}


