import { Component, ViewChild, OnInit } from '@angular/core';
import {EditProductComponent} from './edit-product/edit-product.component';

@Component({
  moduleId: module.id,
  selector: 'app-products-management',
  templateUrl: './products-management.component.html',
  styleUrls: ['./products-management.component.css'],
})
export class ProductsManagementComponent implements OnInit {

  @ViewChild(EditProductComponent)
  private editProductComponent: EditProductComponent;

  constructor() { }

  ngOnInit() {
  }

  onUpdateProducts() {
    this.editProductComponent.onUpdateProducts();
  }
}
