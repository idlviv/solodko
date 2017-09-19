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
import {localCatalog} from '../../../data/catalog';

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
  localCatalog: ICatalog[];

  category0Icon: string;
  subMenuList: object;

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
    this.localCatalog = this.catalogService.getCatalog();
    this.route.params
      .subscribe(params => {
        this.category0 = params.category0;
        for (let i=1; i < this.localCatalog.length; i++) {
          if (this.localCatalog[i].category0.name === this.category0) {
            // this.category0 = this.localCatalog

          }
        }
        this.category1 = params.category1;

        this.category0Icon = this.catalogService.getQueriedCatalog(params).category0.icon;
        this.subMenuList = this.catalogService.getQueriedCatalog(params).category0.category1;
          console.log('this.submenuList', this.subMenuList);
          console.log('this.category0Icon', this.category0Icon);
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

