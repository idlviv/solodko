webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/home/home-routing.module": [
		"../../../../../src/app/components/home/home-routing.module.ts"
	],
	"./components/products-management/products-management.module": [
		"../../../../../src/app/components/products-management/products-management.module.ts"
	],
	"./components/products/products.module": [
		"../../../../../src/app/components/products/products.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_users_management_register_register_component__ = __webpack_require__("../../../../../src/app/components/users-management/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_users_management_login_login_component__ = __webpack_require__("../../../../../src/app/components/users-management/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_users_management_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/users-management/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_users_management_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/users-management/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_shared_page404_page404_component__ = __webpack_require__("../../../../../src/app/components/shared/page404/page404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: 'home',
        loadChildren: './components/home/home-routing.module#HomeRoutingModule'
    },
    { path: 'products',
        loadChildren: './components/products/products.module#ProductsModule'
    },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_users_management_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_users_management_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__components_users_management_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'products-management',
        loadChildren: './components/products-management/products-management.module#ProductsManagementModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    // {path: 'product-management', component:  ProductsManagementComponent, canActivate: [AuthGuard]},
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__components_users_management_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__components_shared_page404_page404_component__["a" /* Page404Component */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-banner{\r\n  height: 180px;\r\n  width: 100%;\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/main-banner.png") + ");\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<!--<div class=\"main-banner\"></div>-->\r\n\r\n\r\n<div class=\"container\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_catalog_service__ = __webpack_require__("../../../../../src/app/services/catalog.service.ts");
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



var AppComponent = (function () {
    function AppComponent(catalogService, flashMessage) {
        this.catalogService = catalogService;
        this.flashMessage = flashMessage;
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.catalogService.getCatalog()
        //   .subscribe(
        //       catalog => {
        //         console.log('app catalog ', catalog);
        //         return this.catalog = catalog
        //           ;},
        //       (error) => {
        //         this.flashMessage.show(
        //           error,
        //           {
        //             cssClass: 'alert-danger',
        //             timeout: 3000
        //           });
        //         return false;
        //       });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_catalog_service__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_catalog_service__["a" /* CatalogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    serverUrl: '/',
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_products_products_module__ = __webpack_require__("../../../../../src/app/components/products/products.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_module__ = __webpack_require__("../../../../../src/app/components/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_shared_shared_module__ = __webpack_require__("../../../../../src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_users_management_users_management_module__ = __webpack_require__("../../../../../src/app/components/users-management/users-management.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_products_management_products_management_module__ = __webpack_require__("../../../../../src/app/components/products-management/products-management.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_url_serializer_service__ = __webpack_require__("../../../../../src/app/services/url-serializer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_product_resolver_service__ = __webpack_require__("../../../../../src/app/services/product-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_catalog_service__ = __webpack_require__("../../../../../src/app/services/catalog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_8__components_products_products_module__["ProductsModule"],
            __WEBPACK_IMPORTED_MODULE_12__components_products_management_products_management_module__["ProductsManagementModule"],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_10__components_shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_11__components_users_management_users_management_module__["a" /* UsersManagementModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_10__components_shared_shared_module__["a" /* SharedModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__services_url_serializer_service__["a" /* MyUrlSerializer */],
            __WEBPACK_IMPORTED_MODULE_16__services_catalog_service__["a" /* CatalogService */],
            __WEBPACK_IMPORTED_MODULE_15__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_14__services_product_resolver_service__["a" /* ProductResolverService */],
            __WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_section_home_section_component__ = __webpack_require__("../../../../../src/app/components/home/home-section/home-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__side_menu_side_menu_component__ = __webpack_require__("../../../../../src/app/components/home/side-menu/side-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_product_resolver_service__ = __webpack_require__("../../../../../src/app/services/product-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var homeRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__home_section_home_section_component__["a" /* HomeSectionComponent */],
                resolve: { products: __WEBPACK_IMPORTED_MODULE_5__services_product_resolver_service__["a" /* ProductResolverService */] }
            },
            {
                path: '',
                outlet: 'sidemenu',
                component: __WEBPACK_IMPORTED_MODULE_3__side_menu_side_menu_component__["a" /* SideMenuComponent */]
            },
            {
                path: '**',
                component: __WEBPACK_IMPORTED_MODULE_2__home_section_home_section_component__["a" /* HomeSectionComponent */]
            },
            {
                path: '**',
                outlet: 'sidemenu',
                component: __WEBPACK_IMPORTED_MODULE_3__side_menu_side_menu_component__["a" /* SideMenuComponent */]
            }
        ]
    }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(homeRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home-section/home-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home-section/home-section.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron text-center\">\r\n  <div class=\"container\">\r\n    <h1 class=\"jumbotron-heading\">Album example</h1>\r\n    <p class=\"lead text-muted\">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>\r\n  </div>\r\n</section>\r\n<div class=\"row\">\r\n  <div *ngFor=\"let product of products\" class=\"col-lg-4 col-md-6 col-sm-6 col-12\">\r\n    <app-item [product]=\"product\"></app-item>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home-section/home-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeSectionComponent = (function () {
    function HomeSectionComponent(productService, flashMessage, route) {
        this.productService = productService;
        this.flashMessage = flashMessage;
        this.route = route;
    }
    HomeSectionComponent.prototype.ngOnInit = function () {
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
    return HomeSectionComponent;
}());
HomeSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-section',
        template: __webpack_require__("../../../../../src/app/components/home/home-section/home-section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home-section/home-section.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], HomeSectionComponent);

var _a, _b, _c;
//# sourceMappingURL=home-section.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.red {*/\r\n    /*background-color: red;*/\r\n    /*height: 100px;*/\r\n/*}*/\r\n\r\n/*.blue {*/\r\n    /*background-color: blue;*/\r\n    /*height: 100px;*/\r\n/*}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-9\">\r\n    <h1>Майстерня</h1>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div class=\"col-lg-3\">\r\n    <h2>Опис</h2>\r\n    <router-outlet name=\"sidemenu\"></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    // products: Object;
    //
    // constructor(
    //   private productService: ProductService,
    //   private flashMessage: FlashMessagesService
    // ) { }
    //
    HomeComponent.prototype.ngOnInit = function () {
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
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_section_home_section_component__ = __webpack_require__("../../../../../src/app/components/home/home-section/home-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__side_menu_side_menu_component__ = __webpack_require__("../../../../../src/app/components/home/side-menu/side-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_routing_module__ = __webpack_require__("../../../../../src/app/components/home/home-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_section_home_section_component__["a" /* HomeSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__side_menu_side_menu_component__["a" /* SideMenuComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__home_routing_module__["HomeRoutingModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
        ],
        exports: []
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/side-menu/side-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/side-menu/side-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <h3>Про майстерню творчості</h3>\r\n  <p>..</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/side-menu/side-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideMenuComponent = (function () {
    function SideMenuComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    // navigate(path) {
    //   console.log('path', path);
    //   console.log('this route ', this.route );
    //   this.router.navigate([{outlets: {primary: path, sidemenu: path}}],
    //     {relativeTo: this.route}
    //     );
    // }
    SideMenuComponent.prototype.ngOnInit = function () {
    };
    return SideMenuComponent;
}());
SideMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-side-menu',
        template: __webpack_require__("../../../../../src/app/components/home/side-menu/side-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/side-menu/side-menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], SideMenuComponent);

var _a, _b;
//# sourceMappingURL=side-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n  text-transform: capitalize;\r\n}\r\n\r\n@media (min-width: 991px) {\r\n  li {\r\n    border-bottom: 2px lightslategray solid\r\n  }\r\n\r\n  li.active  {\r\n    border-bottom: 2px darkslategrey solid;\r\n  }\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  li.active  {\r\n    font-weight: bold;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">Творча Майстерня</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\"  (click)=\"hide()\">\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/home']\">Головна</a></li>\r\n      <li *ngFor=\"let catalogItem of localCatalog\" class=\"nav-item\" [routerLinkActive]=\"['active']\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\"\r\n           [routerLink]=\"['/products', {outlets: {primary: catalogItem.category0.category1?\r\n            'start/'+ catalogItem.category0.name +'/main' : 'category/'+ catalogItem.category0.name +'/noSubCategories',\r\n           productsSubmenu: 'category/'+ catalogItem.category0.name +'/main'}}]\">\r\n          {{catalogItem.category0.name}}</a></li>\r\n    </ul>\r\n\r\n    <ul class=\"nav navbar-nav navbar-right\" (click)=\"hide()\">\r\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n\r\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/products-management',\r\n        {outlets: {primary: 'add-product', productsManagementSubmenu: 'start'}}]\">\r\n          Products Management</a></li>\r\n\r\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a></li>\r\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a></li>\r\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a></li>\r\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\">\r\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_catalog_service__ = __webpack_require__("../../../../../src/app/services/catalog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage, catalogService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.catalogService = catalogService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.localCatalog = this.catalogService.getCatalog();
    };
    NavbarComponent.prototype.hide = function () {
        if ($('.navbar-toggler').css('display') === 'block') {
            $('button.navbar-toggler').click();
        }
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('Logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_catalog_service__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_catalog_service__["a" /* CatalogService */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products-management/add-product/add-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n/*form.ng-invalid {*/\r\n  /*border-top: 5px solid #a94442; !* red *!*/\r\n/*}*/\r\n\r\n/*.left-span {*/\r\n  /*width: 120px;*/\r\n/*}*/\r\n\r\n/*.right-span {*/\r\n  /*width: 70px;*/\r\n/*}*/\r\n\r\n.input-group-sm {\r\n  padding: 0;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products-management/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Add product</h2>\r\n  <form (ngSubmit)=\"onAddProductSubmit(addProductForm); addProductForm.reset()\" #addProductForm=\"ngForm\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-md-4\" for=\"category0\">Категорія</label>\r\n            <select class=\"form-control form-control-sm custom-select col-md-8\"  id=\"category0\"\r\n                    required (change)=\"onSelectCategory0($event)\"\r\n                    [(ngModel)]=\"category0\" name=\"category0\">\r\n              <option *ngFor=\"let catalogItem of catalog; let i = index\" [value]=\"catalogItem.category0.name\">\r\n                {{catalogItem.category0.name}}</option>\r\n            </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n         <label class=\"col-md-4\" for=\"category1\">Підкатегорія</label>\r\n          <select class=\"form-control form-control-sm custom-select col-md-8\"  id=\"category1\"\r\n                  [required]=\"isCategory1\" [disabled]=\"!category0 || !isCategory1\"\r\n                  [(ngModel)]=\"category1\" name=\"category1\">\r\n            <option *ngFor=\"let catalogItem of catalogCategory1\" [value]=\"catalogItem.name\">\r\n              {{catalogItem.name}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"name\">Заголовок</label>\r\n          <input type=\"text\" ngModel name=\"name\" class=\"form-control form-control-sm col-md-8\" id=\"name\" required>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"mainImgSrc\">Image source</label>\r\n          <input type=\"text\" ngModel name=\"mainImgSrc\" class=\"form-control form-control-sm col-md-8\" id=\"mainImgSrc\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row form-group\">\r\n      <label class=\"col-md-2\" for=\"itemDescription\">Опис</label>\r\n      <textarea type=\"text\" ngModel name=\"itemDescription\" class=\"form-control form-control-sm col-md-10\"\r\n                id=\"itemDescription\" required=\"\" rows=\"2\"></textarea>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"itemNumber\">Артикул</label>\r\n          <div class=\"input-group input-group-sm col-md-8\">\r\n            <input type=\"text\" ngModel name=\"itemNumber\" class=\"form-control form-control-sm\"\r\n                   id=\"itemNumber\" required>\r\n            <span class=\"input-group-addon\">x0000</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"price\">Ціна</label>\r\n          <div class=\"input-group input-group-sm col-md-8\">\r\n            <input type=\"text\" ngModel name=\"price\" class=\"form-control form-control-sm\" id=\"price\">\r\n            <span class=\"input-group-addon\">0,00 грн</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"discount\">Знижка</label>\r\n          <div class=\"input-group input-group-sm col-md-8\">\r\n            <input type=\"text\" ngModel name=\"discount\" class=\"form-control form-control-sm\" id=\"discount\">\r\n            <span class=\"input-group-addon\">%</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" ngModel name=\"showOnMainPage\"\r\n                     id=\"showOnMainPage\">   На головній</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"width\">Ширина</label>\r\n          <div class=\"input-group input-group-sm col-md-8\">\r\n            <input type=\"text\" ngModel name=\"width\" class=\"form-control form-control-sm\" id=\"width\">\r\n            <span class=\"input-group-addon\">см</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"height\">Висота</label>\r\n          <div class=\"input-group input-group-sm col-md-8\">\r\n            <input type=\"text\" ngModel name=\"height\" class=\"form-control form-control-sm\" id=\"height\">\r\n            <span class=\"input-group-addon\">см</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <input type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!addProductForm.form.valid\" value=\"Add\">\r\n  </form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/products-management/add-product/add-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_catalog_service__ = __webpack_require__("../../../../../src/app/services/catalog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddProductComponent = (function () {
    function AddProductComponent(authService, validateService, productService, flashMessage, router, catalogService) {
        this.authService = authService;
        this.validateService = validateService;
        this.productService = productService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.catalogService = catalogService;
        this.isCategory1 = false;
        this.updateProducts = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddProductComponent.prototype.ngOnInit = function () {
        this.catalog = this.catalogService.getCatalog();
    };
    AddProductComponent.prototype.onSelectCategory0 = function (event) {
        var _this = this;
        this.itemNumbersAll = [];
        for (var i = 0; i < this.catalog.length; i++) {
            if (this.catalog[i].category0.name === event.srcElement.value) {
                this.itemNumberPrefix = this.catalog[i].category0.itemNumberPrefix;
                this.freeItemNumber = this.productService.getQueriedProducts({ 'category0': this.catalog[i].category0.name });
                this.freeItemNumber
                    .map(function (item) {
                    for (var i_1 = 0; i_1 < item.length; i_1++) {
                        _this.itemNumbersAll.push(item[i_1].itemNumber);
                    }
                    console.log('item1', _this.itemNumbersAll);
                    return _this.itemNumbersAll;
                })
                    .subscribe(function (item) { return console.log('item', item); });
                // for(let i=0; i < this.catalog[i].category0.itemNumber){
                //
                // }
                console.log('this.itemNumberPrefix', this.itemNumberPrefix);
                console.log('this.freeItemNumber', this.freeItemNumber);
                if (this.catalog[i].category0.category1) {
                    this.catalogCategory1 = this.catalog[i].category0.category1;
                    this.isCategory1 = true;
                }
                else {
                    this.isCategory1 = false;
                    var category1Element = document.querySelector('#category1');
                    category1Element.nodeValue = '';
                }
            }
        }
        console.log('event.srcElement.value', event.srcElement.value);
    };
    AddProductComponent.prototype.onAddProductSubmit = function (form) {
        var _this = this;
        console.log('form.value.showOnMainPage', form.value.showOnMainPage);
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
        }
        else {
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
            this.flashMessage.show('fill all fields', {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        }
        this.productService.addProduct(this.product)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Added successfully', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                _this.updateProducts.emit();
            }
            else {
                _this.flashMessage.show('Adding failed', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        }, function (error) {
            if (error.status === 401) {
                _this.flashMessage.show('Please login', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    return AddProductComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AddProductComponent.prototype, "updateProducts", void 0);
AddProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-product',
        template: __webpack_require__("../../../../../src/app/components/products-management/add-product/add-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products-management/add-product/add-product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_catalog_service__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_catalog_service__["a" /* CatalogService */]) === "function" && _f || Object])
], AddProductComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=add-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products-management/edit-product/edit-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active {\r\n  background-color: rgba(18, 52, 86, 0.5);\r\n  color: white;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.edit-product-table-first-cell {\r\n  width: 60px;\r\n  text-align: center;\r\n}\r\n\r\n.edit-product-table-last-cell {\r\n  width: 30px;\r\n  text-align: center;\r\n}\r\n\r\n.edit-product-table-cells {\r\n  /*width: 90%;*/\r\n  /*height: 90%;*/\r\n  padding: 3px;\r\n}\r\n\r\n.material-icons.md-18 {\r\n  font-size: 18px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products-management/edit-product/edit-product.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Edit product</h2>\r\n<table *ngIf=\"products\"  class=\"table table-sm\">\r\n  <form *ngFor=\"let product of products; let i = index\" (submit)=\"onEditProductSubmit(product, i)\"\r\n        #editProductForm=\"ngForm\">\r\n    <thead *ngIf=\"product === products[0]\">\r\n      <tr>\r\n        <th class=\"edit-product-table-first-cell\">\r\n        </th>\r\n        <th>Category</th>\r\n        <th>Sub Category</th>\r\n        <th>Item Number</th>\r\n        <th>Name</th>\r\n        <th>Price</th>\r\n        <th>Img source</th>\r\n        <th>Description</th>\r\n        <th>On main page 0/1</th>\r\n        <th>Discount %</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr [class.active]=\"i === selectedRow\" >\r\n          <td class=\"edit-product-table-first-cell\">\r\n\r\n            <button type=\"button\" (click)=\"onClickEditBtn(i, product._id)\" class=\"btn btn-secondary btn-sm\"\r\n                    [class.hide]=\"!isEditBtnShow\">\r\n              <i class=\"material-icons md-18\">mode_edit</i>\r\n              <!--<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>-->\r\n            </button>\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Edit\">\r\n              <button type=\"submit\" class=\"btn btn-secondary btn-sm\" [class.hide]=\"!(i === selectedRow)\">\r\n                <!--<i class=\"fa fa-check\" aria-hidden=\"true\"></i>-->\r\n                <i class=\"material-icons md-18\">done</i>\r\n              </button>\r\n\r\n              <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"onClickCancelEditBtn(i, product._id)\"\r\n                      [class.hide]=\"!(i === selectedRow)\">\r\n                <!--<i class=\"fa fa-ban\" aria-hidden=\"true\"></i>-->\r\n                <i class=\"material-icons md-18\">highlight_off</i>\r\n              </button>\r\n            </div>\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.category0\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"category0\" #category0=\"ngModel\" class=\"form-control form-control-sm\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.category1\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"category1\" #category1=\"ngModel\" class=\"form-control form-control-sm\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.itemNumber\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"itemNumber\" #itemNumber=\"ngModel\" class=\"form-control form-control-sm\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.name\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"name\" #name=\"ngModel\" class=\"form-control form-control-sm\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.price\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"price\" #price=\"ngModel\" class=\"form-control form-control-sm\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.mainImgSrc\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"mainImgSrc\" #mainImgSrc=\"ngModel\" class=\"form-control form-control-sm\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.itemDescription\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"itemDescription\" #itemDescription=\"ngModel\" class=\"form-control form-control-sm\">\r\n          </td>\r\n           <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.showOnMainPage\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"showOnMainPage\" #showOnMainPage=\"ngModel\" class=\"form-control form-control-sm\">\r\n          </td>\r\n           <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.discount\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"discount\" #discount=\"ngModel\" class=\"form-control form-control-sm\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.size.width\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"width\" #width=\"ngModel\" class=\"form-control form-control-sm\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.size.height\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"height\" #height=\"ngModel\" class=\"form-control form-control-sm\">\r\n          </td>\r\n          <td class=\"edit-product-table-last-cell\">\r\n\r\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"onClickDelBtn(i, product._id)\"\r\n                    [class.hidden]=\"!(i === selectedRow)\">\r\n              <i class=\"material-icons md-18\">delete_sweep</i>\r\n\r\n              <!--<i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>-->\r\n            </button>\r\n\r\n          </td>\r\n        </tr>\r\n    </tbody>\r\n  </form>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/products-management/edit-product/edit-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProductComponent = (function () {
    // showAddProduct: Boolean = false;
    function EditProductComponent(productService, flashMessage, router) {
        this.productService = productService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.isActive = false;
        this.isEditBtnShow = true;
    }
    EditProductComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    EditProductComponent.prototype.onUpdateProducts = function () {
        this.getProducts();
    };
    EditProductComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (products) {
            _this.products = products;
        }, function (error) {
            _this.flashMessage.show(error, {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        });
    };
    // addProductBtn() {
    //   this.addProduct = true;
    // }
    //
    // onClickCancelAddBtn(i, _id) {
    //   this.addProduct = false;
    //   // this.selectedRow = null;
    //   // this.isEditBtnShow = true;
    //   // this.getProducts();
    // }
    EditProductComponent.prototype.onClickEditBtn = function (i, _id) {
        this.selectedRow = i;
        this.isEditBtnShow = false;
        // this.addProduct = false;
    };
    EditProductComponent.prototype.onClickCancelEditBtn = function (i, _id) {
        this.selectedRow = null;
        this.isEditBtnShow = true;
        this.getProducts();
    };
    EditProductComponent.prototype.onClickDelBtn = function (i, _id) {
        var _this = this;
        this.selectedRow = null;
        this.isEditBtnShow = true;
        this.productService.deleteProduct(_id)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Delete successfully, Number Of Deleted Elements ' + data.numberOfDeletedElements.n, {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                _this.getProducts();
                // this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessage.show('Delete failed', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                // this.router.navigate(['/profile']);
            }
        }, function (error) {
            if (error.status === 401) {
                _this.flashMessage.show('Please login', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    EditProductComponent.prototype.onEditProductSubmit = function (product, i) {
        var _this = this;
        this.selectedRow = null;
        this.isEditBtnShow = true;
        this.productService.editProduct(product)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Edited successfully', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                // this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessage.show('Adding failed', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                // this.router.navigate(['/profile']);
            }
        }, function (error) {
            if (error.status === 401) {
                _this.flashMessage.show('Please login', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    return EditProductComponent;
}());
EditProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-product',
        template: __webpack_require__("../../../../../src/app/components/products-management/edit-product/edit-product.component.html"),
        // providers: [ProductService],
        styles: [__webpack_require__("../../../../../src/app/components/products-management/edit-product/edit-product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], EditProductComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products-management/products-management-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsManagementRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_page404_page404_component__ = __webpack_require__("../../../../../src/app/components/shared/page404/page404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_management_component__ = __webpack_require__("../../../../../src/app/components/products-management/products-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_product_edit_product_component__ = __webpack_require__("../../../../../src/app/components/products-management/edit-product/edit-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_management_submenu_products_management_submenu_component__ = __webpack_require__("../../../../../src/app/components/products-management/products-management-submenu/products-management-submenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_product_add_product_component__ = __webpack_require__("../../../../../src/app/components/products-management/add-product/add-product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var productsRoutes = [
    {
        path: 'products-management',
        component: __WEBPACK_IMPORTED_MODULE_3__products_management_component__["a" /* ProductsManagementComponent */],
        children: [
            // {
            //   path: 'start',
            //   component: AddProductComponent,
            // },
            {
                path: 'start',
                outlet: 'productsManagementSubmenu',
                component: __WEBPACK_IMPORTED_MODULE_5__products_management_submenu_products_management_submenu_component__["a" /* ProductsManagementSubmenuComponent */],
            },
            {
                path: 'edit-product',
                component: __WEBPACK_IMPORTED_MODULE_4__edit_product_edit_product_component__["a" /* EditProductComponent */],
            },
            {
                path: 'add-product',
                component: __WEBPACK_IMPORTED_MODULE_6__add_product_add_product_component__["a" /* AddProductComponent */],
            },
            {
                path: '**',
                component: __WEBPACK_IMPORTED_MODULE_2__shared_page404_page404_component__["a" /* Page404Component */]
            },
        ],
    },
];
var ProductsManagementRoutingModule = (function () {
    function ProductsManagementRoutingModule() {
    }
    return ProductsManagementRoutingModule;
}());
ProductsManagementRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(productsRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]]
    })
], ProductsManagementRoutingModule);

//# sourceMappingURL=products-management-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/products-management/products-management-submenu/products-management-submenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li.active {\r\n  border-right: 2px #0000ff solid;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products-management/products-management-submenu/products-management-submenu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav flex-md-column\">\r\n  <li class=\"nav-item\" *ngFor=\"let item of menuList\"\r\n      [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n    <a class=\"nav-link\" [routerLink]=\"['/products-management', {outlets: {primary: item.route}}]\">\r\n      {{item.name}}\r\n    </a>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/components/products-management/products-management-submenu/products-management-submenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsManagementSubmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsManagementSubmenuComponent = (function () {
    function ProductsManagementSubmenuComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ProductsManagementSubmenuComponent.prototype.ngOnInit = function () {
        this.menuList = [
            {
                name: 'Додати товар',
                route: 'add-product',
            },
            {
                name: 'Редагувати товар',
                route: 'edit-product',
            },
        ];
    };
    return ProductsManagementSubmenuComponent;
}());
ProductsManagementSubmenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products-management-submenu',
        template: __webpack_require__("../../../../../src/app/components/products-management/products-management-submenu/products-management-submenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products-management/products-management-submenu/products-management-submenu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], ProductsManagementSubmenuComponent);

var _a, _b;
//# sourceMappingURL=products-management-submenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products-management/products-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products-management/products-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-2\">\r\n    <h2>Side menu</h2>\r\n    <router-outlet name=\"productsManagementSubmenu\"></router-outlet>\r\n  </div>\r\n  <div class=\"col-md-10\">\r\n    <h1>Product Management</h1>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n<!--<app-edit-product></app-edit-product>-->\r\n<!--<app-add-product (updateProducts)=\"onUpdateProducts()\"></app-add-product>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/products-management/products-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_product_edit_product_component__ = __webpack_require__("../../../../../src/app/components/products-management/edit-product/edit-product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsManagementComponent = (function () {
    function ProductsManagementComponent() {
    }
    ProductsManagementComponent.prototype.ngOnInit = function () {
    };
    ProductsManagementComponent.prototype.onUpdateProducts = function () {
        this.editProductComponent.onUpdateProducts();
    };
    return ProductsManagementComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__edit_product_edit_product_component__["a" /* EditProductComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__edit_product_edit_product_component__["a" /* EditProductComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__edit_product_edit_product_component__["a" /* EditProductComponent */]) === "function" && _a || Object)
], ProductsManagementComponent.prototype, "editProductComponent", void 0);
ProductsManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products-management',
        template: __webpack_require__("../../../../../src/app/components/products-management/products-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products-management/products-management.component.css")],
    }),
    __metadata("design:paramtypes", [])
], ProductsManagementComponent);

var _a;
//# sourceMappingURL=products-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products-management/products-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsManagementModule", function() { return ProductsManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_management_component__ = __webpack_require__("../../../../../src/app/components/products-management/products-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_product_add_product_component__ = __webpack_require__("../../../../../src/app/components/products-management/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_product_edit_product_component__ = __webpack_require__("../../../../../src/app/components/products-management/edit-product/edit-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_management_routing_module__ = __webpack_require__("../../../../../src/app/components/products-management/products-management-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_management_submenu_products_management_submenu_component__ = __webpack_require__("../../../../../src/app/components/products-management/products-management-submenu/products-management-submenu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ProductsManagementModule = (function () {
    function ProductsManagementModule() {
    }
    return ProductsManagementModule;
}());
ProductsManagementModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__products_management_component__["a" /* ProductsManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_4__add_product_add_product_component__["a" /* AddProductComponent */],
            __WEBPACK_IMPORTED_MODULE_5__edit_product_edit_product_component__["a" /* EditProductComponent */],
            __WEBPACK_IMPORTED_MODULE_8__products_management_submenu_products_management_submenu_component__["a" /* ProductsManagementSubmenuComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_7__products_management_routing_module__["a" /* ProductsManagementRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        exports: [],
        providers: []
    })
], ProductsManagementModule);

//# sourceMappingURL=products-management.module.js.map

/***/ }),

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

module.exports = "<!--<div class=\"row\">-->\r\n  <!--<div class=\"col-lg-3 col-md-4 col-6\" *ngFor=\"let product of submenuList\">-->\r\n    <!--<div>{{product.description}}</div>-->\r\n    <!--<hr>-->\r\n    <!--<img src={{product.mainImgSrc[0]}} class=\"img-fluid\">-->\r\n    <!--<hr>-->\r\n    <!--<a [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"-->\r\n       <!--[routerLink]=\"['/products', {outlets: {primary: 'category/' + category0 + '/' + product.name,-->\r\n      <!--productsSubmenu:  'category/' + category0 + '/' + product.name}}]\">{{product.name}}</a>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n\r\n<div class=\"row\">\r\n  <div *ngFor=\"let product of submenuList\" class=\"col-lg-3 col-md-4 col-sm-6 col-12\">\r\n    <app-item [product]=\"product\" [parentComponentLink]=\"[\r\n    '/products', {outlets: {primary: 'category/' + category0 + '/' + product.name,\r\n      productsSubmenu:  'category/' + category0 + '/' + product.name}}\r\n      ]\"></app-item>\r\n  </div>\r\n</div>\r\n\r\n<!--<div class=\"row\">-->\r\n  <!--<div class=\"col-lg-3 col-md-4 col-6\" *ngFor=\"let submenuItem of submenuList\">-->\r\n    <!--<div class=\"card\">-->\r\n      <!--<div class=\"album\">-->\r\n        <!--<img class=\"card-img-top\" src=\"{{product.mainImgSrc[0]}}\" alt=\"Зображення\">-->\r\n        <!--<div class=\"card-body\">-->\r\n          <!--<h4 class=\"card-title\">{{product.name}}</h4>-->\r\n          <!--<p class=\"card-text item-text text-muted\">{{product.itemDescription}}</p>-->\r\n          <!--&lt;!&ndash;<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>&ndash;&gt;-->\r\n    <!---->\r\n          <!--<p class=\"card-text item-info-title text-muted\">Артикул-->\r\n            <!--<span class=\"item-info-value\">{{product.itemNumber}}</span>-->\r\n          <!--</p>-->\r\n          <!--<p class=\"card-text item-info-title text-muted\">-->\r\n            <!--Висота x Ширина-->\r\n            <!--<span class=\"item-info-value\">{{product.size.height}}</span>-->\r\n            <!--х-->\r\n            <!--<span class=\"item-info-value\">{{product.size.width}}</span>-->\r\n            <!--см-->\r\n          <!--</p>-->\r\n    <!---->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>  -->\r\n  <!--</div>-->\r\n<!--</div>-->"

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
            _this.submenuList = _this.catalogService.getQueriedCatalog(params);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_catalog_service__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_catalog_service__["a" /* CatalogService */]) === "function" && _f || Object])
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
        path: 'products',
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
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(productsRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]]
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

module.exports = "<div class=\"row\">\r\n  <div *ngFor=\"let product of products\" class=\"col-lg-3 col-md-4 col-sm-6 col-12\">\r\n    <app-item [product]=\"product\"></app-item>\r\n  </div>\r\n</div>\r\n"

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
    // searchQuery: object;
    function ProductsSectionComponent(route, 
        // private productService: ProductService,
        flashMessage) {
        this.route = route;
        this.flashMessage = flashMessage;
    }
    ProductsSectionComponent.prototype.ngOnInit = function () {
        // this.route.params.subscribe(params => {
        //   this.searchQuery = {
        //         'catalog.category0': params.category0,
        //         'catalog.category1': params.category1 === 'main' ? {$exists: true} : params.category1,
        //       };
        //   this.onChangeRoute(this.searchQuery);
        // });
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
exports.push([module.i, "/*li.active {*/\r\n  /*!*border-bottom: 2px #0000ff solid;*!*/\r\n  /*font-weight: bold;*/\r\n/*}*/\r\n\r\n.button-root {\r\n  border-bottom: 2px lightslategray solid;\r\n  font-weight: 200;\r\n}\r\n\r\n.button-root::after {\r\n  font-family: \"Material Icons\";\r\n  content: \"play_arrow\";\r\n  text-transform: lowercase;\r\n  font-size: 1rem;\r\n  vertical-align: middle;\r\n  line-height: 1.35rem;\r\n\r\n}\r\n\r\n.button-secondary {\r\n  /*border-bottom: 2px lightslategray solid*/\r\n}\r\n\r\n.button-secondary:hover {\r\n  /*border-bottom: 2px #0000ff solid;*/\r\n  background: lightslategray;\r\n  color: #fff;\r\n}\r\n\r\n.button-secondary.active {\r\n  /*border-bottom: 2px #0000ff solid;*/\r\n  /*background: transparent;*/\r\n  /*color: #fff*;*/\r\n  border-bottom: 2px darkslategrey solid;\r\n}\r\n\r\nbutton.active {\r\n  font-weight: 300;\r\n}\r\n\r\n.button-row {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n  height: 4.5rem;\r\n  /*width: 20rem;*/\r\n  /*float: left;*/\r\n  /*display: inline-block;*/\r\n  /*align-items: center;*/\r\n  /*justify-content: space-around;*/\r\n}\r\n\r\n.navbar-nav {\r\n  display: block;\r\n}\r\n\r\n.nav-item-width {\r\n  /*display: block;*/\r\n  float: left;\r\n  /*padding: 0 .75rem;*/\r\n  /*width: 200px;*/\r\n  /*height: 1.35rem;*/\r\n  /*line-height: 1.35rem;*/\r\n  /*font-size: 1rem;*/\r\n  /*vertical-align: middle;*/\r\n  /*padding-top: 0.1rem;*/\r\n  /*padding-bottom: 0.3rem;*/\r\n  white-space: nowrap;\r\n  /*border: 1px solid transparent;*/\r\n  width: 10rem;\r\n  /*border-radius: 0;*/\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/products-submenu/products-submenu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light navbar-width\">\r\n\r\n  <a class=\"navbar-brand\"\r\n     [routerLink]=\"['/products', {outlets: {primary: submenuList?\r\n            'start/' + category0 + '/main': 'category/'+ category0 +'/noSubCategories',\r\n              productsSubmenu:  'category/' + category0 + '/main'}}]\">{{category0}}</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav\" >\r\n      <li class=\"nav-item nav-item-width\"  *ngFor=\"let submenuItem of submenuList\"\r\n          [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\"  [routerLink]=\"['/products', {outlets: {primary: 'category/' + category0 + '/' + submenuItem.name,\r\n            productsSubmenu:  'category/' + category0 + '/' + submenuItem.name}}]\">{{submenuItem.name}}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

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
            _this.category1 = params.category1;
            _this.submenuList = _this.catalogService.getQueriedCatalog(params);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_url_serializer_service__["a" /* MyUrlSerializer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_url_serializer_service__["a" /* MyUrlSerializer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_catalog_service__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_catalog_service__["a" /* CatalogService */]) === "function" && _g || Object])
], ProductsSubmenuComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=products-submenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n    <router-outlet name=\"productsSubmenu\"></router-outlet>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

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
            __WEBPACK_IMPORTED_MODULE_3__products_routing_module__["a" /* ProductsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
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

/***/ }),

/***/ "../../../../../src/app/components/shared/item/item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-text {\r\n  font-size: .85rem;\r\n}\r\n\r\n.card-title {\r\n  text-transform: capitalize;\r\n}\r\n\r\n.card {\r\n  margin-bottom: 2rem;\r\n  border: 0;\r\n}\r\n\r\n.card-title {\r\n  min-height: 4rem;\r\n  /*padding-bottom: 0.5rem;*/\r\n  text-align: center;\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .card-title {\r\n    margin-bottom: 0;\r\n  }\r\n  .item-text {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .card-title {\r\n    padding-bottom: 0.5rem;\r\n  }\r\n  .item-text {\r\n    min-height: 6rem;\r\n    padding-bottom: 0.5rem;\r\n  }\r\n  .album {\r\n    min-height: 28rem;\r\n  }\r\n}\r\n\r\n.item-text {\r\n  /*min-height: 8rem;*/\r\n  /*padding-bottom: 0.5rem;*/\r\n  text-align: justify;\r\n}\r\n\r\n.album {\r\n  /*min-height: 28rem;*/\r\n  padding-bottom: 0.5rem;\r\n  background-color: #f7f7f7;\r\n}\r\n\r\n.item-info-title {\r\n  font-size: .65rem;\r\n  padding-bottom: 0;\r\n  margin-bottom: 0;\r\n  text-align: right;\r\n}\r\n\r\n.item-info-value {\r\n  font-size: .85rem;\r\n  font-weight: 500;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"album\">\r\n    <img class=\"card-img-top\" src=\"{{product.mainImgSrc[0]}}\" alt=\"Зображення\">\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title\">{{product.name}}</h4>\r\n      <p *ngIf=\"product.itemDescription\" class=\"card-text item-text text-muted\">{{product.itemDescription}}</p>\r\n      <a *ngIf=\"parentComponentLink\" class=\"btn btn-dark\" [routerLink]=\"parentComponentLink\">Перейти</a>\r\n      <p *ngIf=\"product.itemNumber\" class=\"card-text item-info-title text-muted\">Артикул\r\n        <span class=\"item-info-value\">{{product.itemNumber}}</span>\r\n      </p>\r\n      <p *ngIf=\"product.size\" class=\"card-text item-info-title text-muted\">\r\n        Висота x Ширина\r\n        <span class=\"item-info-value\">{{product.size.height}}</span>\r\n        х\r\n        <span class=\"item-info-value\">{{product.size.width}}</span>\r\n        см\r\n      </p>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_i_product__ = __webpack_require__("../../../../../src/app/interfaces/i-product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_i_product___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces_i_product__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemComponent = (function () {
    function ItemComponent() {
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    return ItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces_i_product__["IProduct"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces_i_product__["IProduct"]) === "function" && _a || Object)
], ItemComponent.prototype, "product", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ItemComponent.prototype, "parentComponentLink", void 0);
ItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-item',
        template: __webpack_require__("../../../../../src/app/components/shared/item/item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shared/item/item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ItemComponent);

var _a;
//# sourceMappingURL=item.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/menu-h/menu-h.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/menu-h/menu-h.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/shared/menu-h/menu-h.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuHComponent; });
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

var MenuHComponent = (function () {
    function MenuHComponent() {
    }
    MenuHComponent.prototype.ngOnInit = function () {
    };
    return MenuHComponent;
}());
MenuHComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu-h',
        template: __webpack_require__("../../../../../src/app/components/shared/menu-h/menu-h.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shared/menu-h/menu-h.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MenuHComponent);

//# sourceMappingURL=menu-h.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/page404/page404.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/page404/page404.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  404 page not found!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/page404/page404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page404Component; });
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

var Page404Component = (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    return Page404Component;
}());
Page404Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page404',
        template: __webpack_require__("../../../../../src/app/components/shared/page404/page404.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shared/page404/page404.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Page404Component);

//# sourceMappingURL=page404.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_item_component__ = __webpack_require__("../../../../../src/app/components/shared/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page404_page404_component__ = __webpack_require__("../../../../../src/app/components/shared/page404/page404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_h_menu_h_component__ = __webpack_require__("../../../../../src/app/components/shared/menu-h/menu-h.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__item_item_component__["a" /* ItemComponent */],
            __WEBPACK_IMPORTED_MODULE_3__page404_page404_component__["a" /* Page404Component */],
            __WEBPACK_IMPORTED_MODULE_4__menu_h_menu_h_component__["a" /* MenuHComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__item_item_component__["a" /* ItemComponent */],
            __WEBPACK_IMPORTED_MODULE_3__page404_page404_component__["a" /* Page404Component */],
            __WEBPACK_IMPORTED_MODULE_4__menu_h_menu_h_component__["a" /* MenuHComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/users-management/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users-management/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Dashboard</h2>\r\n<p>\r\n  Welcome to dashboard!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/users-management/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/users-management/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users-management/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users-management/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users-management/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\r\n<form (submit)=\"onLoginSubmit()\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">UserName</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\"\r\n           name=\"username\" class=\"form-control\" id=\"username\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\"\r\n           name=\"password\" class=\"form-control\" id=\"password\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/users-management/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
        };
        this.authService.authUser(user)
            .subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/users-management/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users-management/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users-management/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users-management/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n  <h2 class=\"page-header\">Profile of {{user.name}}</h2>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">username: {{user.username}}</li>\r\n    <li class=\"list-group-item\">email: {{user.email}}</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/users-management/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // підписується на юзера з auth.service
        this.authService.getProfile()
            .subscribe(function (profile) {
            _this.user = profile.user;
        }, function (error) {
            _this.flashMessage.show(error, {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/users-management/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users-management/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users-management/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users-management/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\r\n<form (submit)=\"onRegisterSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"name\">Name</label>\r\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">UserName</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/users-management/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // validateService перевіряє валідність даних
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('fill all fields', {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('enter valid email', {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        }
        // підписка на authService.registerUser для реєстрації
        this.authService.registerUser(user)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Registration successful', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Registration failed', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/register']);
            }
        }, function (error) {
            if (error.status === 401) {
                _this.flashMessage.show('Please login', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/users-management/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users-management/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users-management/users-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/users-management/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/components/users-management/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__ = __webpack_require__("../../../../../src/app/components/users-management/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__("../../../../../src/app/components/users-management/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UsersManagementModule = (function () {
    function UsersManagementModule() {
    }
    return UsersManagementModule;
}());
UsersManagementModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        exports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */],
        ]
    })
], UsersManagementModule);

