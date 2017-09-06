import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ValidateService} from '../../../services/validate.service';
import {ProductService} from '../../../services/product.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {IProduct} from '../../../interfaces/i-product';
import {NgForm} from '@angular/forms';
import {CatalogService} from '../../../services/catalog.service';
import {ICatalog} from '../../../interfaces/i-catalog';

@Component({
  moduleId: module.id,
  selector: 'app-add-product',
  templateUrl: 'add-product.component.html',
  styleUrls: ['add-product.component.css']
})

export class AddProductComponent implements OnInit {
  product: IProduct;
  catalog: ICatalog[];
  catalogCategory1: any;

  @Output() updateProducts = new EventEmitter();

  constructor(
    private authService: AuthService,
    private validateService: ValidateService,
    private productService: ProductService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private catalogService: CatalogService,
  ) { }

  ngOnInit() {
    this.catalog = this.catalogService.getCatalog();
  }

  onSelectCategory0(event) {
    console.log(event.srcElement.value);
    for (let i = 0; i < this.catalog.length; i++) {
      if (this.catalog[i].category0.name === event.srcElement.value) {
        this.catalogCategory1 = this.catalog[i].category0.category1;
      }
    }
  }

  onAddProductSubmit(form: NgForm) {
console.log('form.value.showOnMainPage', form.value.showOnMainPage);
    const product: IProduct = {
      category0: form.value.category0,
      category1: form.value.category1,
      itemNumber: form.value.itemNumber,
      name: form.value.name,
      price: form.value.price || false,
      mainImgSrc: form.value.mainImgSrc || './assets/samples/200x300.png',
      itemDescription: form.value.itemDescription,
      showOnMainPage: form.value.showOnMainPage || false,
      discount: form.value.discount || false,
      size: {
        width: form.value.width || false,
        height: form.value.height || false
      },
    };
    console.log(product);

    if (!this.validateService.validateProduct(product)) {
      this.flashMessage.show(
        'fill all fields',
        {
          cssClass: 'alert-danger',
          timeout: 3000
        });
      return false;
    }

    this.productService.addProduct(product)
      .subscribe(
        data => {
          if (data.success) {
            this.flashMessage.show(
              'Added successfully',
              {
                cssClass: 'alert-success',
                timeout: 3000
              });
            this.updateProducts.emit();
          } else {
            this.flashMessage.show(
              'Adding failed',
              {
                cssClass: 'alert-danger',
                timeout: 3000
              });
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
            this.router.navigate(['/login'])
            ;
          }
        }
      );
  }

}
