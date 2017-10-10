import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// import {SharedModule} from '../../shared/shared.module';
// import {ProductsManagementRoutingModule} from './products-management-routing.module';
import {FormsModule} from '@angular/forms';
import {ProductsManagementComponent} from './products-management.component';
import {AddProductComponent} from './add-product/add-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';

@NgModule({
  imports: [
    CommonModule,
    // SharedModule,
    // ProductsManagementRoutingModule,
    FormsModule
  ],
  exports: [
    AddProductComponent,
    EditProductComponent,
  ],
  declarations: [
    ProductsManagementComponent,
    AddProductComponent,
    EditProductComponent,
  ]
})
export class ProductsManagementModule {}
