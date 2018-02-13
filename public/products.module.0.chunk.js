webpackJsonp(["products.module.0"],{

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ProductsDetailComponent = (function () {
    function ProductsDetailComponent() {
    }
    ProductsDetailComponent.prototype.ngOnInit = function () {
    };
    return ProductsDetailComponent;
}());
ProductsDetailComponent = __decorate([
    core_1.Component({
        selector: 'app-products-detail',
        template: __webpack_require__("../../../../../src/app/components/products/products-detail/products-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products/products-detail/products-detail.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductsDetailComponent);
exports.ProductsDetailComponent = ProductsDetailComponent;
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var product_service_1 = __webpack_require__("../../../../../src/app/services/product.service.ts");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/index.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var catalog_service_1 = __webpack_require__("../../../../../src/app/services/catalog.service.ts");
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
    core_1.Component({
        selector: 'app-products-list',
        template: __webpack_require__("../../../../../src/app/components/products/products-list/products-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products/products-list/products-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _c || Object, typeof (_d = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _d || Object, typeof (_e = typeof app_component_1.AppComponent !== "undefined" && app_component_1.AppComponent) === "function" && _e || Object, typeof (_f = typeof catalog_service_1.CatalogService !== "undefined" && catalog_service_1.CatalogService) === "function" && _f || Object])
], ProductsListComponent);
exports.ProductsListComponent = ProductsListComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=products-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var products_component_1 = __webpack_require__("../../../../../src/app/components/products/products.component.ts");
var products_section_component_1 = __webpack_require__("../../../../../src/app/components/products/products-section/products-section.component.ts");
var products_list_component_1 = __webpack_require__("../../../../../src/app/components/products/products-list/products-list.component.ts");
var page404_component_1 = __webpack_require__("../../../../../src/app/components/shared/page404/page404.component.ts");
var products_submenu_component_1 = __webpack_require__("../../../../../src/app/components/products/products-submenu/products-submenu.component.ts");
var product_resolver_service_1 = __webpack_require__("../../../../../src/app/services/product-resolver.service.ts");
var productsRoutes = [
    {
        path: 'ch',
        component: products_component_1.ProductsComponent,
        children: [
            {
                path: 'start/:category0/:category1',
                component: products_list_component_1.ProductsListComponent,
            },
            {
                path: 'category/:category0/:category1',
                component: products_section_component_1.ProductsSectionComponent,
                resolve: { products: product_resolver_service_1.ProductResolverService }
            },
            {
                path: 'category/:category0/:category1',
                outlet: 'productsSubmenu',
                component: products_submenu_component_1.ProductsSubmenuComponent,
            },
            {
                path: '**',
                component: page404_component_1.Page404Component
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
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(productsRoutes)
        ],
        exports: [router_1.RouterModule]
    })
], ProductsRoutingModule);
exports.ProductsRoutingModule = ProductsRoutingModule;
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/index.js");
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
    core_1.Component({
        selector: 'app-products-section',
        template: __webpack_require__("../../../../../src/app/components/products/products-section/products-section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products/products-section/products-section.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _b || Object])
], ProductsSectionComponent);
exports.ProductsSectionComponent = ProductsSectionComponent;
var _a, _b;
//# sourceMappingURL=products-section.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products-submenu/products-submenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*li.active {*/\r\n  /*!*border-bottom: 2px #0000ff solid;*!*/\r\n  /*font-weight: bold;*/\r\n  /*}*/\r\n  .button-root {\r\n  border-bottom: 2px lightslategray solid;\r\n  font-weight: 200;\r\n}\r\n  .button-root::after {\r\n  font-family: \"Material Icons\";\r\n  content: \"play_arrow\";\r\n  text-transform: lowercase;\r\n  font-size: 1rem;\r\n  vertical-align: middle;\r\n  line-height: 1.35rem;\r\n\r\n}\r\n  .button-secondary {\r\n  /*border-bottom: 2px lightslategray solid*/\r\n}\r\n  .button-secondary:hover {\r\n  /*border-bottom: 2px #0000ff solid;*/\r\n  background: lightslategray;\r\n  color: #fff;\r\n}\r\n  .button-secondary.active {\r\n  /*border-bottom: 2px #0000ff solid;*/\r\n  /*background: transparent;*/\r\n  /*color: #fff*;*/\r\n  border-bottom: 2px darkslategrey solid;\r\n}\r\n  button.active {\r\n  font-weight: 300;\r\n}\r\n  .button-row {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n  height: 4.5rem;\r\n  /*width: 20rem;*/\r\n  /*float: left;*/\r\n  /*display: inline-block;*/\r\n  /*align-items: center;*/\r\n  /*justify-content: space-around;*/\r\n}\r\n  .navbar-nav {\r\n  display: block;\r\n}\r\n  .nav-item-width {\r\n  /*display: block;*/\r\n  float: left;\r\n  /*padding: 0 .75rem;*/\r\n  /*width: 200px;*/\r\n  /*height: 1.35rem;*/\r\n  /*line-height: 1.35rem;*/\r\n  /*font-size: 1rem;*/\r\n  /*vertical-align: middle;*/\r\n  /*padding-top: 0.1rem;*/\r\n  /*padding-bottom: 0.3rem;*/\r\n  white-space: nowrap;\r\n  /*border: 1px solid transparent;*/\r\n  width: 12rem;\r\n  /*border-radius: 0;*/\r\n}\r\n  .button-container {\r\n  position: relative;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/products-submenu/products-submenu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light navbar-width\">\r\n\r\n  <a class=\"navbar-brand\"\r\n     [routerLink]=\"['/products/ch', {outlets: {primary: submenuList?\r\n            'start/' + category0 + '/main': 'category/'+ category0 +'/noSubCategories',\r\n              productsSubmenu:  'category/' + category0 + '/main'}}]\">\r\n    <span><i [ngClass]=\"category0Icon\"></i></span>\r\n    {{category0}}</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav\">\r\n\r\n      <div class=\"button-container\">\r\n\r\n        <li class=\"nav-item nav-item-width\"  *ngFor=\"let submenuItem of submenuList\"\r\n            [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n\r\n          <a class=\"nav-link\"  [routerLink]=\"['/products/ch', {outlets: {primary: 'category/' + category0 + '/' + submenuItem.name,\r\n            productsSubmenu:  'category/' + category0 + '/' + submenuItem.name}}]\">\r\n            <i [ngClass]=\"submenuItem.icon\"></i> {{submenuItem.name}}</a>\r\n        </li>\r\n\r\n      </div>\r\n\r\n      <!--<li class=\"nav-item nav-item-width\"  *ngFor=\"let submenuItem of submenuList\"-->\r\n          <!--[routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n        <!--<a class=\"nav-link\"  [routerLink]=\"['/products', {outlets: {primary: 'category/' + category0 + '/' + submenuItem.name,-->\r\n            <!--productsSubmenu:  'category/' + category0 + '/' + submenuItem.name}}]\">{{submenuItem.name}}</a>-->\r\n      <!--</li>-->\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/products/products-submenu/products-submenu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var url_serializer_service_1 = __webpack_require__("../../../../../src/app/services/url-serializer.service.ts");
var product_service_1 = __webpack_require__("../../../../../src/app/services/product.service.ts");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/index.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var catalog_service_1 = __webpack_require__("../../../../../src/app/services/catalog.service.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
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
    core_1.Component({
        selector: 'app-products-submenu',
        template: __webpack_require__("../../../../../src/app/components/products/products-submenu/products-submenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products/products-submenu/products-submenu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof url_serializer_service_1.MyUrlSerializer !== "undefined" && url_serializer_service_1.MyUrlSerializer) === "function" && _d || Object, typeof (_e = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _e || Object, typeof (_f = typeof app_component_1.AppComponent !== "undefined" && app_component_1.AppComponent) === "function" && _f || Object, typeof (_g = typeof catalog_service_1.CatalogService !== "undefined" && catalog_service_1.CatalogService) === "function" && _g || Object])
], ProductsSubmenuComponent);
exports.ProductsSubmenuComponent = ProductsSubmenuComponent;
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ProductsComponent = (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    core_1.Component({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/components/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products/products.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var products_component_1 = __webpack_require__("../../../../../src/app/components/products/products.component.ts");
var products_routing_module_1 = __webpack_require__("../../../../../src/app/components/products/products-routing.module.ts");
var products_section_component_1 = __webpack_require__("../../../../../src/app/components/products/products-section/products-section.component.ts");
var products_list_component_1 = __webpack_require__("../../../../../src/app/components/products/products-list/products-list.component.ts");
var products_detail_component_1 = __webpack_require__("../../../../../src/app/components/products/products-detail/products-detail.component.ts");
var products_submenu_component_1 = __webpack_require__("../../../../../src/app/components/products/products-submenu/products-submenu.component.ts");
var shared_module_1 = __webpack_require__("../../../../../src/app/components/shared/shared.module.ts");
// import {MdButtonModule} from '@angular/material';
var ProductsModule = (function () {
    function ProductsModule() {
    }
    return ProductsModule;
}());
ProductsModule = __decorate([
    core_1.NgModule({
        declarations: [
            products_component_1.ProductsComponent,
            products_section_component_1.ProductsSectionComponent,
            products_list_component_1.ProductsListComponent,
            products_detail_component_1.ProductsDetailComponent,
            products_submenu_component_1.ProductsSubmenuComponent,
        ],
        imports: [
            common_1.CommonModule,
            shared_module_1.SharedModule,
            products_routing_module_1.ProductsRoutingModule,
        ],
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map

/***/ })

});
//# sourceMappingURL=products.module.0.chunk.js.map