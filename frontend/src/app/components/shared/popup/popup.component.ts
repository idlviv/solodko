import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {BlogsService} from '../../../services/blogs.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Location} from '@angular/common';
import {IBlog} from '../../../interfaces/i-blog';
import {SharedService} from '../../../services/shared.service';
import {IForPopup, IFromPopup} from '../../../interfaces/i-modalCommunication';
import {FormControl, FormGroup, Validators} from '@angular/forms';

declare const $: any;

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  forPopup = {} as IForPopup;
  fromPopup = {} as IFromPopup;
  @Output() onConfirmPopupEmitter: EventEmitter<IFromPopup> = new EventEmitter<IFromPopup>();
  editCommentForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private sharedService: SharedService,
    private location: Location,
  ) { }

  ngOnInit() {

    this.editCommentForm = new FormGroup({
    comment: new FormControl('',
      [
        Validators.required,
        Validators.maxLength(200),
      ]),
    });

    this.sharedService.getSharingEvent()
      .subscribe(result => {
        this.forPopup = result;
        this.editCommentForm.patchValue(this.forPopup.data);
      });
    }

  onCommentEditSubmit() {
    this.fromPopup.task = this.forPopup.task;
    this.fromPopup.data = {_id: this.forPopup.data._id, editedText: this.editCommentForm.get('comment').value};
    this.onConfirmPopupEmitter.emit(this.fromPopup);
    $('#popupModal').modal('hide');
  }

  onPressEnter(event) {
    if (event.keyCode === 13) {
      this.onCommentEditSubmit();
    }
  }

  onConfirm() {
    this.fromPopup.task = this.forPopup.task;
    this.fromPopup.data = this.forPopup.data._id;
    this.onConfirmPopupEmitter.emit(this.fromPopup);
    $('#popupModal').modal('hide');
  }

  goBack() {
    this.location.back();
  }

}
