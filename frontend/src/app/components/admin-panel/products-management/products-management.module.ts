import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// import {SharedModule} from '../../shared/shared.module';
// import {ProductsManagementRoutingModule} from './products-management-routing.module';
import {FormsModule} from '@angular/forms';
import {ProductsManagementComponent} from './products-management.component';
import {AddProductComponent} from './add-product/add-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ProductsManagementComponent,
    AddProductComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    // SharedModule,
    // ProductsManagementRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    // AddProductComponent,
    // EditProductComponent,
  ],

})
export class ProductsManagementModule {}
