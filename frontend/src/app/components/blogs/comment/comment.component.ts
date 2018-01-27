import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {IBlog, IComment} from '../../../interfaces/i-blog';
import {AuthService} from '../../../services/auth.service';
import {SharedService} from '../../../services/shared.service';
import {BlogsService} from '../../../services/blogs.service';
import {IUser} from '../../../interfaces/i-user';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})

export class CommentComponent implements OnChanges, OnInit {
  @Input() comments: IComment[];
  @Input() user: IUser;
  commentsList = [];

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
  ) { }

  ngOnInit() {
    this.sharedService.getSharingEvent()
      .subscribe(event => {
        if (event === 'updateCommentsList') {
          this.updateCommentsList();
        }
      });
  }

  updateCommentsList() {
    console.log('changes');
    // const blog: SimpleChange = changes.blog;
    // console.log('blog._id', blog.currentValue);
    const commentators = [];
    for (const comment of this.comments) {
      if (commentators.indexOf(comment.commentators_id) === -1) {
        commentators.push(comment.commentators_id);
      }
    }
    this.authService.getUsersByIds({_id: {$in: commentators}})
      .subscribe(result => {
        for (const comment of this.comments) {
          // console.log('comment', comment);
          result.data.forEach(commentator => {
            if (commentator._id === comment.commentators_id) {
              // console.log('this.commentsList', this.commentsList);
              this.commentsList.push(Object.assign(
                comment,
                {username: commentator.username, avatar: commentator.avatar}));
            }
          });
        }
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('on-changes');
  //
  //   if (changes.comments) {
  //     console.log('changes');
  //     // const blog: SimpleChange = changes.blog;
  //     // console.log('blog._id', blog.currentValue);
  //     const commentators = [];
  //     for (const comment of this.comments) {
  //       if (commentators.indexOf(comment.commentators_id) === -1) {
  //         commentators.push(comment.commentators_id);
  //       }
  //     }
  //     this.authService.getUsersByIds({_id: {$in: commentators}})
  //       .subscribe(result => {
  //         for (const comment of this.comments) {
  //           // console.log('comment', comment);
  //           result.data.forEach(commentator => {
  //             if (commentator._id === comment.commentators_id) {
  //               // console.log('this.commentsList', this.commentsList);
  //               this.commentsList.push(Object.assign(
  //                 comment,
  //                 {username: commentator.username, avatar: commentator.avatar}));
  //             }
  //           });
  //         }
  //     });
  //   }
  }
}
