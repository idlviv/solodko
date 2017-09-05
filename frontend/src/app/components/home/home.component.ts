import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  // products: Object;
  //
  // constructor(
  //   private productService: ProductService,
  //   private flashMessage: FlashMessagesService
  // ) { }
  //
  ngOnInit() {
  //   this.productService.getProducts()
  //     .subscribe(
  //       (products) => {
  //         this.products = products;
  //       },
  //       (error) => {
  //         this.flashMessage.show(
  //           error,
  //           {
  //             cssClass: 'alert-danger',
  //             timeout: 3000
  //           });
  //         return false;
  //       })
  }

}
