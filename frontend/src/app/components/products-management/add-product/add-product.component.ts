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
  category0: any;
  category1: any;
  catalog: ICatalog[];
  catalogCategory1: any;
  isCategory1: boolean = false;
  freeItemNumber: any;
  itemNumberPrefix: any;
  itemNumbersAll: any;
  isItemNumberInputDisabled: any = true;
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

  itemNumberInputEnable() {
    this.isItemNumberInputDisabled = !this.isItemNumberInputDisabled;
  }

  onSelectCategory0(event) {
    this.itemNumbersAll = [];
    for (let i = 0; i < this.catalog.length; i++) {
      if (this.catalog[i].category0.name === event.srcElement.value) {

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
          this.catalogCategory1 = this.catalog[i].category0.category1;
          this.isCategory1 = true;
        } else {
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
