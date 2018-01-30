import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBlog, IComment} from '../../../interfaces/i-blog';
import {FlashMessagesService} from 'angular2-flash-messages';

import {AuthService} from '../../../services/auth.service';
import {SharedService} from '../../../services/shared.service';
import {BlogsService} from '../../../services/blogs.service';
import {IUser} from '../../../interfaces/i-user';
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
  @Output() onDeleteCommentEmitter = new EventEmitter<boolean>();
  @Output() onEditCommentEmitter = new EventEmitter<boolean>();
  // commentsList = [];
  taskForPopup: string;
  dataForPopup: any;

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

  ngOnInit() {}

  // Listening popups event
  onConfirmPopup(event) {
    if (event === 'delete-comment') {
      this.deleteComment();
    }
  }

  // Starting popup
  startPopup(taskForPopup, dataForPopup) {
    // this.taskForPopup = taskForPopup;
    // this.dataForPopup = dataForPopup;
    // console.log('this.taskForPopup', this.taskForPopup);
    // console.log('this.dataForPopup', this.dataForPopup);
    $('#popupModal').modal('show');
    this.sharedService.sharingEvent({taskForPopup, dataForPopup});
  }

  deleteComment() {
    this.updateOptions['query'] = {'_id': this.comment.blog_id};
    this.updateOptions['update'] = { $pull: { 'comments': {_id: this.comment._id} } };
    this.blogsService.updateMongo(this.updateOptions)
      .subscribe(result => {
        if (result.success) {
          this.onDeleteCommentEmitter.emit();
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

  onEdit() {
    this.onEditCommentEmitter.emit();
  }

  onEditComfirm() {
    this.updateOptions['query'] = {'_id': this.comment.blog_id};
    this.updateOptions['update'] = { $pull: { 'comments': {_id: this.comment._id} } };
    this.blogsService.updateMongo(this.updateOptions)
      .subscribe(result => {
        console.log('result', result);
      });
  }

}
