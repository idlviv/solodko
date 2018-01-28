import {Component, OnInit, Input, EventEmitter, Output, ViewChild, AfterViewInit, HostListener} from '@angular/core';
import {IBlog, IComment} from '../../../interfaces/i-blog';
import {IBlogOptions} from '../../../interfaces/i-options';
import {Location} from '@angular/common';
import {AuthService} from 'app/services/auth.service';
import {emptyUser} from '../../../data/user';
import {IUser} from '../../../interfaces/i-user';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {BlogsService} from '../../../services/blogs.service';
import {CommentComponent} from '../comment/comment.component';
declare const $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  // providers: [SharedService]
})
export class BlogComponent implements OnInit, AfterViewInit {

  @Input() blog: IBlog;
  @Input() index: number;
  @Input() blogOptions: IBlogOptions;
  @Output() onDeleteBlogEmitter = new EventEmitter<boolean>();
  @Output() onPostCommentEmitter = new EventEmitter<boolean>();

  commentsList= [];
  orderMainImage: any;
  orderMainText: any;
  startOrder: number;
  user: IUser = emptyUser; // = this.guest;
  job: string;
  findOptions = {};
  comments: IComment[] = [];
  processing = false;

  constructor(
    private location: Location,
    private authService: AuthService,
    private router: Router,
    private sharedService: SharedService,
    private blogsService: BlogsService,
  ) { }

  ngOnInit() {
    this.getMainImageOrderStyle();

    this.authService.getLoggedUser()
      .subscribe(
        user => this.user = user
      );
    if (this.blogOptions.singlePostMode) {
      this.loadComments();
    }

  //   this.sharedService.share$
  //     .subscribe(x => console.log('x - blogComponent', x));
  }

  ngAfterViewInit() {

  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    // console.log('window.innerHeight', window.innerHeight);
    // console.log('window.scrollY', window.scrollY);
    // console.log('document.body.offsetHeight', document.body.offsetHeight);
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if (!this.processing) {
        this.loadComments();
      }
    }
  }

  getMainImageOrderStyle() {
    if (this.index % 2 === 0) {
      this.orderMainImage = 'order-md-1 order-1';
      this.orderMainText = 'order-md-2 order-2';
      this.startOrder = 0;
    } else {
      this.orderMainImage = 'order-md-2 order-1';
      this.orderMainText = 'order-md-1 order-2';
      this.startOrder = 1;
    }
  }

  getOrderStyle(i, startPosition): string {
    let order: number;
    let subOrder: number;
    if (this.index % 2 === 0) {
      if (i % 2 === 0) {
        order = 2;
        subOrder = 1;
      } else {
        order = 1;
        subOrder = 2;
      }
    } else {
      if (i % 2 === 0) {
        order = 1;
        subOrder = 2;
      } else {
        subOrder = 1;
        order = 2;
      }
    }
    if (!startPosition) {
      return 'order-md-' + subOrder + ' order-1';
    } else {
      return 'order-md-' + order + ' order-2';
    }
  }

  loadComments() {
    this.processing = true;
    this.findOptions['query'] = {_id: this.blog._id};
    this.findOptions['options'] = [
      {$project: {projectedArray: {$slice: ['$comments', this.commentsList.length, this.blogOptions.commentsLength]}}},
      ];

    this.blogsService.findMongo(this.findOptions)
      .subscribe(
        result => {
        this.comments = result.data[0].projectedArray;
        this.updateCommentsList();
        },
        error => console.log(error.message));
  }

  updateCommentsList() {
    const commentators = [];
    for (const comment of this.comments) {
      if (commentators.indexOf(comment.commentators_id) === -1) {
        commentators.push(comment.commentators_id);
      }
    }
    this.authService.getUsersByIds({_id: {$in: commentators}})
      .subscribe(result => {
        for (const comment of this.comments) {
          result.data.forEach(commentator => {
            if (commentator._id === comment.commentators_id) {
              this.commentsList.push(Object.assign(
                comment,
                {username: commentator.username, avatar: commentator.avatar}));
            }
            this.processing = false;
          });
        }
      });
  }

  goBack() {
    this.location.back();
  }

  editBlog() {
    this.router.navigate(['/blogs/ch/edit-blog', this.blog._id]);
  }

  newBlog() {
    this.router.navigate(['/blogs/ch/new-blog']);
  }

  deleteBlog() {
    this.job = 'delete-blog';
    $('#popupModal').modal('show');
  }

  onDelete() {
    this.onDeleteBlogEmitter.emit();
  }

  onPostComment() {
    this.onPostCommentEmitter.emit();
    this.commentsList = [];
    this.loadComments();
  }

  onLoadComments() {
    this.loadComments();
  }

}
