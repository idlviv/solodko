import { Component, OnInit } from '@angular/core';
import {BlogsService} from '../../../services/blogs.service';
import {AuthService} from '../../../services/auth.service';
import {IUser} from '../../../interfaces/i-user';
import {IBlog} from '../../../interfaces/i-blog';
import {ActivatedRoute} from '@angular/router';
import {IBlogOptions} from '../../../interfaces/i-options';
import {blogOptions} from '../../../data/options';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss']
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

    this.route.params
      .switchMap(params => {
        console.log('params._id', params._id);
        this._id = params._id;
        return this.blogsService.getBlogOptions();
      })
      .switchMap((blogOptions) => {
        this.blogOptions = blogOptions;
        console.log('this.blogOptions', this.blogOptions);

        this.blogOptions['mainPage'] = false;
        if (this._id === 'all') {
          this.blogOptions['singlePostMode'] = false;
          this.searchQuery = {};
        } else {
          this.blogOptions['singlePostMode'] = true;
          this.searchQuery = {'_id': this._id};
        }
        console.log('this.searchQuery', this.searchQuery);

        return this.blogsService.findBlogs(this.searchQuery);
      })
      .subscribe(result => {
        console.log('result', result);
        this.blogs = result.data;
      });
  }
}
