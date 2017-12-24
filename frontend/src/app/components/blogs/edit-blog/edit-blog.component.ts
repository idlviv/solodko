import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {IUser} from '../../../interfaces/i-user';
import {IBlog} from '../../../interfaces/i-blog';
import {BlogsService} from '../../../services/blogs.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ActivatedRoute} from '@angular/router';
import {ISearchQuery} from '../../../interfaces/i-searchQuery';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {
  editBlogForm: FormGroup;
  loggedUser: IUser;
  blog: IBlog;
  searchQuery: ISearchQuery;
  _id: string;

  constructor(
    private authService: AuthService,
    private blogsService: BlogsService,
    private flashMessage: FlashMessagesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // creates form
    this.editBlogForm = new FormGroup({
        title: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
          Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
        ]),
        body: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(1000),
        ]),
      },
    );

    // gets logged user
    this.authService.getLoggedUser()
      .subscribe(user => this.loggedUser = user);

    // gets id of edited blog
    this.route.params
      .subscribe(
        (params) => {
          this._id = params._id;
          this.searchQuery = {
            type: 'object',
            query: {
                key: '_id',
              value: this._id
            }
          };

          // gets blog by _id
          this.blogsService.getQueriedBlogs(this.searchQuery)
            .subscribe(result => {
                this.blog = result.blogs[0];
              }
            );
        },
        (error) => {
          this.flashMessage.show(
            error,
            {
              cssClass: 'alert-danger',
              timeout: 3000
            });
          return false;
        });



  }
  onEditBlogSubmit() {
    this.searchQuery = {
      type: 'object',
      query: {
        key: '_id',
        value: this._id
      },
      data: this.blog,
    };
    console.log(this.searchQuery);
    this.blogsService.saveBlog(this.searchQuery)
      .subscribe(
        (result) => {
          this.flashMessage.show(
            result.message,
            {
              cssClass: 'alert-success',
              timeout: 3000
            });
        },
        (error) => {
          this.flashMessage.show(
            error.message,
            {
              cssClass: 'alert-danger',
              timeout: 3000
            });
        }
      );
  }

}
