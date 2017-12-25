import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogsComponent} from './blogs.component';
import {BlogsRoutingModule} from './blogs-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { DeleteBlogComponent } from './delete-blog/delete-blog.component';

@NgModule({
  imports: [
    CommonModule,
    BlogsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    BlogsComponent,
    EditBlogComponent,
    ListBlogsComponent,
    DeleteBlogComponent,
  ],
  exports: [
  ]
})
export class BlogsModule { }
