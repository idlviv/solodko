import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { Page404Component } from './components/shared/page404/page404.component';

import {AuthUserGuard} from './guards/auth-user.guard';
import {CartComponent} from './components/users/cart/cart.component';
import {BlogsComponent} from './components/blogs/blogs.component';
import {NoAuthGuard} from './guards/noAuth.guard';
import {SignupComponent} from './components/users/login/signup/signup.component';

const appRoutes: Routes = [
  // { path: 'home',
  //   loadChildren: './components/home/home.module#HomeModule'
  // },
  {
    path: 'products',
    loadChildren: './components/products/products.module#ProductsModule'
  },
  // {path: 'register', component: RegisterComponent, canActivate: [AuthAdminGuard]},
  {path: 'login', component: LoginComponent, canActivate: [NoAuthGuard]},
  // {path: 'add-user', component: SignupComponent},
  // {path: 'products-management',
  //   loadChildren: './components/products-management/products-management.module#ProductsManagementModule',
  //   },
  {path: 'profile', component: ProfileComponent, canActivate: [AuthUserGuard]},
  // {path: 'cart', component: CartComponent, canActivate: [AuthUserGuard]},
  {path: 'admin',
    loadChildren: './components/admin-panel/admin-panel.module#AdminPanelModule',
  },
  { path: 'blogs',
    loadChildren: './components/blogs/blogs.module#BlogsModule'},
  { path: 'not-found', component: Page404Component },
  { path: '', loadChildren: './components/home/home.module#HomeModule', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
