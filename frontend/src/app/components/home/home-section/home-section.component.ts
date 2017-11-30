import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {IProduct} from '../../../interfaces/i-product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {

  products: IProduct[];

  constructor(
    private productService: ProductService,
    private flashMessage: FlashMessagesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.route.data
      .subscribe(
        (data) => {

          // this.products = data.products.filter(
          //   (product) => {
          //     if (product.showOnMainPage) {
          //       return product;
          //     }
          //   });
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

}
