import {Component, Input, OnInit} from '@angular/core';
import {IBlog} from '../../../interfaces/i-blog';
import {IUser} from '../../../interfaces/i-user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BlogsService} from '../../../services/blogs.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @Input() blog: IBlog;
  @Input() user: IUser;
  commentForm: FormGroup;

  constructor(
    private blogsService: BlogsService,
    private flashMessage: FlashMessagesService,
  ) { }

  ngOnInit() {
    this.commentForm = new FormGroup({
      comment: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(150),
      ]),
    });
  }

  onCommentSubmit() {
    const newComment = {
      blog: this.blog._id,
      commentator: this.user._id,
      comment: this.commentForm.get('comment').value
    };
    this.blogsService.postComment(newComment)
      .subscribe(
        result => {
          if (result.success) {
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
