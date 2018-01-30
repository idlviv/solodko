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
findOptions = {};

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
        return this.blogsService.getBlogOptions();
      })
      .flatMap((blogOptions) => {
        this.blogOptions = blogOptions;

        this.findOptions['options'] = [
          {$sort: {_id: -1}},
          {$addFields: {commentsLength: { $size: '$comments'} }},
          {$project: {comments: 0}}
          ];
        this.findOptions['options'].push({$project: {comments: 0}});


        this.blogOptions['mainPage'] = false;
        if (this._id === 'all' || this._id === undefined) {
          this.blogOptions['singlePostMode'] = false;
          this.findOptions['query'] = {};

          // this.searchQuery = {};
        } else {
          this.blogOptions['singlePostMode'] = true;
          this.findOptions['query'] = {_id: this._id};
          if (update) {
            this.findOptions['updateViews'] = this._id;
          }
        }
        return this.blogsService.findMongo(this.findOptions);
      })
      .subscribe(result => {
        this.blogs = result.data;
      });
  }

  reloadCommentsLength() {
    this.findOptions['query'] = {_id: this._id};
    this.findOptions['options'] = [{$project: {commentsLength: { $size: '$comments'} }}];
    this.blogsService.findMongo(this.findOptions)
      .subscribe(result => {
          this.blogs[0].commentsLength = result.data[0].commentsLength;
        });
  }

  onDeleteBlog() {
    this.reloadBlogs(false);
  }

  onPostOrDeleteComment() {
    this.reloadCommentsLength();
  }
}
