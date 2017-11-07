import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductsComponent} from './products.component';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductsSectionComponent} from './products-section/products-section.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductsDetailComponent} from './products-detail/products-detail.component';
import {ProductsSubmenuComponent} from './products-submenu/products-submenu.component';
import {SharedModule} from '../shared/shared.module';
// import {MdButtonModule} from '@angular/material';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsSectionComponent,
    ProductsListComponent,
    ProductsDetailComponent,
    ProductsSubmenuComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    // MdButtonModule
  ],


})
export class ProductsModule { }
