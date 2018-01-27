import {Component, OnInit, Input, EventEmitter, Output, ViewChild, AfterViewInit} from '@angular/core';
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
  // @Output() onPostCommentEmitter = new EventEmitter<boolean>();


  // onMain: boolean;
  orderMainImage: any;
  orderMainText: any;
  startOrder: number;
  user: IUser = emptyUser; // = this.guest;
  job: string;
  showCommentForm: false;
  findOptions = {};
  comments: IComment[] = [];
  // displayedComments = 0;

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
    const commentsLength = 10;
    const slice: any[] = ['$comments', this.comments.length, commentsLength];
    // if (start) {
    //   slice.push(start); }
    // if (qty) {
    //   slice.push(qty);
    // } else {
    //   slice.push(10);
    // }

    this.findOptions['query'] = {_id: this.blog._id};
    this.findOptions['options'] = [
      {$project: {projectedArray: {$slice: slice}}},
      ];

    console.log('this.findOptions', this.findOptions);
    this.blogsService.findMongo(this.findOptions)
      .subscribe(
        result => {
        this.comments = result.data[0].projectedArray;
        console.log('com ', this.comments);
        this.sharedService.sharingEvent('updateCommentsList');
        },
        error => console.log(error.message));
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
    // this.onPostCommentEmitter.emit();
    this.comments = [];
    this.loadComments();
  }

  onLoadComments() {
    this.loadComments();
  }

}
