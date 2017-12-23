import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {IUser} from '../../../interfaces/i-user';
import {IBlog} from '../../../interfaces/i-blog';
import {BlogsService} from '../../../services/blogs.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {
  editBlogForm: FormGroup;
  loggedUser: IUser;
  blog: IBlog;

  constructor(
    private authService: AuthService,
    private blogsService: BlogsService,
  ) { }

  ngOnInit() {
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

    this.authService.getLoggedUser()
      .subscribe(user => this.loggedUser = user);

    this.blogsService.getQueriedBlogs({'_id': '5a3e6ae5f578dd22a4eedf59'})
      .subscribe(blog => {
        this.blog = blog;
        console.log(blog);
      }
        );

  }


}
