import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {BlogsComponent} from './blogs.component';
import {Page404Component} from '../shared/page404/page404.component';
import {AuthUserGuard} from '../../guards/auth-user.guard';
import {ListBlogsComponent} from './list-blogs/list-blogs.component';
import {EditBlogComponent} from './edit-blog/edit-blog.component';
import {DeleteBlogComponent} from './delete-blog/delete-blog.component';
import {NewBlogComponent} from './new-blog/new-blog.component';
import {BlogsListComponent} from './blogs-list/blogs-list.component';
import {PopupComponent} from '../shared/popup/popup.component';
import {AuthManagerGuard} from '../../guards/auth-manager.guard';

const blogsRoutes: Routes = [
  {
    path: 'ch',
    component: BlogsComponent,
    children: [
      {
        path: 'list-blogs',
        component: ListBlogsComponent,
        // resolve: {products: ProductResolverService}
      },
      {
        path: 'blogs-list/:_id',
        component: BlogsListComponent,
        // resolve: {products: ProductResolverService}
      },
      {
        path: 'new-blog',
        component: NewBlogComponent,
        canActivate: [AuthManagerGuard],
      },
      {
        path: 'edit-blog/:_id',
        component: NewBlogComponent,
        canActivate: [AuthManagerGuard],
      },
      // {
      //   path: 'delete-blog/:_id',
      //   component: PopupComponent,
      //   canActivate: [AuthManagerGuard],
      // },
      // {
      //   path: 'delete-blog/:_id',
      //   component: DeleteBlogComponent,
      // },
      {
        path: '**',
        component: Page404Component
      },
    ],

  },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      blogsRoutes
    )],
  exports: [RouterModule]
})

export class BlogsRoutingModule {}


