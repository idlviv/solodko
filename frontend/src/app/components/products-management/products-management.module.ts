import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {ProductsManagementComponent} from './products-management.component';
import {AddProductComponent} from './add-product/add-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {SharedModule} from '../shared/shared.module';
import {ProductsManagementRoutingModule} from './products-management-routing.module';
import { ProductsManagementSubmenuComponent } from './products-management-submenu/products-management-submenu.component';

@NgModule({
  declarations: [
    ProductsManagementComponent,
    AddProductComponent,
    EditProductComponent,
    ProductsManagementSubmenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsManagementRoutingModule,
    FormsModule
  ],
  exports: [],
  providers: []
})
export class ProductsManagementModule {}
