import { Component, OnInit } from '@angular/core';
import {BlogsService} from '../../../services/blogs.service';
import {IBlog} from '../../../interfaces/i-blog';
import {ISearchQuery} from '../../../interfaces/i-searchQuery';
import {IBlogOptions} from '../../../interfaces/i-options';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss']
})
export class HomeBlogComponent implements OnInit {
  blogs: IBlog[];
  searchQuery: ISearchQuery;
  blogOptions: IBlogOptions;

  constructor(
    private blogsService: BlogsService,
  ) { }

  ngOnInit() {
    this.searchQuery = {
      type: 'object',
      query: {
        key: 'showOnMainPage',
        value: 'true'
      }
    };

    this.reloadBlogs();

    this.blogsService.getBlogOptions()
      .subscribe((blogOptions) => {
        this.blogOptions = blogOptions;
        this.blogOptions['mainPage'] = true;
        this.blogOptions['singlePostMode'] = false;
      });
  }

  reloadBlogs() {
    this.blogsService.getQueriedBlogs(this.searchQuery)
      .subscribe(blogs => {
          if (blogs.success) {
            this.blogs = blogs.data;
          }
        }
      );
  }

  onDelete() {
    this.reloadBlogs();
  }

}
