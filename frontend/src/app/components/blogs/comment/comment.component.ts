import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {IBlog} from '../../../interfaces/i-blog';
import {AuthService} from '../../../services/auth.service';
import {SharedService} from '../../../services/shared.service';
import {BlogsService} from '../../../services/blogs.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnChanges, OnInit {
  @Input() blog: IBlog;
  @Input() user: IBlog;
  // private _blog: IBlog;
  comments = [];

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
    // this.sharedService.getSharing()
    //   .subscribe(x => console.log('x - commentComponent', x));

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.blog) {
      // const blog: SimpleChange = changes.blog;
      // console.log('blog._id', blog.currentValue);
      const commentators = [];
      for (const comment of this.blog.comments) {
        if (commentators.indexOf(comment.commentators_id) === -1) {
          commentators.push(comment.commentators_id);
        }
      }
      console.log(commentators);
      this.authService.getUsersByIds({_id: {$in: commentators}})
        .subscribe(result => {

          console.log('user', result.data);
          for (const comment of this.blog.comments) {
            result.data.map(commentator => {
              if (commentator._id === comment.commentators_id) {

                this.comments.push(Object.assign(
                  comment,
                  {username: commentator.username, avatar: commentator.avatar}));
              }
            });
          }
          console.log('this.comments', this.comments);

      });
      console.log('this.blog.comments.length', this.blog.comments.length);

    }


  }

  // getCommentator(_id) {
  //   return this.authService.getUsernameById(_id)
  //     .subscribe(
  //       result => {
  //         this.commentator = result.data[0].username;
  //         console.log('res', result.data[0].username);
  //         return result.data.username}
  //     )
  // }
}
