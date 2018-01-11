import { Component, OnInit } from '@angular/core';
import {BlogsService} from '../../../services/blogs.service';
import {AuthService} from '../../../services/auth.service';
import {IUser} from '../../../interfaces/i-user';
import {IBlog} from '../../../interfaces/i-blog';
import {ActivatedRoute} from '@angular/router';

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
          this._id = params._id;
          if (params._id === 'all') {
            this.searchQuery = {};
          } else {
            this.searchQuery = {'_id': params._id};
          }
          this.blogsService.findBlogs(this.searchQuery)
            .subscribe(result => {
              this.blogs = result.data;
            });
        });


  }

}
