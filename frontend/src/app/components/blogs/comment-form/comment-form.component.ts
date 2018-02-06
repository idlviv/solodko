import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBlog} from '../../../interfaces/i-blog';
import {IUser} from '../../../interfaces/i-user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BlogsService} from '../../../services/blogs.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {SharedService} from '../../../services/shared.service';
import {ValidateService} from '../../../services/validate.service';
import {disableDebugTools} from '@angular/platform-browser';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @Input() blog: IBlog;
  @Input() user: IUser;
  commentForm: FormGroup;
  @Output() onPostCommentEmitter = new EventEmitter<boolean>();
  commentPlaceholder: string;

  constructor(
    private blogsService: BlogsService,
    private flashMessage: FlashMessagesService,
    private sharedService: SharedService,
    private validateService: ValidateService
  ) { }

  ngOnInit() {


    this.commentForm = new FormGroup({
      comment: new FormControl('',
        [
        // this.validateService.userLoggedIn(this.user),
        Validators.required,
        Validators.maxLength(200),
      ]),

      recaptcha: new FormControl('', [
        Validators.required
      ])
    });


    if (this.user.role === 'User' || this.user.role === 'Manager' || this.user.role === 'Admin') {
      this.commentForm.get('comment').enable();
      this.commentPlaceholder = 'Коментар';
    } else {
      this.commentForm.get('comment').disable();
      this.commentPlaceholder = 'Щоб залишити коментар потрібно увійти';

    }
  }

  // resolved(captchaResponse: string) {
  //   this.onCommentSubmit(captchaResponse);
  //   console.log(`Resolved captcha with response ${captchaResponse}:`);
  // }

  // onShared() {
  //   this.sharedService.sharing('comment');
  // }

  // onPressEnter(event) {
  //   if (event.keyCode === 13) {
  //     this.onCommentSubmit();
  //   }
  // }

  onCommentSubmit(captchaResponse) {
    console.log('capt ');

    const newComment = {
      blog: this.blog._id,
      commentators_id: this.user._id,
      comment: this.commentForm.get('comment').value,
      // recaptcha: captchaResponse
      recaptcha: this.commentForm.get('recaptcha').value
    };

    this.blogsService.postComment(newComment)
      .subscribe(
        result => {
          if (result.success) {
            this.onPostCommentEmitter.emit();
            this.commentForm.reset();
            this.flashMessage.show(
              result.message,
              {
                cssClass: 'alert-success',
                timeout: 2000
              });
          } else {
            console.log('error', result);
            this.flashMessage.show(
              result.message,
              {
                cssClass: 'alert-danger',
                timeout: 2000
              });
          }
        },
        error => {
          this.flashMessage.show(
            'Помилка',
            {
              cssClass: 'alert-danger',
              timeout: 2000
            });
        }
      );

  }
}
