import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class SharedService {
  private _shareEvent: ReplaySubject<any> = new ReplaySubject(1);
  shareEvent$ = this._shareEvent.asObservable();

  constructor() { }

  sharingEvent(x) {
    this._shareEvent.next(x);
  }

  getSharingEvent() {
    return this.shareEvent$;
  }

}
