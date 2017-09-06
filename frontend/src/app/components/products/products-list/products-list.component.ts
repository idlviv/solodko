import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from '../../../interfaces/i-product';
import {ProductService} from '../../../services/product.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ICatalog, ISubmenuList} from '../../../interfaces/i-catalog';
import {AppComponent} from '../../../app.component';
import {CatalogService} from '../../../services/catalog.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: IProduct[];
  searchQuery: any;
  catalog: ICatalog[];
  category0: string;
  category1: string;
  submenuList: ISubmenuList[];

  constructor(
    private route: ActivatedRoute,
      private router: Router,
      private productService: ProductService,
      private flashMessage: FlashMessagesService,
      private appComponent: AppComponent,
      private catalogService: CatalogService,

  ) {}

  ngOnInit() {

    this.route.params
      .subscribe(params => {
          this.category0 = params.category0;
          this.category1 = params.category1;
          this.submenuList = this.catalogService.getQueriedCatalog(params);

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

    // this.route.params
    //   .switchMap(params => {
    //     this.category0 = params.category0;
    //     this.category1 = params.category1;
    //     return this.catalogService.getQueriedCatalog(params);
    //   })
    //   .subscribe(submenuList => this.submenuList = submenuList,
    //     (error) => {
    //       this.flashMessage.show(
    //         error,
    //         {
    //           cssClass: 'alert-danger',
    //           timeout: 3000
    //         });
    //       return false;
    //     });

  }

}