//# sourceMappingURL=users-management.module.js.map

/***/ }),

/***/ "../../../../../src/app/data/catalog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return localCatalog; });
var localCatalog = [
    {
        _id: 'x',
        category0: {
            itemNumberPrefix: 'І',
            name: 'іграшки',
        }
    },
    {
        _id: 'x',
        category0: {
            itemNumberPrefix: 'В',
            name: 'віночки',
        }
    },
    {
        _id: 'x',
        category0: {
            itemNumberPrefix: 'Б',
            name: 'букети',
            category1: [
                {
                    name: 'букети з квітів',
                    itemDescription: 'Живі квіти',
                    mainImgSrc: ['./assets/images/composition-flowers_wedding-pion.jpg'],
                },
                {
                    name: 'букети з цукерок',
                    itemDescription: 'Цукерки, декоративні елементи',
                    mainImgSrc: ['./assets/images/composition-sweets_delicacy.jpg'],
                },
                {
                    name: 'букети з фруктів',
                    itemDescription: 'Фрукти, овочі та зелень',
                    mainImgSrc: ['./assets/images/composition-veg-fr_with-pepper.jpg'],
                }
            ],
        }
    },
    {
        _id: 'x',
        category0: {
            itemNumberPrefix: 'Д',
            name: 'декор',
            category1: [
                {
                    name: 'весільний декор',
                    itemDescription: 'Весільний декор для вашого свята: бокали, ' +
                        'скинька для обручок, свічки, кошичок для цукерок, ' +
                        'скринька для подарунків, підв’язка нареченої',
                    mainImgSrc: ['./assets/images/decor_wedding.jpg'],
                },
            ],
        }
    },
];
//# sourceMappingURL=catalog.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/interfaces/i-product.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=i-product.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    // register.component підписується на registerUser
    // юзер з хедером передається на сервер
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // profile.component підписується на getProfile
    AuthService.prototype.getProfile = function () {
        // береться токен юзера loadToken() з localStorage
        // формується запит який містить в хедері токен
        // якщо токен валідний і є такий юзер то сервер
        // відповідаю даними юзера (розшифровує токен)
        // і цей юзер передається в profile.component
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/catalog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_catalog__ = __webpack_require__("../../../../../src/app/data/catalog.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Observable } from 'rxjs';


var CatalogService = (function () {
    function CatalogService(http) {
        this.http = http;
    }
    CatalogService.prototype.getCatalog = function () {
        return __WEBPACK_IMPORTED_MODULE_3__data_catalog__["a" /* localCatalog */];
        // return this.http.get(
        //   config.serverUrl + 'api/getCatalog')
        //   .map(res => res.json());
    };
    CatalogService.prototype.getQueriedCatalog = function (params) {
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_3__data_catalog__["a" /* localCatalog */].length; i++) {
            if (params.category0 === __WEBPACK_IMPORTED_MODULE_3__data_catalog__["a" /* localCatalog */][i].category0.name) {
                return __WEBPACK_IMPORTED_MODULE_3__data_catalog__["a" /* localCatalog */][i].category0.category1;
            }
        }
        // return this.http.get(
        //   config.serverUrl + 'api/getCatalog')
        //   .map(res => res.json())
        //   .map(data => {
        //     return data.find((value) => params.category0 === value.category0.name).category0.category1;
        //   });
    };
    return CatalogService;
}());
CatalogService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CatalogService);

