import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {IBlog} from '../../../interfaces/i-blog';
import {AuthService} from '../../../services/auth.service';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnChanges, OnInit {
  @Input() blog: IBlog;
  @Input() user: IBlog;
  private _blog: IBlog;

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
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.sharedService.getSharing()
      .subscribe(x => console.log('x - commentComponent', x));

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.blog) {
      const blog: SimpleChange = changes.blog;
      // console.log('prev value: ', blog.previousValue);
      console.log('changes', changes);
      console.log('got name: ', blog.currentValue);
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
