import {Component, Input, OnInit} from '@angular/core';
import {IBlog} from '../../../interfaces/i-blog';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() blog: IBlog;
  @Input() user: IBlog;
  // commentator: string;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {}

  // onPostComment() {
  //
  // }
  //
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
