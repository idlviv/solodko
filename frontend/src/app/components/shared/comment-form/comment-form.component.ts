import {Component, Input, OnInit} from '@angular/core';
import {IBlog} from '../../../interfaces/i-blog';
import {IUser} from '../../../interfaces/i-user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BlogsService} from '../../../services/blogs.service';

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
      .subscribe();

    console.log('user._id', this.user._id);
    console.log('blog._id', this.blog._id);
    console.log('comment', this.commentForm.get('comment').value);
  }
}
