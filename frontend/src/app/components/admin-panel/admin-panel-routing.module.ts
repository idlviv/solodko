import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import {Page404Component} from '../shared/page404/page404.component';
// import {ProductsManagementComponent} from './products-management.component';
// import {EditProductComponent} from './products/edit-product/edit-product.component';
// import {ProductsManagementSubmenuComponent} from './products-management-submenu/products-management-submenu.component';
// import {AddProductComponent} from './products/add-product/add-product.component';
import {AuthAdminGuard} from '../../guards/auth-admin.guard';
import {AuthManagerGuard} from '../../guards/auth-manager.guard';
import {AdminPanelComponent} from './admin-panel.component';
import {AdminPanelSubmenuComponent} from './admin-panel-submenu/admin-panel-submenu.component';
import {ProductsManagementComponent} from './products-management/products-management.component';
import {AddProductComponent} from './products-management/add-product/add-product.component';
import {EditProductComponent} from './products-management/edit-product/edit-product.component';
// import {AddUserComponent} from './users-management/add-user/add-user.component';
import {SignupComponent} from '../users/login/signup/signup.component';

const adminRoutes: Routes = [
  {
    path: 'ch',
    canActivateChild: [AuthManagerGuard],
    component: AdminPanelComponent,
    children: [
      // {
      //   path: 'add-product/0',
      //   component: AddProductComponent,
      // },
      {
        path: 'add-product/:_id',
        component: AddProductComponent,
      },
      {
        path: 'edit-product',
        component: EditProductComponent,
      },
      // {
      //   path: 'add-user',
      //   // canActivate: [AuthAdminGuard],
      //   component: SignupComponent,
      // },
      {
        path: '',
        outlet: 'adminPanelSubmenu',
        component: AdminPanelSubmenuComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      adminRoutes
    )],
  exports: [RouterModule]
})

export class AdminPanelRoutingModule {}
