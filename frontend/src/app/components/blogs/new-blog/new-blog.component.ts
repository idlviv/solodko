import { Component, OnInit } from '@angular/core';
import {BlogsService} from '../../../services/blogs.service';
import {AuthService} from '../../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {IBlog} from '../../../interfaces/i-blog';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss']
})

export class NewBlogComponent implements OnInit {
  blogs: IBlog[];
  blog: IBlog;
  blogForm: FormGroup;
  loggedUser: any;
  isNewPost = true;
  // edited_id: IBlog;

  constructor(
    private blogsService: BlogsService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {

    this.blogForm = new FormGroup({
        title: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
          Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ,.()\' ]+'),
        ]),
        body: new FormGroup({
          mainImage: new FormControl('', [
            Validators.required,
          ]),
          mainText: new FormControl('', [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(500),
          ]),
          components: new FormArray([
            // this.initComponents()
          ]),
          blocks: new FormArray([
            this.initBlocks()
          ]),
        }),
        showOnMainPage: new FormControl('', []),
      },
    );

    this.route.url
      .subscribe(url => {
        if (url[0].path === 'edit-blog') {
          this.isNewPost = false;
          this.route.params
            .flatMap((params) => {
              // this.edited_id = params._id;
              return this.blogsService.findBlogs({'_id': params._id});
            })
            .subscribe(result => {
              if (result.data) {
                this.blog = result.data[0];

                for (let i = 0; i < this.blog.body.components.length; i++) {
                  this.addComponent();
                }
                for (let i = 0; i < this.blog.body.blocks.length - 1; i++) {
                  this.addBlock();
                }
                this.blogForm.patchValue(result.data[0]);
              }
            });
        }
      });

    this.authService.getLoggedUser()
      .subscribe(user => this.loggedUser = user);

  }

  initComponents() {
    return new FormGroup({
      material: new FormControl('', []),
      quantity: new FormControl('', []),
      unit: new FormControl('', []),
    });
  }

  initBlocks() {
    return new FormGroup({
      image: new FormControl('', []),
      text: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(1000),
      ])
    });
  }
  addBlock() {
    const control = <FormArray>this.blogForm.get('body').get('blocks');
    control.push(this.initBlocks());
  }

  removeBlock(i: number) {
    const control = <FormArray>this.blogForm.get('body').get('blocks');
    control.removeAt(i);
  }

  addComponent() {
    const control = <FormArray>this.blogForm.get('body').get('components');
    control.push(this.initComponents());
  }

  removeComponent(i: number) {
    const control = <FormArray>this.blogForm.get('body').get('components');
    control.removeAt(i);
  }

  onBlogSubmit() {
    if (!this.blogForm.value.showOnMainPage) {
      this.blogForm.value.showOnMainPage = false;
    }
    this.blogForm.value['createdBy_id'] = this.loggedUser._id;

    if (this.isNewPost) {
      // new post
      this.blogsService.addBlog(this.blogForm.value)
        .subscribe(result => {
          if (result.success) {
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
    } else {
      // edit post
      const editedPost = this.blogForm.value;
      editedPost['_id'] = this.blog._id;
      this.blogsService.editBlog(this.blogForm.value)
        .subscribe(result => {
          if (result.success) {
            this.isNewPost = true;
            this.goBack();
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



  }

  goBack() {
    // this.router.navigate(['/blogs/ch/list-blogs']);
    this.location.back();
  }

}
