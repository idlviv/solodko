import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {BlogsService} from '../../../services/blogs.service';
import {IBlog} from '../../../interfaces/i-blog';
import {ISearchQuery} from '../../../interfaces/i-searchQuery';

@Component({
  selector: 'app-delete-blog',
  templateUrl: './delete-blog.component.html',
  styleUrls: ['./delete-blog.component.scss']
})
export class DeleteBlogComponent implements OnInit {
  _id: string;
  blog: IBlog;
  searchQuery: ISearchQuery;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private blogsService: BlogsService,

  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this._id = params._id;
        this.searchQuery = {
          type: 'object',
          query: {
            key: '_id',
            value: this._id
          }
        };
      },
        (error) => {
        this.flashMessage.show(
          error,
          {
            cssClass: 'alert-danger',
            timeout: 3000
          });
      });

    this.blogsService.getQueriedBlogs(this.searchQuery)
      .subscribe(result => {
          if (!result.success) {
            this.flashMessage.show(
              result.message,
              {
                cssClass: 'alert-danger',
                timeout: 3000
              });
            this.router.navigate(['/not-found']);
          } else {
            this.blog = result.data[0];
          }
        },
        (error) => {
          this.flashMessage.show(
            error,
            {
              cssClass: 'alert-danger',
              timeout: 3000
            });
        }
      );
  }

  onCancelDelete() {
    this.router.navigate(['/blogs/ch/list-blogs']);
  }

  onConfirmDelete() {
    this.blogsService.deleteBlog(this._id)
      .subscribe(result => {
        console.log(result);
          if (!result.success) {
            this.flashMessage.show(
              result.message,
              {
                cssClass: 'alert-danger',
                timeout: 3000
              });
          } else {
            this.flashMessage.show(
              result.message,
              {
                cssClass: 'alert-success',
                timeout: 2000
              });
          }
        }, (error) => {
          this.flashMessage.show(
            error,
            {
              cssClass: 'alert-danger',
              timeout: 3000
            });
        }
      );
    this.router.navigate(['/blogs/ch/list-blogs']);
  }
}
