import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { Page404Component } from './components/shared/page404/page404.component';

import {AuthUserGuard} from './guards/auth-user.guard';
import {CartComponent} from './components/users/cart/cart.component';
import {BlogComponent} from './components/blog/blog.component';
import {NoAuthGuard} from './guards/noAuth.guard';

const appRoutes: Routes = [
  // { path: 'home',
  //   loadChildren: './components/home/home.module#HomeModule'
  // },
  { path: 'products',
    loadChildren: './components/products/products.module#ProductsModule'
  },
  // {path: 'register', component: RegisterComponent, canActivate: [AuthAdminGuard]},
  {path: 'login', component: LoginComponent, canActivate: [NoAuthGuard]},
  // {path: 'products-management',
  //   loadChildren: './components/products-management/products-management.module#ProductsManagementModule',
  //   },
  {path: 'profile', component: ProfileComponent, canActivate: [AuthUserGuard]},
  {path: 'cart', component: CartComponent, canActivate: [AuthUserGuard]},
  {path: 'admin',
    loadChildren: './components/admin-panel/admin-panel.module#AdminPanelModule',
  },
  {path: 'blog', component: BlogComponent, canActivate: [AuthUserGuard]},
  // { path: 'home', redirectTo: '', pathMatch: 'full' },
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
