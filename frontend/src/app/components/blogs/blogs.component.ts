import { Component, OnInit } from '@angular/core';
import {BlogsService} from '../../services/blogs.service';

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

  constructor(private blogsService: BlogsService) {}

  ngOnInit() {
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
