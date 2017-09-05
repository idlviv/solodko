import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {ProductsComponent} from './products.component';
import {ProductsSectionComponent} from './products-section/products-section.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {Page404Component} from '../shared/page404/page404.component';
import {ProductsSubmenuComponent} from './products-submenu/products-submenu.component';
import {ProductResolverService} from '../../services/product-resolver.service';
import {CatalogResolverService} from '../../services/catalog-resolver.service';

const productsRoutes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: 'start/:category0/:category1',
        component: ProductsListComponent,
        // resolve: {products: ProductResolverService}
      },
      {
        path: 'category/:category0/:category1',
        component: ProductsSectionComponent,
        resolve: {products: ProductResolverService}
      },
      {
        path: 'category/:category0/:category1',
        outlet: 'productsSubmenu',
        component: ProductsSubmenuComponent,
      },
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
      productsRoutes
    )],
  exports: [RouterModule]
})

export class ProductsRoutingModule{}


