import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ValidateService} from '../../../../services/validate.service';
import {ProductService} from '../../../../services/product.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../../services/auth.service';
import {IProduct} from '../../../../interfaces/i-product';
import {NgForm} from '@angular/forms';
import {CatalogService} from '../../../../services/catalog.service';
import {ICatalog, ICategory1} from '../../../../interfaces/i-catalog';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {emptyProduct} from '../../../../data/product';
// import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'app-add-product',
  templateUrl: 'add-product.component.html',
  styleUrls: ['add-product.component.css']
})

export class AddProductComponent implements OnInit {
  product: IProduct;
  x: any;
  xx: any;
  products$: Observable<IProduct[]>;
  category1List$: Observable<ICategory1[]>;
  category1List: ICategory1[];
  // products: IProduct[];
  // category0: any;
  category1: any;
  catalog: ICatalog[];
  catalogCategory1: any;
  isCategory1: boolean = false;
  freeItemNumber: any;
  itemNumberPrefix: any;
  itemNumbersAll: any;
  isItemNumberInputDisabled: any = true;
  @Output() updateProducts = new EventEmitter();
  emptyProduct: IProduct = emptyProduct;
  // emptyProduct = {} as IProduct;

  constructor(
    // private authService: AuthService,
    private validateService: ValidateService,
    private productService: ProductService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute,
    private catalogService: CatalogService,
  ) { }

  ngOnInit() {
    this.catalog = this.catalogService.getCatalog();

    this.products$ = this.route.params
      .filter(params => params['_id'] !== undefined)
      .switchMap(params => {
        if (params._id === 'new') {
          // return this.productService.getQueriedProducts({});
          return Observable.of([this.emptyProduct]);
        }

        return this.productService.getQueriedProducts(params);
      })
      .map(products => {
        // this.onSelectCategory0(null, products[0].category0);
        console.log('swithMap product', products);

        return products;
    });

    this.products$.subscribe((products) => {
      this.product = products[0];
      this.category1List = this.catalogService.getCategory1List(products[0].category0);
      this.category1List$ = this.catalogService.getCategory1List$(products[0].category0);
      // this.searchForCategory0(this.product);
    });

  }

  // searhForCategory1(product: IProduct): string {
  //   let category1: string;
  //
  //   return category1;
  // }

  itemNumberInputEnable() {
    this.isItemNumberInputDisabled = !this.isItemNumberInputDisabled;
  }

  onSelectCategory0(event, val) {
    let value;
    if (val) {
      value = val;
    } else {
      value = event.srcElement.value;
    }
    console.log('value', value);
    this.itemNumbersAll = [];

    for (let i = 0; i < this.catalog.length; i++) {
      if (this.catalog[i].category0.name === value) {

        this.itemNumberPrefix = this.catalog[i].category0.itemNumberPrefix;
        let x = this.productService.getQueriedProducts(
          {'category0': this.catalog[i].category0.name});
        x
          .map(
            item => {
              for (let i = 0; i < item.length; i++) {
                this.itemNumbersAll.push(+item[i].itemNumber.slice(1));
              }
              console.log('not sorted', this.itemNumbersAll);
              function compareNumeric(a, b) {
                if (a > b) return 1;
                if (a < b) return -1;
              }
              this.itemNumbersAll.sort(compareNumeric);
              console.log('sorted', this.itemNumbersAll);

              for (let i = 0; i < this.itemNumbersAll.length; i++) {
                if (this.itemNumbersAll[i] !== i + 1) {
                  return i + 1;
                }
              }
              return this.itemNumbersAll.length + 1;
            }
          )
          .subscribe(item => {
            let output = item.toString();
              while (output.length < 3) {
                output = '0' + output;
                console.log(output);

              }
            return this.freeItemNumber = this.itemNumberPrefix + output;
          }
          );

        if (this.catalog[i].category0.category1) {
          console.log('true');
          // this.catalogCategory1 = this.catalog[i].category0.category1;
          this.category1List$ = Observable.of(this.catalog[i].category0.category1);
          this.isCategory1 = true;
          this.product.category1 = 'fghffhhhfhf';
        } else {
          console.log('false');

          this.isCategory1 = false;
        const category1Element = document.querySelector('#category1');
        category1Element.nodeValue = '';
        }
    }
    }

  }

  onAddProductSubmit(form: NgForm) {
    if (this.isCategory1) {
      this.product = {
        category0: form.value.category0,
        category1: form.value.category1,
        itemNumber: form.value.itemNumber,
        name: form.value.name,
        price: form.value.price || false,
        mainImgSrc: form.value.mainImgSrc || './assets/samples/240x180.png',
        itemDescription: form.value.itemDescription,
        showOnMainPage: form.value.showOnMainPage || false,
        discount: form.value.discount || false,
        size: {
          width: form.value.width || false,
          height: form.value.height || false
        },
      };
    } else {
      this.product = {
        category0: form.value.category0,
        category1: 'noSubCategories',
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
    }

    console.log(this.product);

    if (!this.validateService.validateProduct(this.product)) {
      this.flashMessage.show(
        'fill all fields',
        {
          cssClass: 'alert-danger',
          timeout: 3000
        });
      return false;
    }

    this.productService.addProduct(this.product)
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
