webpackJsonp(["products.module"],{

/***/ "../../../../../src/app/components/products/products-detail/products-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/products-detail/products-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  products-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/products/products-detail/products-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsDetailComponent = (function () {
    function ProductsDetailComponent() {
    }
    ProductsDetailComponent.prototype.ngOnInit = function () {
    };
    return ProductsDetailComponent;
}());
ProductsDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products-detail',
        template: __webpack_require__("../../../../../src/app/components/products/products-detail/products-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products/products-detail/products-detail.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductsDetailComponent);

//# sourceMappingURL=products-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products-list/products-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-text {\r\n  font-size: .85rem;\r\n}\r\n\r\n.card-title {\r\n  text-transform: capitalize;\r\n}\r\n\r\n.card {\r\n  margin-bottom: 2rem;\r\n  border: 0;\r\n}\r\n\r\n.card-title {\r\n  min-height: 4rem;\r\n  /*padding-bottom: 0.5rem;*/\r\n  text-align: center;\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .card-title {\r\n    margin-bottom: 0;\r\n  }\r\n  .item-text {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .card-title {\r\n    padding-bottom: 0.5rem;\r\n  }\r\n  .item-text {\r\n    min-height: 8rem;\r\n    padding-bottom: 0.5rem;\r\n  }\r\n  .album {\r\n    min-height: 28rem;\r\n  }\r\n}\r\n\r\n.item-text {\r\n  /*min-height: 8rem;*/\r\n  /*padding-bottom: 0.5rem;*/\r\n  text-align: justify;\r\n}\r\n\r\n.album {\r\n  /*min-height: 28rem;*/\r\n  padding-bottom: 0.5rem;\r\n  background-color: #f7f7f7;\r\n}\r\n\r\n.item-info-title {\r\n  font-size: .65rem;\r\n  padding-bottom: 0;\r\n  margin-bottom: 0;\r\n  text-align: right;\r\n}\r\n\r\n.item-info-value {\r\n  font-size: .85rem;\r\n  font-weight: 500;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/products-list/products-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row\">-->\r\n  <!--<div class=\"col-lg-3 col-md-4 col-6\" *ngFor=\"let product of submenuList\">-->\r\n    <!--<div>{{product.description}}</div>-->\r\n    <!--<hr>-->\r\n    <!--<img src={{product.mainImgSrc[0]}} class=\"img-fluid\">-->\r\n    <!--<hr>-->\r\n    <!--<a [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"-->\r\n       <!--[routerLink]=\"['/products', {outlets: {primary: 'category/' + category0 + '/' + product.name,-->\r\n      <!--productsSubmenu:  'category/' + category0 + '/' + product.name}}]\">{{product.name}}</a>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n\r\n<div class=\"row\">\r\n  <div *ngFor=\"let product of submenuList\" class=\"col-lg-3 col-md-4 col-sm-6 col-12\">\r\n    <app-item [product]=\"product\" [parentComponentLink]=\"[\r\n    '/products/ch', {outlets: {primary: 'category/' + category0 + '/' + product.name,\r\n      productsSubmenu:  'category/' + category0 + '/' + product.name}}\r\n      ]\"></app-item>\r\n  </div>\r\n</div>\r\n\r\n<!--<div class=\"row\">-->\r\n  <!--<div class=\"col-lg-3 col-md-4 col-6\" *ngFor=\"let submenuItem of submenuList\">-->\r\n    <!--<div class=\"card\">-->\r\n      <!--<div class=\"album\">-->\r\n        <!--<img class=\"card-img-top\" src=\"{{product.mainImgSrc[0]}}\" alt=\"Зображення\">-->\r\n        <!--<div class=\"card-body\">-->\r\n          <!--<h4 class=\"card-title\">{{product.name}}</h4>-->\r\n          <!--<p class=\"card-text item-text text-muted\">{{product.itemDescription}}</p>-->\r\n          <!--&lt;!&ndash;<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>&ndash;&gt;-->\r\n    <!---->\r\n          <!--<p class=\"card-text item-info-title text-muted\">Артикул-->\r\n            <!--<span class=\"item-info-value\">{{product.itemNumber}}</span>-->\r\n          <!--</p>-->\r\n          <!--<p class=\"card-text item-info-title text-muted\">-->\r\n            <!--Висота x Ширина-->\r\n            <!--<span class=\"item-info-value\">{{product.size.height}}</span>-->\r\n            <!--х-->\r\n            <!--<span class=\"item-info-value\">{{product.size.width}}</span>-->\r\n            <!--см-->\r\n          <!--</p>-->\r\n    <!---->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>  -->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/products/products-list/products-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_catalog_service__ = __webpack_require__("../../../../../src/app/services/catalog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsListComponent = (function () {
    function ProductsListComponent(route, router, productService, flashMessage, appComponent, catalogService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.flashMessage = flashMessage;
        this.appComponent = appComponent;
        this.catalogService = catalogService;
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.category0 = params.category0;
            _this.category1 = params.category1;
            _this.submenuList = _this.catalogService.getQueriedCatalog(params).category0.category1;
        }, function (error) {
            _this.flashMessage.show(error, {
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
    };
    return ProductsListComponent;
}());
ProductsListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products-list',
        template: __webpack_require__("../../../../../src/app/components/products/products-list/products-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products/products-list/products-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_catalog_service__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_catalog_service__["a" /* CatalogService */]) === "function" && _f || Object])
], ProductsListComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=products-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_component__ = __webpack_require__("../../../../../src/app/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_section_products_section_component__ = __webpack_require__("../../../../../src/app/components/products/products-section/products-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_list_products_list_component__ = __webpack_require__("../../../../../src/app/components/products/products-list/products-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_page404_page404_component__ = __webpack_require__("../../../../../src/app/components/shared/page404/page404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_submenu_products_submenu_component__ = __webpack_require__("../../../../../src/app/components/products/products-submenu/products-submenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_product_resolver_service__ = __webpack_require__("../../../../../src/app/services/product-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var productsRoutes = [
    {
        path: 'ch',
        component: __WEBPACK_IMPORTED_MODULE_2__products_component__["a" /* ProductsComponent */],
        children: [
            {
                path: 'start/:category0/:category1',
                component: __WEBPACK_IMPORTED_MODULE_4__products_list_products_list_component__["a" /* ProductsListComponent */],
            },
            {
                path: 'category/:category0/:category1',
                component: __WEBPACK_IMPORTED_MODULE_3__products_section_products_section_component__["a" /* ProductsSectionComponent */],
                resolve: { products: __WEBPACK_IMPORTED_MODULE_7__services_product_resolver_service__["a" /* ProductResolverService */] }
            },
            {
                path: 'category/:category0/:category1',
                outlet: 'productsSubmenu',
                component: __WEBPACK_IMPORTED_MODULE_6__products_submenu_products_submenu_component__["a" /* ProductsSubmenuComponent */],
            },
            {
                path: '**',
                component: __WEBPACK_IMPORTED_MODULE_5__shared_page404_page404_component__["a" /* Page404Component */]
            },
        ],
    },
];
var ProductsRoutingModule = (function () {
    function ProductsRoutingModule() {
    }
    return ProductsRoutingModule;
}());
ProductsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* RouterModule */].forChild(productsRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* RouterModule */]]
    })
], ProductsRoutingModule);

