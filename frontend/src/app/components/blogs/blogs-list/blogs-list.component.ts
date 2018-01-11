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
      .subscribe(
        (params) => {
          this.blogsService.getBlogOptions()
            .subscribe((blogOptions) => {
              this.blogOptions = blogOptions;
              this.blogOptions['mainPage'] = false;
              this._id = params._id;
              if (params._id === 'all') {
                this.searchQuery = {};
                this.blogOptions['singlePostMode'] = false;
              } else {
                this.searchQuery = {'_id': params._id};
                this.blogOptions['singlePostMode'] = true;
              }
            });


          this.blogsService.findBlogs(this.searchQuery)
            .subscribe(result => {
              this.blogs = result.data;
            });
        });


  }
}
