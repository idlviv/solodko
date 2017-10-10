import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { DashboardComponent } from './components/users/dashboard/dashboard.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { Page404Component } from './components/shared/page404/page404.component';

import {AuthAdminGuard} from './guards/auth-admin.guard';
import {AuthUserGuard} from './guards/auth-user.guard';
import {AuthManagerGuard} from './guards/auth-manager.guard';

const appRoutes: Routes = [
  { path: 'home',
    loadChildren: './components/home/home.module#HomeModule'
  },
  { path: 'products',
    loadChildren: './components/products/products.module#ProductsModule'
  },
  // {path: 'register', component: RegisterComponent, canActivate: [AuthAdminGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthUserGuard]},
  // {path: 'products-management',
  //   loadChildren: './components/products-management/products-management.module#ProductsManagementModule',
  //   },
  {path: 'profile', component: ProfileComponent, canActivate: [AuthUserGuard]},
  {path: 'admin',

    // component: AdminPanelComponent,
    // children: [
    //   {
    //     path: 'z',
    //     outlet: 'adminPanelSubmenu',
    //     component: DashboardComponent,
    //   },
    //   {
    //     path: 'z',
    //     component: ProfileComponent,
    //   },
    // ]
    loadChildren: './components/admin-panel/admin-panel.module#AdminPanelModule',
  },
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
