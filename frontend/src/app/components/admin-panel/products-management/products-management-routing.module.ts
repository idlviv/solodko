// import { Routes, RouterModule } from '@angular/router';
// import { NgModule } from '@angular/core';
//
// import {Page404Component} from '../../shared/page404/page404.component';
// import {ProductsManagementComponent} from './products-management.component';
// import {EditProductComponent} from './edit-product/edit-product.component';
// // import {ProductsManagementSubmenuComponent} from './products-management-submenu/products-management-submenu.component';
// import {AddProductComponent} from './add-product/add-product.component';
// import {AuthAdminGuard} from '../../../guards/auth-admin.guard';
// import {AuthManagerGuard} from '../../../guards/auth-manager.guard';
//
// const productsRoutes: Routes = [
//   {
//     path: 'products-management',
//     // canActivateChild: [AuthManagerGuard],
//     component: ProductsManagementComponent,
//     children: [
//       // {
//       //   path: 'start',
//       //   outlet: 'productsManagementSubmenu',
//       //   component: ProductsManagementSubmenuComponent,
//       // },
//       {
//         path: 'edit-product',
//         component: EditProductComponent,
//       },
//       {
//         path: 'add-product',
//         component: AddProductComponent,
//       },
//       {
//         path: '**',
//         component: Page404Component
//       },
//
//     ],
//   },
// ];
//
// @NgModule({
//   imports: [
//     RouterModule.forChild(
//       productsRoutes
//     )],
//   exports: [RouterModule]
// })
//
// export class ProductsManagementRoutingModule{}
