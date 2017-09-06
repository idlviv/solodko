import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ICatalog} from '../../../interfaces/i-catalog';
import {MyUrlSerializer} from '../../../services/url-serializer.service';
import {ProductService} from '../../../services/product.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AppComponent} from '../../../app.component';
import {CatalogService} from '../../../services/catalog.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products-submenu',
  templateUrl: './products-submenu.component.html',
  styleUrls: ['./products-submenu.component.css']
})
export class ProductsSubmenuComponent implements OnInit {

  category0: string;
  category1: string;

  prop1 = true;
  prop2 = true;

  catalog: ICatalog[];

  submenuList: object[];

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private customUrlSerializer: MyUrlSerializer,
    private flashMessage: FlashMessagesService,
    private appComponent: AppComponent,
    private catalogService: CatalogService,
) { }

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

