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
  processing: boolean = false;

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
    this.processing = true;
    this.disableBlogForm();
    this.blogsService.addBlog({
      title: this.blogForm.value.title,
      body: this.blogForm.value.body,
    })
      .subscribe(result => {
        this.processing = false;
        this.enableBlogForm();

        if (result.success) {
          this.newPost = false;
          this.blogForm.reset();
          this.flashMessage.show(
            result.message,
            {
              cssClass: 'alert-success',
              timeout: 2000
            });
        } else {
          this.flashMessage.show(
            result.message,
            {
              cssClass: 'alert-danger',
              timeout: 2000
            });
        }


      });
  }

  goBack() {
    this.newPost = false;
    this.blogForm.reset();
    // window.location.reload();
  }

  // Enable new blog form
  enableBlogForm() {
    this.blogForm.get('title').enable(); // Enable title field
    this.blogForm.get('body').enable(); // Enable body field
  }

  // Disable new blog form
  disableBlogForm() {
    this.blogForm.get('title').disable(); // Disable title field
    this.blogForm.get('body').disable(); // Disable body field
  }

  newBlogForm() {
    this.newPost = true;
  }

  reloadBlogs() {
    this.loadingBlogs = true;
  }

  draftComment() {

  }

  // addBlog() {
  //   this.blogsService.addBlog({
  //     title: 'Заголовок',
  //     body: 'Тіло',
  //     createdBy: 'Автор',
  //   })
  //     .subscribe(
  //       res => console.log(res)
  //     );
  // }

}