var _a;
//# sourceMappingURL=catalog.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/product-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductResolverService = (function () {
    function ProductResolverService(productService) {
        this.productService = productService;
    }
    ProductResolverService.prototype.resolve = function (route, state) {
        var category0 = route.params.category0;
        var category1 = route.params.category1;
        this.searchQuery = {
            'category0': category0,
            'category1': category1 === 'main' ? { $exists: true } : category1,
        };
        return this.productService.getQueriedProducts(this.searchQuery);
        // .subscribe(
        //   (products) => {
        //     this.products = products;
        //   },
        //   (error) => {
        //     this.flashMessage.show(
        //       error,
        //       {
        //         cssClass: 'alert-danger',
        //         timeout: 3000
        //       });
        //     return false;
        //   });
    };
    return ProductResolverService;
}());
ProductResolverService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _a || Object])
], ProductResolverService);

var _a;
//# sourceMappingURL=product-resolver.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductService = (function () {
    function ProductService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/getProducts')
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getQueriedProducts = function (searchQuery) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.set('Content-Type', 'application/json');
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        // params.set('category', 'Toys');
        params.set('obj', JSON.stringify(searchQuery));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, params: params });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/getQueriedProducts', options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.addProduct = function (product) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/addProduct', product, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.editProduct = function (product) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/editProduct', product, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.deleteProduct = function (_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        console.log('api/deleteProduct/' + _id);
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/deleteProduct/' + _id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ProductService);

