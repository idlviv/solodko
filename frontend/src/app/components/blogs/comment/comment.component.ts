import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBlog, IComment} from '../../../interfaces/i-blog';
import {FlashMessagesService} from 'angular2-flash-messages';

import {AuthService} from '../../../services/auth.service';
import {SharedService} from '../../../services/shared.service';
import {BlogsService} from '../../../services/blogs.service';
import {IUser} from '../../../interfaces/i-user';
import {IForPopup, IFromPopup} from '../../../interfaces/i-modalCommunication';
import {FormControl, FormGroup, Validators} from '@angular/forms';
declare const $: any;

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})

export class CommentComponent implements OnInit {
  @Input()
  comment: any;
  @Input() user: IUser;
  updateOptions = {};
  @Output() onUpdateCommentEmitter = new EventEmitter<boolean>();
  // @Output() onEditCommentEmitter = new EventEmitter<boolean>();
  // commentsList = [];
  forPopup = {} as IForPopup;
  commentForm: FormGroup;

  // get blog(): IBlog {
  //   return this._blog;
  // }
  //
  // @Input()
  // set blog(blog: IBlog) {
  //   // console.log('prev value: ', this._blog);
  //   console.log('new value: ', blog);
  //   this._blog = blog;
  // }

  constructor(
    private authService: AuthService,
    private sharedService: SharedService,
    private blogsService: BlogsService,
    private flashMessage: FlashMessagesService,

  ) { }

  ngOnInit() {

  }

  // Starting popup
  startPopup(taskForPopup, titleForPopup, dataForPopup) {
    this.forPopup.task = taskForPopup;
    this.forPopup.title = titleForPopup;
    this.forPopup.data = dataForPopup;

    this.sharedService.sharingEvent(this.forPopup);
    $('#popupModal').modal('show');

  }

  // Listening popups event
  onConfirmPopup(event: IFromPopup) {
    if (event.task === 'delete-comment') {
      this.deleteComment(event.data);
    }else if (event.task === 'edit-comment') {
      this.editComment(event.data);
    }
  }

  deleteComment(_id) {
    this.updateOptions['query'] = {'_id': this.comment.blog_id};
    this.updateOptions['update'] = { $pull: { 'comments': {_id: _id} } };
    this.blogsService.updateMongo(this.updateOptions)
      .subscribe(result => {
        if (result.success) {
          this.onUpdateCommentEmitter.emit();
          this.flashMessage.show(
            result.message,
            {
              cssClass: 'alert-success',
              timeout: 2000
            });
        } else {
          this.flashMessage.show(
            result.message,
            {
              cssClass: 'alert-danger',
              timeout: 2000
            });
        }
      });
  }

  editComment(data) {
    this.updateOptions['query'] = {_id: this.comment.blog_id, 'comments._id': data._id};
    this.updateOptions['update'] = {$set: {'comments.$.comment': data.editedText}};
    this.blogsService.updateMongo(this.updateOptions)
      .subscribe(result => {
        if (result.success) {
          this.onUpdateCommentEmitter.emit();
          this.flashMessage.show(
            result.message,
            {
              cssClass: 'alert-success',
              timeout: 2000
            });
        } else {
          this.flashMessage.show(
            result.message,
            {
              cssClass: 'alert-danger',
              timeout: 2000
            });
        }
      });
  }
}
