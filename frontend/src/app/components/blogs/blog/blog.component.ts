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
import {FlashMessagesService} from 'angular2-flash-messages';

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
  @Output() onPostOrDeleteCommentEmitter = new EventEmitter<boolean>();

  isPopupConfirmed = false;
  commentsList= [];
  orderMainImage: any;
  orderMainText: any;
  startOrder: number;
  user: IUser = emptyUser; // = this.guest;
  taskForPopup: string;
  dataForPopup: any;
  findOptions = {};
  comments: IComment[] = [];
  processing = false;
  offsets: string;

  constructor(
    private location: Location,
    private authService: AuthService,
    private router: Router,
    private sharedService: SharedService,
    private blogsService: BlogsService,
    private flashMessage: FlashMessagesService,
  ) { }

  ngOnInit() {
    this.getMainImageOrderStyle();

    this.authService.getLoggedUser()
      .subscribe(
        user => this.user = user
      );

    if (this.blogOptions.singlePostMode && this.blog.commentsLength) {
      this.loadComments();
    }

    if (this.blogOptions.singlePostMode) {
      this.offsets = 'offset-md-1 col-md-10';
    } else {
      this.offsets = 'col-md-12';
    }

  //   this.sharedService.share$
  //     .subscribe(x => console.log('x - blogComponent', x));
  }

  ngAfterViewInit() {}

  // Listening of page bottom reached
  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if (!this.processing && this.commentsList.length !== this.blog.commentsLength) {
        this.loadComments();
      }
    }
  }

  // Setting style of col order
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

  // Loading portion of comments from blog
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

  // Making comments list with additional commetators data
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
                {username: commentator.username, avatar: commentator.avatar, blog_id: this.blog._id}));
            }
            this.processing = false;
          });
        }
      });
  }

  // Navigation
  goBack() {
    this.location.back();
  }

  editBlog() {
    this.router.navigate(['/blogs/ch/edit-blog', this.blog._id]);
  }

  newBlog() {
    this.router.navigate(['/blogs/ch/new-blog']);
  }

  // Listening popups event
  onConfirmPopup(event) {
    if (event === 'delete-blog') {
      this.deleteBlog();
    }
  }

  // Starting popup
  startPopup(taskForPopup, dataForPopup) {
    // this.taskForPopup = taskForPopup;
    // this.dataForPopup = dataForPopup;
    $('#popupModal').modal('show');
    this.sharedService.sharingEvent({taskForPopup, dataForPopup});

  }

  // Deleting blog
  deleteBlog() {
    this.blogsService.deleteBlog(this.blog._id)
      .subscribe(result => {
        if (result.success) {
          this.onDeleteBlogEmitter.emit();
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
      });

  }

  onDeleteComment() {
    this.onPostOrDeleteCommentEmitter.emit();
    this.commentsList = [];
    this.loadComments();
  }

  OnEditComment() {

  }

  onPostComment() {
    this.onPostOrDeleteCommentEmitter.emit();
    this.commentsList = [];
    this.loadComments();
  }

  onLoadComments() {
    this.loadComments();
  }

}
