import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ValidateService} from '../../../../services/validate.service';
import {ProductService} from '../../../../services/product.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from '../../../../interfaces/i-product';
import {NgForm} from '@angular/forms';
import {CatalogService} from '../../../../services/catalog.service';
import {ICatalog, ICategory1} from '../../../../interfaces/i-catalog';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {emptyProduct} from '../../../../data/product';

@Component({
  moduleId: module.id,
  selector: 'app-add-product',
  templateUrl: 'add-product.component.html',
  styleUrls: ['add-product.component.css']
})

export class AddProductComponent implements OnInit {
  product: IProduct;
  // x: any;
  products$: Observable<IProduct[]>;
  category1List: ICategory1[];
  category1: any;
  catalog: ICatalog[];
  catalogCategory1: any;
  isNewProduct = false;
  isCategory1 = false;
  freeItemNumber: any;
  itemNumberPrefix: any;
  itemNumbersAll: any;
  isItemNumberInputDisabled: any = true;
  @Output() updateProducts = new EventEmitter();
  emptyProduct: IProduct = emptyProduct;
  // emptyProduct = {} as IProduct;

  constructor(
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
          this.isNewProduct = true;
          return Observable.of([this.emptyProduct]);
        }
        this.isNewProduct = false;
        return this.productService.getQueriedProducts(params);
      });

    this.products$.subscribe((products) => {
      this.product = products[0];
      this.category1List = this.catalogService.getCategory1List(products[0].category0);
      if (this.category1List) {
        this.isCategory1 = true;
      }
    });
  }

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
    this.itemNumbersAll = [];

    for (let i = 0; i < this.catalog.length; i++) {
      if (this.catalog[i].category0.name === value) {

        if (this.isNewProduct) {
          this.createItemNumber(i);
        }

        if (this.catalog[i].category0.category1) {
          this.category1List = this.catalog[i].category0.category1;
          this.isCategory1 = true;
          this.product.category1 = this.catalog[i].category0.category1[0].name;
        } else {
          this.isCategory1 = false;
          this.product.category1 = '';
          // const category1Element = document.querySelector('#category1');
          // category1Element.nodeValue = '';
        }
      }
    }
  }

  createItemNumber(i) {
    this.itemNumberPrefix = this.catalog[i].category0.itemNumberPrefix;

    this.productService.getQueriedProducts({'category0': this.catalog[i].category0.name})
      .map(
        item => {
          for (let j = 0; j < item.length; j++) {
            this.itemNumbersAll.push(+item[j].itemNumber.slice(1));
          }
          function compareNumeric(a, b) {
            if (a > b) { return 1; }
            if (a < b) { return -1; }
          }
          this.itemNumbersAll.sort(compareNumeric);

          for (let j = 0; j < this.itemNumbersAll.length; j++) {
            if (this.itemNumbersAll[j] !== j + 1) {
              return j + 1;
            }
          }
          return this.itemNumbersAll.length + 1;
        }
      )
      .subscribe(item => {
          let output = item.toString();
          while (output.length < 3) {
            output = '0' + output;
          }
          return this.product.itemNumber = this.itemNumberPrefix + output;
        }
      );
  }

  onAddProductSubmit(form: NgForm) {
    this.product.category1 = this.product.category1 || 'noSubCategories';
    if (!this.product.mainImgSrc[0]) {
      this.product.mainImgSrc = ['./assets/samples/240x180.png'];
    }
    // if (this.product.category1) {
    //   this.product = {
    //     _id: this.product._id,
    //     category0: form.value.category0,
    //     category1: form.value.category1,
    //     itemNumber: form.value.itemNumber,
    //     name: form.value.name,
    //     price: form.value.price || false,
    //     mainImgSrc: form.value.mainImgSrc || './assets/samples/200x300.png',
    //     itemDescription: form.value.itemDescription,
    //     showOnMainPage: form.value.showOnMainPage || false,
    //     discount: form.value.discount || false,
    //     size: {
    //       width: form.value.width || false,
    //       height: form.value.height || false
    //     },
    //   };
    // } else {
    //   this.product = {
    //     _id: this.product._id,
    //     category0: form.value.category0,
    //     category1: 'noSubCategories',
    //     itemNumber: form.value.itemNumber,
    //     name: form.value.name,
    //     price: form.value.price || false,
    //     mainImgSrc: form.value.mainImgSrc || './assets/samples/200x300.png',
    //     itemDescription: form.value.itemDescription,
    //     showOnMainPage: form.value.showOnMainPage || false,
    //     discount: form.value.discount || false,
    //     size: {
    //       width: form.value.width || false,
    //       height: form.value.height || false
    //     },
    //   };
    // }

    if (!this.validateService.validateProduct(this.product)) {
      this.flashMessage.show(
        'fill all fields',
        {
          cssClass: 'alert-danger',
          timeout: 3000
        });
      return false;
    }

    if (this.isNewProduct) {
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
              this.router.navigate(['/admin/ch', {outlets: {primary: 'add-product/new'}}]);
              this.updateProducts.emit();
            } else {
              console.log('add data', data);
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
    } else {
      this.productService.editProduct(this.product)
        .subscribe(
          data => {
            if (data.success) {
              this.flashMessage.show(
                'Edited successfully',
                {
                  cssClass: 'alert-success',
                  timeout: 3000
                });
              this.router.navigate(['/admin/ch', {outlets: {primary: 'edit-product'}}]);
              this.updateProducts.emit();
            } else {
              this.flashMessage.show(
                'Editing failed',
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

}
