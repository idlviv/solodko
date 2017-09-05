import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {IProduct} from '../../../interfaces/i-product';

@Component({
  moduleId: module.id,
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  // providers: [ProductService],
  styleUrls: ['./edit-product.component.css']
})

export class EditProductComponent implements OnInit {

  products: IProduct[];
  isActive: Boolean = false;
  selectedRow: Number;
  isEditBtnShow: Boolean = true;
  // showAddProduct: Boolean = false;

  constructor(
    private productService: ProductService,
    private flashMessage: FlashMessagesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  onUpdateProducts() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(
        (products) => {
          this.products = products;
        },
        (error) => {
          this.flashMessage.show(
            error,
            {
              cssClass: 'alert-danger',
              timeout: 3000
            });
          return false;
        });
  }

  // addProductBtn() {
  //   this.addProduct = true;
  // }
  //
  // onClickCancelAddBtn(i, _id) {
  //   this.addProduct = false;
  //   // this.selectedRow = null;
  //   // this.isEditBtnShow = true;
  //   // this.getProducts();
  // }

  onClickEditBtn(i, _id) {
    this.selectedRow = i;
    this.isEditBtnShow = false;
    // this.addProduct = false;
  }

  onClickCancelEditBtn(i, _id) {
    this.selectedRow = null;
    this.isEditBtnShow = true;
    this.getProducts();
  }

  onClickDelBtn(i, _id) {
    this.selectedRow = null;
    this.isEditBtnShow = true;

    this.productService.deleteProduct(_id)
      .subscribe(
        data => {
          if (data.success) {
          this.flashMessage.show(
            'Delete successfully, Number Of Deleted Elements ' + data.numberOfDeletedElements.n,
            {
              cssClass: 'alert-success',
              timeout: 3000
            });
            this.getProducts();

            // this.router.navigate(['/profile']);
        } else {
          this.flashMessage.show(
            'Delete failed',
            {
              cssClass: 'alert-danger',
              timeout: 3000
            });
          // this.router.navigate(['/profile']);
        }
      },
        error => {
          if (error.status === 401) {
            this.flashMessage.show(
              'Please login',
              {
                cssClass: 'alert-danger',
                timeout: 3000
              });
            this.router.navigate(['/login']);
          }
        }
    );
  }

  onEditProductSubmit(product, i) {
    this.selectedRow = null;
    this.isEditBtnShow = true;

    this.productService.editProduct(product)
      .subscribe(
        data => {
          if (data.success) {
            this.flashMessage.show(
              'Edited successfully',
              {
                cssClass: 'alert-success',
                timeout: 3000
              });
            // this.router.navigate(['/profile']);
          } else {
            this.flashMessage.show(
              'Adding failed',
              {
                cssClass: 'alert-danger',
                timeout: 3000
              });
            // this.router.navigate(['/profile']);
          }
        },
        error => {
          if (error.status === 401) {
            this.flashMessage.show(
              'Please login',
              {
                cssClass: 'alert-danger',
                timeout: 3000
              });
            this.router.navigate(['/login']);
          }
        }
      );

  }
}
