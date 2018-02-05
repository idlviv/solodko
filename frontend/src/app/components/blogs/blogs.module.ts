import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogsComponent} from './blogs.component';
import {BlogsRoutingModule} from './blogs-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { DeleteBlogComponent } from './delete-blog/delete-blog.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import {CommentComponent} from './comment/comment.component';
import {CommentFormComponent} from './comment-form/comment-form.component';
import {BlogComponent} from './blog/blog.component';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';

@NgModule({
  imports: [
    CommonModule,
    BlogsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  declarations: [
    BlogsComponent,
    EditBlogComponent,
    ListBlogsComponent,
    DeleteBlogComponent,
    NewBlogComponent,
    BlogsListComponent,
    BlogComponent,
    CommentComponent,
    CommentFormComponent
  ],
  exports: [
    BlogComponent,
    BlogsListComponent,
  ]
})
export class BlogsModule { }
