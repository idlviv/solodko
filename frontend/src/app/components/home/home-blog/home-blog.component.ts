import { Component, OnInit } from '@angular/core';
import {BlogsService} from '../../../services/blogs.service';
import {IBlog} from '../../../interfaces/i-blog';
import {ISearchQuery} from '../../../interfaces/i-searchQuery';
import {IBlogOptions} from '../../../interfaces/i-options';
import {AuthService} from '../../../services/auth.service';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../../interfaces/i-user';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss']
})
export class HomeBlogComponent implements OnInit {
  blogs: IBlog[];
  searchQuery: any;
  blogOptions: IBlogOptions;
  loggedUser: IUser;
  _id: string;

  constructor(
    private blogsService: BlogsService,
    private authService: AuthService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.authService.getLoggedUser()
      .subscribe(user => this.loggedUser = user);

    // this.searchQuery = {
    //   type: 'object',
    //   query: {
    //     key: 'showOnMainPage',
    //     value: 'true'
    //   }
    // };

    this.reloadBlogs(true);

    // this.blogsService.getBlogOptions()
    //   .subscribe((blogOptions) => {
    //     this.blogOptions = blogOptions;
    //     this.blogOptions['mainPage'] = true;
    //     this.blogOptions['singlePostMode'] = false;
    //   });
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
        this.blogOptions['singlePostMode'] = false;

        this.blogOptions['mainPage'] = true;
        this.searchQuery = {};

        console.log('this.searchQuery', this.searchQuery);

        return this.blogsService.findBlogs(this.searchQuery);
      })
      .subscribe(result => {
        console.log('home result', result);
        this.blogs = result.data;
      });
  }

  // reloadBlogs() {
  //   this.blogsService.getQueriedBlogs(this.searchQuery)
  //     .subscribe(blogs => {
  //         if (blogs.success) {
  //           this.blogs = blogs.data;
  //         }
  //       }
  //     );
  // }

  onDelete() {
    this.reloadBlogs(false);
  }

}