//# sourceMappingURL=products-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products-section/products-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/products-section/products-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div *ngFor=\"let product of products\" class=\"col-lg-3 col-md-4 col-sm-6 col-12\">\r\n    <app-item [product]=\"product\" (imageClick)=\"onImageClick(product)\"></app-item>\r\n  </div>\r\n  <!--<app-modal-img (imageClick)=\"onImageClick(product)\"></app-modal-img>-->\r\n  <app-modal-img [product]=\"chosenProduct\"></app-modal-img>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/products/products-section/products-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsSectionComponent = (function () {
    function ProductsSectionComponent(route, 
        // private productService: ProductService,
        flashMessage) {
        this.route = route;
        this.flashMessage = flashMessage;
    }
    ProductsSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.products = data.products;
        }, function (error) {
            _this.flashMessage.show(error, {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        });
    };
    ProductsSectionComponent.prototype.onImageClick = function (product) {
        this.chosenProduct = product;
        $('#modalImg').modal('show');
    };
    return ProductsSectionComponent;
}());
ProductsSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products-section',
        template: __webpack_require__("../../../../../src/app/components/products/products-section/products-section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products/products-section/products-section.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], ProductsSectionComponent);

var _a, _b;
//# sourceMappingURL=products-section.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products-submenu/products-submenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*li.active {*/\r\n  /*!*border-bottom: 2px #0000ff solid;*!*/\r\n  /*font-weight: bold;*/\r\n/*}*/\r\n\r\n.button-root {\r\n  border-bottom: 2px lightslategray solid;\r\n  font-weight: 200;\r\n}\r\n\r\n.button-root::after {\r\n  font-family: \"Material Icons\";\r\n  content: \"play_arrow\";\r\n  text-transform: lowercase;\r\n  font-size: 1rem;\r\n  vertical-align: middle;\r\n  line-height: 1.35rem;\r\n\r\n}\r\n\r\n.button-secondary {\r\n  /*border-bottom: 2px lightslategray solid*/\r\n}\r\n\r\n.button-secondary:hover {\r\n  /*border-bottom: 2px #0000ff solid;*/\r\n  background: lightslategray;\r\n  color: #fff;\r\n}\r\n\r\n.button-secondary.active {\r\n  /*border-bottom: 2px #0000ff solid;*/\r\n  /*background: transparent;*/\r\n  /*color: #fff*;*/\r\n  border-bottom: 2px darkslategrey solid;\r\n}\r\n\r\nbutton.active {\r\n  font-weight: 300;\r\n}\r\n\r\n.button-row {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n  height: 4.5rem;\r\n  /*width: 20rem;*/\r\n  /*float: left;*/\r\n  /*display: inline-block;*/\r\n  /*align-items: center;*/\r\n  /*justify-content: space-around;*/\r\n}\r\n\r\n.navbar-nav {\r\n  display: block;\r\n}\r\n\r\n.nav-item-width {\r\n  /*display: block;*/\r\n  float: left;\r\n  /*padding: 0 .75rem;*/\r\n  /*width: 200px;*/\r\n  /*height: 1.35rem;*/\r\n  /*line-height: 1.35rem;*/\r\n  /*font-size: 1rem;*/\r\n  /*vertical-align: middle;*/\r\n  /*padding-top: 0.1rem;*/\r\n  /*padding-bottom: 0.3rem;*/\r\n  white-space: nowrap;\r\n  /*border: 1px solid transparent;*/\r\n  width: 12rem;\r\n  /*border-radius: 0;*/\r\n}\r\n\r\n.button-container {\r\n  position: relative;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/products-submenu/products-submenu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light navbar-width\">\r\n\r\n  <a class=\"navbar-brand\"\r\n     [routerLink]=\"['/products/ch', {outlets: {primary: submenuList?\r\n            'start/' + category0 + '/main': 'category/'+ category0 +'/noSubCategories',\r\n              productsSubmenu:  'category/' + category0 + '/main'}}]\">\r\n    <span><i [ngClass]=\"category0Icon\"></i></span>\r\n    {{category0}}</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav\">\r\n\r\n      <div class=\"button-container\">\r\n\r\n        <li class=\"nav-item nav-item-width\"  *ngFor=\"let submenuItem of submenuList\"\r\n            [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n\r\n          <a class=\"nav-link\"  [routerLink]=\"['/products/ch', {outlets: {primary: 'category/' + category0 + '/' + submenuItem.name,\r\n            productsSubmenu:  'category/' + category0 + '/' + submenuItem.name}}]\">\r\n            <i [ngClass]=\"submenuItem.icon\"></i> {{submenuItem.name}}</a>\r\n        </li>\r\n\r\n      </div>\r\n\r\n      <!--<li class=\"nav-item nav-item-width\"  *ngFor=\"let submenuItem of submenuList\"-->\r\n          <!--[routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n        <!--<a class=\"nav-link\"  [routerLink]=\"['/products', {outlets: {primary: 'category/' + category0 + '/' + submenuItem.name,-->\r\n            <!--productsSubmenu:  'category/' + category0 + '/' + submenuItem.name}}]\">{{submenuItem.name}}</a>-->\r\n      <!--</li>-->\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/products/products-submenu/products-submenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsSubmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_url_serializer_service__ = __webpack_require__("../../../../../src/app/services/url-serializer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_catalog_service__ = __webpack_require__("../../../../../src/app/services/catalog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProductsSubmenuComponent = (function () {
    function ProductsSubmenuComponent(productService, router, route, customUrlSerializer, flashMessage, appComponent, catalogService) {
        this.productService = productService;
        this.router = router;
        this.route = route;
        this.customUrlSerializer = customUrlSerializer;
        this.flashMessage = flashMessage;
        this.appComponent = appComponent;
        this.catalogService = catalogService;
        this.prop1 = true;
        this.prop2 = true;
    }
    ProductsSubmenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localCatalog = this.catalogService.getCatalog();
        this.route.params
            .subscribe(function (params) {
            _this.category0 = params.category0;
            for (var i = 1; i < _this.localCatalog.length; i++) {
                if (_this.localCatalog[i].category0.name === _this.category0) {
                    // this.category0 = this.localCatalog
                }
            }
            _this.category1 = params.category1;
            _this.category0Icon = _this.catalogService.getQueriedCatalog(params).category0.icon;
            _this.submenuList = _this.catalogService.getQueriedCatalog(params).category0.category1;
            console.log('this.submenuList', _this.submenuList);
            console.log('this.category0Icon', _this.category0Icon);
        }, function (error) {
            _this.flashMessage.show(error, {
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
    };
    return ProductsSubmenuComponent;
}());
ProductsSubmenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products-submenu',
        template: __webpack_require__("../../../../../src/app/components/products/products-submenu/products-submenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products/products-submenu/products-submenu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_url_serializer_service__["a" /* MyUrlSerializer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_url_serializer_service__["a" /* MyUrlSerializer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_catalog_service__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_catalog_service__["a" /* CatalogService */]) === "function" && _g || Object])
], ProductsSubmenuComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=products-submenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-submenu {\r\n  padding-bottom: 1rem;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-submenu\">\r\n\r\n    <router-outlet name=\"productsSubmenu\"></router-outlet>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/components/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products/products.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductsComponent);

//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_component__ = __webpack_require__("../../../../../src/app/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_routing_module__ = __webpack_require__("../../../../../src/app/components/products/products-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_section_products_section_component__ = __webpack_require__("../../../../../src/app/components/products/products-section/products-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_list_products_list_component__ = __webpack_require__("../../../../../src/app/components/products/products-list/products-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_detail_products_detail_component__ = __webpack_require__("../../../../../src/app/components/products/products-detail/products-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_submenu_products_submenu_component__ = __webpack_require__("../../../../../src/app/components/products/products-submenu/products-submenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../src/app/components/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import {MdButtonModule} from '@angular/material';
var ProductsModule = (function () {
    function ProductsModule() {
    }
    return ProductsModule;
}());
ProductsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__products_routing_module__["a" /* ProductsRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__products_section_products_section_component__["a" /* ProductsSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_5__products_list_products_list_component__["a" /* ProductsListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__products_detail_products_detail_component__["a" /* ProductsDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_7__products_submenu_products_submenu_component__["a" /* ProductsSubmenuComponent */],
        ],
        providers: []
    })
], ProductsModule);

//# sourceMappingURL=products.module.js.map

/***/ })

});
//# sourceMappingURL=products.module.chunk.js.map