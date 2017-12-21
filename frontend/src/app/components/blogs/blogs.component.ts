import { Component, OnInit } from '@angular/core';
import {BlogsService} from '../../services/blogs.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../services/validate.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  messageClass;
  message;
  newPost = false;
  loadingBlogs = false;
  blogForm: FormGroup;
  loggedUser: any;

  constructor(
    private blogsService: BlogsService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
  ) {}

  ngOnInit() {
    this.blogForm = new FormGroup({
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
  }

  onBlogSubmit() {


    console.log(this.loggedUser);
    this.blogsService.addBlog({
      title: this.blogForm.value.title,
      body: this.blogForm.value.body,
      createdBy: this.loggedUser.name + ' ' + this.loggedUser.surname,
    })
      .subscribe(
        res => console.log(res)
      );
  }

  newBlogForm() {
    this.newPost = true;
  }

  reloadBlogs() {
    this.loadingBlogs = true;
  }

  draftComment() {

  }

  addBlog() {
    this.blogsService.addBlog({
      title: 'Заголовок',
      body: 'Тіло',
      createdBy: 'Автор',
    })
      .subscribe(
        res => console.log(res)
      );
  }

}
