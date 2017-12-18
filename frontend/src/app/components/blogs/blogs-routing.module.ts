import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {BlogsComponent} from './blogs.component';
import {Page404Component} from '../shared/page404/page404.component';
import {AuthUserGuard} from '../../guards/auth-user.guard';

const blogsRoutes: Routes = [
  {
    path: 'newblog',
    component: BlogsComponent,
    canActivateChild: [AuthUserGuard],
    children: [
      // {
      //   path: 'start/:category0/:category1',
      //   component: ProductsListComponent,
      //   // resolve: {products: ProductResolverService}
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


