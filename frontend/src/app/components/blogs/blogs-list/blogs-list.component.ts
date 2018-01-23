import { Component, OnInit } from '@angular/core';
import {BlogsService} from '../../../services/blogs.service';
import {AuthService} from '../../../services/auth.service';
import {IUser} from '../../../interfaces/i-user';
import {IBlog} from '../../../interfaces/i-blog';
import {ActivatedRoute} from '@angular/router';
import {IBlogOptions} from '../../../interfaces/i-options';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss'],
})

export class BlogsListComponent implements OnInit {
loggedUser: IUser;
blogs: IBlog[];
_id: string;
searchQuery: any;
blogOptions: IBlogOptions;

  constructor(
    private blogsService: BlogsService,
    private authService: AuthService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.authService.getLoggedUser()
      .subscribe(user => this.loggedUser = user);
    this.reloadBlogs(true);
  }

  reloadBlogs(update: boolean) {
    this.route.params
      .flatMap(params => {
        this._id = params._id;
        console.log('this._id', this._id);
        return this.blogsService.getBlogOptions();
      })
      .flatMap((blogOptions) => {
        this.blogOptions = blogOptions;

        this.blogOptions['mainPage'] = false;
        if (this._id === 'all' || this._id === undefined) {
          this.blogOptions['singlePostMode'] = false;
          this.searchQuery = {};
        } else {
          this.blogOptions['singlePostMode'] = true;
          this.searchQuery = {'_id': this._id, update};
        }

        return this.blogsService.findBlogs(this.searchQuery);
      })
      .subscribe(result => {
        this.blogs = result.data;
      });
  }

  onDelete() {
    this.reloadBlogs(false);
  }

  onPostComment() {
    this.reloadBlogs(false);
  }
}
