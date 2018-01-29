import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
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
  @Input()
  comment: any;
  @Input() user: IUser;
  updateOptions = {};


  // commentsList = [];

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

  ngOnInit() {}

  onDelete() {
    this.updateOptions['query'] = {'_id': this.comment.blog_id};
    this.updateOptions['update'] = { $pull: { 'comments._id': this.comment._id } };
    this.blogsService.updateMongo(this.updateOptions)
      .subscribe(result => console.log('result', result));
  }

  ngOnChanges(changes: SimpleChanges) {
    // if (changes.comments) {
    //   console.log('changes.comments.currentValue', changes.comments.currentValue);
    // }
  }
}
