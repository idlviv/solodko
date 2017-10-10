webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/admin-panel/admin-panel.module": [
		"../../../../../src/app/components/admin-panel/admin-panel.module.ts",
		"admin-panel.module"
	],
	"./components/home/home.module": [
		"../../../../../src/app/components/home/home.module.ts",
		"home.module"
	],
	"./components/products/products.module": [
		"../../../../../src/app/components/products/products.module.ts",
		"products.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_auth_admin_guard__ = __webpack_require__("../../../../../src/app/guards/auth-admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_user_guard__ = __webpack_require__("../../../../../src/app/guards/auth-user.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: 'home',
        loadChildren: './components/home/home.module#HomeModule'
    },
    { path: 'products',
        loadChildren: './components/products/products.module#ProductsModule'
    },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_users_management_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_admin_guard__["a" /* AuthAdminGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_users_management_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__components_users_management_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_user_guard__["a" /* AuthUserGuard */]] },
    // {path: 'products-management',
    //   loadChildren: './components/products-management/products-management.module#ProductsManagementModule',
    //   },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__components_users_management_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_user_guard__["a" /* AuthUserGuard */]] },
    { path: 'admin',
        // component: AdminPanelComponent,
        // children: [
        //   {
        //     path: 'z',
        //     outlet: 'adminPanelSubmenu',
        //     component: DashboardComponent,
        //   },
        //   {
        //     path: 'z',
        //     component: ProfileComponent,
        //   },
        // ]
        loadChildren: './components/admin-panel/admin-panel.module#AdminPanelModule',
    },
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
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* RouterModule */]
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
exports.push([module.i, ".container-mod {\r\n  /*padding: 3rem 3rem 2rem 3rem;*/\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container-fluid px-4 py-4\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_catalog_service__ = __webpack_require__("../../../../../src/app/services/catalog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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
    function AppComponent(router, authService, catalogService, flashMessage) {
        this.router = router;
        this.authService = authService;
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_catalog_service__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_catalog_service__["a" /* CatalogService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_shared_shared_module__ = __webpack_require__("../../../../../src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_users_management_users_management_module__ = __webpack_require__("../../../../../src/app/components/users-management/users-management.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_url_serializer_service__ = __webpack_require__("../../../../../src/app/services/url-serializer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_product_resolver_service__ = __webpack_require__("../../../../../src/app/services/product-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_catalog_service__ = __webpack_require__("../../../../../src/app/services/catalog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_admin_guard__ = __webpack_require__("../../../../../src/app/guards/auth-admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guards_auth_manager_guard__ = __webpack_require__("../../../../../src/app/guards/auth-manager.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_auth_user_guard__ = __webpack_require__("../../../../../src/app/guards/auth-user.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import {ProductsModule} from './components/products/products.module';
// import {HomeModule} from './components/home/home.module';


// import {ProductsManagementModule} from './components/products-management/products-management.module';














// import {AdminPanelModule} from './components/admin-panel/admin-panel.module';
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
            // ProductsModule,
            // ProductsManagementModule,
            // HomeModule,
            __WEBPACK_IMPORTED_MODULE_8__components_shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__components_users_management_users_management_module__["a" /* UsersManagementModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_8__components_shared_shared_module__["a" /* SharedModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_url_serializer_service__["a" /* MyUrlSerializer */],
            __WEBPACK_IMPORTED_MODULE_13__services_catalog_service__["a" /* CatalogService */],
            __WEBPACK_IMPORTED_MODULE_12__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_11__services_product_resolver_service__["a" /* ProductResolverService */],
            __WEBPACK_IMPORTED_MODULE_14__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_16__guards_auth_admin_guard__["a" /* AuthAdminGuard */],
            __WEBPACK_IMPORTED_MODULE_22__guards_auth_manager_guard__["a" /* AuthManagerGuard */],
            __WEBPACK_IMPORTED_MODULE_23__guards_auth_user_guard__["a" /* AuthUserGuard */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n  text-transform: capitalize;\r\n}\r\n\r\n@media (min-width: 991px) {\r\n  li {\r\n    border-bottom: 2px lightslategray solid;\r\n  }\r\n\r\n  li.active  {\r\n    border-bottom: 2px darkslategrey solid;\r\n  }\r\n\r\n  .navbar {\r\n    font-size: 1.2rem;\r\n    box-shadow: 0 .2rem 1rem rgba(0,0,0,.25);\r\n    height: 5rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  li.active  {\r\n    font-weight: bold;\r\n  }\r\n}\r\n.navbar-brand {\r\n  font-size: 1.4rem;\r\n}\r\n.navbar {\r\n  box-shadow: 0 .2rem 1rem rgba(0,0,0,.25);\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light sticky-top\">\r\n  <a class=\"navbar-brand\" href=\"#\">Творча Майстерня</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\"  (click)=\"hide()\">\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/home']\">Головна</a></li>\r\n      <li *ngFor=\"let catalogItem of localCatalog\" class=\"nav-item\" [routerLinkActive]=\"['active']\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\"\r\n           [routerLink]=\"['/products/ch', {outlets: {primary: catalogItem.category0.category1?\r\n            'start/'+ catalogItem.category0.name +'/main' : 'category/'+ catalogItem.category0.name +'/noSubCategories',\r\n           productsSubmenu: 'category/'+ catalogItem.category0.name +'/main'}}]\">\r\n          <!--<i [ngClass]=\"catalogItem.category0.icon\"></i>-->\r\n          {{catalogItem.category0.name}}</a></li>\r\n    </ul>\r\n    <span  *ngIf=\"user && user.role !== 'Guest'\" class=\"navbar-text\">\r\n      <i class=\"material-icons\">person</i> {{user.role}}, {{user.name}}\r\n    </span>\r\n    <ul class=\"nav navbar-nav navbar-right\" (click)=\"hide()\">\r\n\r\n\r\n\r\n      <li class=\"nav-item\" *ngIf=\"user && user.role === 'User' || user.role === 'Manager' || user.role === 'Admin'\"\r\n          [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n\r\n      <!--<li class=\"nav-item\" *ngIf=\"user && user.role === 'Manager' ||user.role === 'Admin'\"-->\r\n          <!--[routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n        <!--<a class=\"nav-link\" [routerLink]=\"['/products-management',-->\r\n        <!--{outlets: {primary: 'add-product', productsManagementSubmenu: 'start'}}]\">-->\r\n          <!--Products</a></li>-->\r\n\r\n\r\n      <li class=\"nav-item\" *ngIf=\"user && user.role === 'Manager' || user.role === 'Admin'\"\r\n          [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/admin/ch', 'edit-product']\">\r\n          A</a></li>\r\n      <!--, {outlets: {primary: 'z', adminPanelSubmenu: 'z'}}-->\r\n\r\n      <li class=\"nav-item\" *ngIf=\"user && user.role === 'User' || user.role === 'Manager' || user.role === 'Admin'\"\r\n          [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a></li>\r\n      <li class=\"nav-item\" *ngIf=\"user && user.role === 'Guest'\"\r\n          [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a></li>\r\n      <li class=\"nav-item\" *ngIf=\"user && user.role === 'Admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a></li>\r\n      <li class=\"nav-item\" *ngIf=\"user && user.role === 'User' || user.role === 'Manager' ||user.role === 'Admin'\">\r\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n\r\n    </ul>\r\n\r\n  </div>\r\n</nav>\r\n"

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
        this.guest = {
            name: '',
            email: '',
            username: '',
            password: '',
            role: 'Guest',
        };
        this.user = this.guest;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localCatalog = this.catalogService.getCatalog();
        // On each change of route check user rights (getProfile)
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* NavigationStart */]; })
            .subscribe(function () {
            _this.authService.getProfile()
                .subscribe(function (user) { return _this.user = user; }, function (err) { return _this.user = _this.guest; });
        });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_catalog_service__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_catalog_service__["a" /* CatalogService */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/item/item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-text {\r\n  font-size: .85rem;\r\n}\r\n\r\n.card-title {\r\n  text-transform: capitalize;\r\n}\r\n\r\n.card {\r\n  margin-bottom: 2rem;\r\n  border: 0;\r\n  padding-left: .7rem;\r\n  padding-right: .7rem;\r\n}\r\n\r\n.card-title {\r\n  min-height: 4rem;\r\n  /*padding-bottom: 0.5rem;*/\r\n  text-align: center;\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .card-title {\r\n    margin-bottom: 0;\r\n  }\r\n  .item-text {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .card-title {\r\n    padding-bottom: 0.5rem;\r\n  }\r\n  .item-text {\r\n    min-height: 6rem;\r\n    padding-bottom: 0.5rem;\r\n  }\r\n  .album {\r\n    min-height: 28rem;\r\n  }\r\n}\r\n\r\n.item-text {\r\n  /*min-height: 8rem;*/\r\n  /*padding-bottom: 0.5rem;*/\r\n  text-align: justify;\r\n}\r\n\r\n.album {\r\n  /*min-height: 28rem;*/\r\n  padding-bottom: 0.5rem;\r\n  background-color: #f7f7f7;\r\n}\r\n\r\n.item-info-title {\r\n  font-size: .65rem;\r\n  padding-bottom: 0;\r\n  margin-bottom: 0;\r\n  text-align: right;\r\n}\r\n\r\n.item-info-value {\r\n  font-size: .85rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.img-container {\r\n  position: relative;\r\n}\r\n\r\n.button-light {\r\n  position: absolute;\r\n  top: calc(50% - 1.5rem);\r\n  top: -moz-calc(50% - 1.5rem);\r\n  left: calc(100% - 1.5rem);\r\n  top: -moz-calc(100% - 1.5rem);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"album\">\r\n\r\n\r\n    <div class=\"img-container clear-fix\">\r\n\r\n      <a *ngIf=\"parentComponentLink\" class=\"btn button-light\" [routerLink]=\"parentComponentLink\">\r\n        <i class=\"material-icons button-light-icon\">arrow_forward</i></a>\r\n\r\n      <img class=\"card-img-top\" src=\"{{product.mainImgSrc[0]}}\" alt=\"Зображення\"\r\n           (click)=\"onImageClick(product)\">\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title\">{{product.name}}</h4>\r\n      <p *ngIf=\"product.itemDescription\" class=\"card-text item-text text-muted\">{{product.itemDescription}}</p>\r\n\r\n\r\n      <p *ngIf=\"product.itemNumber\" class=\"card-text item-info-title text-muted\">Артикул\r\n        <span class=\"item-info-value\">{{product.itemNumber}}</span>\r\n      </p>\r\n      <p *ngIf=\"product.size\" class=\"card-text item-info-title text-muted\">\r\n        Висота x Ширина\r\n        <span class=\"item-info-value\">{{product.size.height}}</span>\r\n        х\r\n        <span class=\"item-info-value\">{{product.size.width}}</span>\r\n        см\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
        this.imageClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent.prototype.onImageClick = function (product) {
        this.imageClick.emit(product);
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ItemComponent.prototype, "imageClick", void 0);
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

/***/ "../../../../../src/app/components/shared/modal-img/modal-img.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.modal-body {\r\n  padding: 2px;\r\n}\r\n\r\n.modal-header {\r\n  padding-top: 3px;\r\n  padding-bottom: 3px;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/modal-img/modal-img.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modalImg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div *ngIf=\"product\" class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{product.name}}</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <img class=\"card-img-top\" src=\"{{product.mainImgSrc[0]}}\" alt=\"Зображення\" data-dismiss=\"modal\">\r\n      </div>\r\n      <!--<div class=\"modal-footer\">-->\r\n      <!--<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>-->\r\n      <!--</div>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/modal-img/modal-img.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalImgComponent; });
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


var ModalImgComponent = (function () {
    function ModalImgComponent() {
    }
    ModalImgComponent.prototype.ngOnInit = function () {
    };
    return ModalImgComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces_i_product__["IProduct"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces_i_product__["IProduct"]) === "function" && _a || Object)
], ModalImgComponent.prototype, "product", void 0);
ModalImgComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-img',
        template: __webpack_require__("../../../../../src/app/components/shared/modal-img/modal-img.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shared/modal-img/modal-img.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ModalImgComponent);

var _a;
//# sourceMappingURL=modal-img.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_img_modal_img_component__ = __webpack_require__("../../../../../src/app/components/shared/modal-img/modal-img.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_4__menu_h_menu_h_component__["a" /* MenuHComponent */],
            __WEBPACK_IMPORTED_MODULE_6__modal_img_modal_img_component__["a" /* ModalImgComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["e" /* RouterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__item_item_component__["a" /* ItemComponent */],
            __WEBPACK_IMPORTED_MODULE_6__modal_img_modal_img_component__["a" /* ModalImgComponent */],
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

module.exports = "<h2 class=\"page-header\">Увійти</h2>\r\n<form (ngSubmit)=\"onLoginSubmit(loginForm); loginForm.reset()\" #loginForm=\"ngForm\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">UserName</label>\r\n    <input type=\"text\" ngModel required\r\n           name=\"username\" class=\"form-control\" id=\"username\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" ngModel required\r\n           name=\"password\" class=\"form-control\" id=\"password\">\r\n  </div>\r\n  <button class=\"btn btn-primary\"\r\n          [disabled]=\"!loginForm.form.valid\">Увійти</button>\r\n</form>"

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
    LoginComponent.prototype.onLoginSubmit = function (form) {
        var _this = this;
        this.user = {
            username: form.value.username,
            password: form.value.password,
        };
        this.authService.authUser(this.user)
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
        }, function (err) {
            _this.flashMessage.show(err, 
            // err.status + ' ' + err.statusText,
            {
                cssClass: 'alert-danger',
                timeout: 5000
            });
            _this.router.navigate(['/login']);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
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
            _this.user = profile;
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
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

module.exports = "<h2 class=\"page-header\">Зареєструвати нового користувача</h2>\r\n<form (ngSubmit)=\"onRegisterSubmit(registerForm); registerForm.reset()\" #registerForm=\"ngForm\">\r\n  <div class=\"form-group\">\r\n    <label for=\"name\">Name</label>\r\n    <input ngModel required name=\"name\" class=\"form-control\" id=\"name\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">UserName</label>\r\n    <input ngModel required name=\"username\" class=\"form-control\" id=\"username\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <input ngModel required name=\"email\" class=\"form-control\" id=\"email\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input ngModel required name=\"password\" class=\"form-control\" id=\"password\">\r\n  </div>\r\n  <button class=\"btn btn-primary\" [disabled]=\"!registerForm.form.valid\">Зареэструватись</button>\r\n</form>"

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
    RegisterComponent.prototype.onRegisterSubmit = function (form) {
        var _this = this;
        var user = {
            name: form.value.name,
            email: form.value.email,
            username: form.value.username,
            password: form.value.password,
            role: 'User',
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
                // this.router.navigate(['/login']);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/users-management/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/components/users-management/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__("../../../../../src/app/components/users-management/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__("../../../../../src/app/components/users-management/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_CustomErrorHandler__ = __webpack_require__("../../../../../src/app/services/CustomErrorHandler.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import {Observable} from 'rxjs/Observable';

var UsersManagementModule = (function () {
    function UsersManagementModule() {
    }
    return UsersManagementModule;
}());
UsersManagementModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        exports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__services_CustomErrorHandler__["a" /* CustomErrorHandler */],
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
            itemNumberPrefix: 'і',
            name: 'іграшки',
            icon: '',
        }
    },
    {
        _id: 'x',
        category0: {
            itemNumberPrefix: 'в',
            name: 'віночки',
            icon: '',
        }
    },
    {
        _id: 'x',
        category0: {
            itemNumberPrefix: 'б',
            name: 'букети',
            icon: '',
            category1: [
                {
                    name: 'букети з квітів',
                    itemDescription: 'Живі квіти',
                    icon: '',
                    mainImgSrc: ['./assets/images/composition-flowers_wedding-pion.jpg'],
                },
                {
                    name: 'букети з цукерок',
                    itemDescription: 'Цукерки, декоративні елементи',
                    icon: '',
                    mainImgSrc: ['./assets/images/composition-sweets_delicacy.jpg'],
                },
                {
                    name: 'букети з фруктів',
                    itemDescription: 'Фрукти, овочі та зелень',
                    icon: '',
                    mainImgSrc: ['./assets/images/composition-veg-fr_with-pepper.jpg'],
                }
            ],
        }
    },
    {
        _id: 'x',
        category0: {
            itemNumberPrefix: 'д',
            name: 'декор',
            icon: '',
            category1: [
                {
                    name: 'весільний декор',
                    itemDescription: 'Весільний декор для вашого свята: бокали, ' +
                        'скинька для обручок, свічки, кошичок для цукерок, ' +
                        'скринька для подарунків, підв’язка нареченої',
                    icon: '',
                    mainImgSrc: ['./assets/images/decor_wedding1.jpg'],
                },
            ],
        }
    },
];
//# sourceMappingURL=catalog.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth-admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthAdminGuard; });
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



var AuthAdminGuard = (function () {
    function AuthAdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthAdminGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.getProfile()
            .map(function (result) {
            if (result.role === 'Admin') {
                console.log('authGuardAdmin - canActivate', result.role);
                return true;
            }
            else {
                console.log('authGuardAdmin - canActivate', result.role);
                _this.router.navigate(['/login']);
                return false;
            }
        });
        // .take(1)
        // .do ((result) => {
        //   if (!result) {
        //     this.router.navigate['/login'];
        //   }
        //   return false;
        // });
    };
    AuthAdminGuard.prototype.canActivateChild = function (route, state) {
        var _this = this;
        return this.authService.getProfile()
            .map(function (result) {
            if (result.role === 'Admin') {
                console.log('authGuardAdmin - canActivateChild', result.role);
                return true;
            }
            else {
                console.log('authGuardAdmin - canActivateChild', result.role);
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    return AuthAdminGuard;
}());
AuthAdminGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object])
], AuthAdminGuard);

var _a, _b;
//# sourceMappingURL=auth-admin.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth-manager.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthManagerGuard; });
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



var AuthManagerGuard = (function () {
    function AuthManagerGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthManagerGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.getProfile()
            .map(function (result) {
            if (result.role === 'Admin' || result.role === 'Manager') {
                console.log('authManagerGuard - canActivate', result.role);
                return true;
            }
            else {
                console.log('authManagerGuard - canActivate', result.role);
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    AuthManagerGuard.prototype.canActivateChild = function (route, state) {
        var _this = this;
        return this.authService.getProfile()
            .map(function (result) {
            if (result.role === 'Admin' || result.role === 'Manager') {
                console.log('authManagerGuard - canActivateChild', result.role);
                return true;
            }
            else {
                console.log('authManagerGuard - canActivateChild', result.role);
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    return AuthManagerGuard;
}());
AuthManagerGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object])
], AuthManagerGuard);

var _a, _b;
//# sourceMappingURL=auth-manager.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth-user.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthUserGuard; });
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



var AuthUserGuard = (function () {
    function AuthUserGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthUserGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.getProfile()
            .map(function (result) {
            if (result.role === 'Admin' || result.role === 'Manager' || result.role === 'User') {
                console.log('authManagerGuard - canActivate', result.role);
                return true;
            }
            else {
                console.log('authManagerGuard - canActivate', result.role);
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    AuthUserGuard.prototype.canActivateChild = function (route, state) {
        var _this = this;
        return this.authService.getProfile()
            .map(function (result) {
            if (result.role === 'Admin' || result.role === 'Manager' || result.role === 'User') {
                console.log('authManagerGuard - canActivateChild', result.role);
                return true;
            }
            else {
                console.log('authManagerGuard - canActivateChild', result.role);
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    return AuthUserGuard;
}());
AuthUserGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object])
], AuthUserGuard);

var _a, _b;
//# sourceMappingURL=auth-user.guard.js.map

/***/ }),

/***/ "../../../../../src/app/interfaces/i-product.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=i-product.js.map

/***/ }),

/***/ "../../../../../src/app/services/CustomErrorHandler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CustomErrorHandler = (function () {
    function CustomErrorHandler() {
    }
    CustomErrorHandler.prototype.httpErrorHandler = function (err) {
        if (err.status === 401) {
            this.statusText = 'Не авторизовано';
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(this.statusText);
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw('Помилка сервера');
    };
    return CustomErrorHandler;
}());
CustomErrorHandler = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], CustomErrorHandler);

//# sourceMappingURL=CustomErrorHandler.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CustomErrorHandler__ = __webpack_require__("../../../../../src/app/services/CustomErrorHandler.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';



var AuthService = (function () {
    function AuthService(http, customErrorHandler) {
        this.http = http;
        this.customErrorHandler = customErrorHandler;
    }
    // register.component підписується на registerUser
    // юзер з хедером передається на сервер
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* config */].serverUrl + 'api/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* config */].serverUrl + 'api/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.customErrorHandler.httpErrorHandler);
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
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* config */].serverUrl + 'api/profile', { headers: headers })
            .map(function (res) {
            // console.log('res', res.json());
            return res.json();
        })
            .catch(this.customErrorHandler.httpErrorHandler);
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
    AuthService.prototype.loggedInRole = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* config */].serverUrl + 'api/role', { headers: headers })
            .map(function (res) {
            return res.json();
        })
            .catch(this.customErrorHandler.httpErrorHandler);
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__CustomErrorHandler__["a" /* CustomErrorHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__CustomErrorHandler__["a" /* CustomErrorHandler */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
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
                return (__WEBPACK_IMPORTED_MODULE_3__data_catalog__["a" /* localCatalog */][i]);
                // return localCatalog[i].category0.category1;
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
        // const data = {key: this.authService.getCSRFCookie()};
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        // params.set('category', 'Toys');
        params.set('obj', JSON.stringify(searchQuery));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, params: params });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/getQueriedProducts', 
        // data,
        options)
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