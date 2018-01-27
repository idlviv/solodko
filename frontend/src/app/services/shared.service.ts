import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class SharedService {
  private _shareEvent: ReplaySubject<string> = new ReplaySubject(1);
  shareEvent$ = this._shareEvent.asObservable();

  constructor() { }

  sharingEvent(updateCommentsList) {
    this._shareEvent.next(updateCommentsList);
  }

  getSharingEvent() {
    return this.shareEvent$;
  }

}