var _a, _b;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/url-serializer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyUrlSerializer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MyUrlSerializer = (function (_super) {
    __extends(MyUrlSerializer, _super);
    function MyUrlSerializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyUrlSerializer.prototype.parse = function (url) {
        // url.replace('%20', '-');
        return _super.prototype.parse.call(this, url);
    };
    MyUrlSerializer.prototype.serialize = function (tree) {
        return _super.prototype.serialize.call(this, tree);
        // return super.serialize(tree).replace('%20', '-');
    };
    return MyUrlSerializer;
}(__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* DefaultUrlSerializer */]));

//# sourceMappingURL=url-serializer.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
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

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateProduct = function (product) {
        return true;
    };
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined ||
            user.email === undefined ||
            user.username === undefined ||
            user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/assets/images/main-banner.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAoCAMAAAA2TQ8LAAAALVBMVEX9/f3////t7e3x8fHz8/P8/Pzu7u709PT29vbw8PD09PX7+/v6+vr19fX5+fk0jMsZAAAAiUlEQVR42u2VOxLAIAhEg9/4vf9xE9SMnRUwKdgCcSletbMXCoaMsda5uXtP5fMDYCmE+X4nKl8GECN+71f7ROHLAFLKGZdScNYK0BpuFL4MAMc6DPU+XwpfBsCT3u3zAw5hIfH5AYewkPj8gENYSHx+AEe4UGIA7WTtZO1k7WTtZO1k7eR/dPIDDIorwW0h/X0AAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map