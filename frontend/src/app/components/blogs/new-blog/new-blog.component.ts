import { Component, OnInit } from '@angular/core';
import {BlogsService} from '../../../services/blogs.service';
import {AuthService} from '../../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../../services/validate.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {IBlog} from '../../../interfaces/i-blog';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss']
})
export class NewBlogComponent implements OnInit {
  blogs: IBlog[];
  blogForm: FormGroup;
  loggedUser: any;

  constructor(
    private blogsService: BlogsService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
  ) {}

  ngOnInit() {
    this.blogForm = new FormGroup({
        title: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
          Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
        ]),
        body: new FormGroup({
          mainImage: new FormControl('', [
            Validators.required,
          ]),
          mainText: new FormControl('', [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(90),
          ]),
          components: new FormArray([
            this.initComponents()
          ]),
          blocks: new FormGroup({
            image: new FormControl('', []),
            text: new FormControl('', [
              Validators.minLength(4),
              Validators.maxLength(500),
            ]),
          }),
        }),
        showOnMainPage: new FormControl('', []),
      },
    );

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

  addComponent() {
    const control = <FormArray>this.blogForm.get('body').get('components');
    console.log('control', control);
    control.push(this.initComponents());
  }

  removeComponent(i: number) {
    const control = <FormArray>this.blogForm.get('body').get('components');
    control.removeAt(i);
  }

  onBlogSubmit() {
    this.addComponent();
    if (!this.blogForm.value.showOnMainPage) {
      this.blogForm.value.showOnMainPage = false;
    }
    const newBlog: IBlog = {
      title: this.blogForm.value.title,
      body: {
        mainImage: this.blogForm.get('body').get('mainImage').value,
        mainText: this.blogForm.get('body').get('mainText').value,
        components: {
          material: this.blogForm.get('body').get('components').get('material').value,
          // quantity: this.blogForm.get('body').get('components').get('quantity').value,
          // unit: this.blogForm.get('body').get('components').get('unit').value,
        }
      },
      showOnMainPage: this.blogForm.value.showOnMainPage,
      createdBy_id: this.loggedUser._id
    };
    console.log('newBlog', newBlog);
    // this.blogsService.addBlog(newBlog)
    //   .subscribe(result => {
    //
    //     if (result.success) {
    //       this.blogForm.reset();
    //       this.flashMessage.show(
    //         result.message,
    //         {
    //           cssClass: 'alert-success',
    //           timeout: 2000
    //         });
    //     } else {
    //       this.flashMessage.show(
    //         result.message,
    //         {
    //           cssClass: 'alert-danger',
    //           timeout: 2000
    //         });
    //     }
    //   });
  }

}
