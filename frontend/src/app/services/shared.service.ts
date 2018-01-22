import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class SharedService {
  private _share: ReplaySubject<string> = new ReplaySubject(1);
  share$ = this._share.asObservable();

  constructor() { }

  sharing(x) {
    this._share.next(x);
  }

  getSharing() {
    return this._share.asObservable();
  }

}
