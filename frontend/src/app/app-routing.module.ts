import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductsManagementComponent } from './components/products-management/products-management.component';
import { RegisterComponent } from './components/users-management/register/register.component';
import { LoginComponent } from './components/users-management/login/login.component';
import { DashboardComponent } from './components/users-management/dashboard/dashboard.component';
import { ProfileComponent } from './components/users-management/profile/profile.component';
import { Page404Component } from './components/shared/page404/page404.component';

import {AuthGuard} from './guards/auth.guard';

const appRoutes: Routes = [
  { path: 'home',
    loadChildren: './components/home/home-routing.module#HomeRoutingModule'
  },
  { path: 'products',
    loadChildren: './components/products/products.module#ProductsModule'
  },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'products-management',
    loadChildren: './components/products-management/products-management.module#ProductsManagementModule',
    canActivate: [AuthGuard]},
  // {path: 'product-management', component:  ProductsManagementComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
