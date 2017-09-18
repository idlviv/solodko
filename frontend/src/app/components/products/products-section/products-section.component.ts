import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from '../../../interfaces/i-product';
import {ProductService} from '../../../services/product.service';
import {FlashMessagesService} from 'angular2-flash-messages';
declare const $: any;

@Component({
  selector: 'app-products-section',
  templateUrl: 'products-section.component.html',
  styleUrls: ['products-section.component.css']
})
export class ProductsSectionComponent implements OnInit {
  products: IProduct[];
  chosenProduct: IProduct;

  constructor(
    private route: ActivatedRoute,
    // private productService: ProductService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        data => {
          this.products = data.products;
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

  onImageClick(product: IProduct) {
    this.chosenProduct = product;
    $('#modalImg').modal('show');
  }
}
