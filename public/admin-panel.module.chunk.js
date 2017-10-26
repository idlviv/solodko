webpackJsonp(["admin-panel.module"],{

/***/ "../../../../../src/app/components/admin-panel/admin-panel-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPanelRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_admin_guard__ = __webpack_require__("../../../../../src/app/guards/auth-admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_auth_manager_guard__ = __webpack_require__("../../../../../src/app/guards/auth-manager.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_panel_component__ = __webpack_require__("../../../../../src/app/components/admin-panel/admin-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_panel_submenu_admin_panel_submenu_component__ = __webpack_require__("../../../../../src/app/components/admin-panel/admin-panel-submenu/admin-panel-submenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_management_add_product_add_product_component__ = __webpack_require__("../../../../../src/app/components/admin-panel/products-management/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_management_edit_product_edit_product_component__ = __webpack_require__("../../../../../src/app/components/admin-panel/products-management/edit-product/edit-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_management_add_user_add_user_component__ = __webpack_require__("../../../../../src/app/components/admin-panel/users-management/add-user/add-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import {ProductsManagementComponent} from './products-management.component';
// import {EditProductComponent} from './products/edit-product/edit-product.component';
// import {ProductsManagementSubmenuComponent} from './products-management-submenu/products-management-submenu.component';
// import {AddProductComponent} from './products/add-product/add-product.component';







var adminRoutes = [
    {
        path: 'ch',
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_manager_guard__["a" /* AuthManagerGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_4__admin_panel_component__["a" /* AdminPanelComponent */],
        children: [
            {
                path: 'add-product',
                component: __WEBPACK_IMPORTED_MODULE_6__products_management_add_product_add_product_component__["a" /* AddProductComponent */],
            },
            {
                path: 'edit-product',
                component: __WEBPACK_IMPORTED_MODULE_7__products_management_edit_product_edit_product_component__["a" /* EditProductComponent */],
            },
            {
                path: 'add-user',
                canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_admin_guard__["a" /* AuthAdminGuard */]],
                component: __WEBPACK_IMPORTED_MODULE_8__users_management_add_user_add_user_component__["a" /* AddUserComponent */],
            },
            {
                path: '',
                outlet: 'adminPanelSubmenu',
                component: __WEBPACK_IMPORTED_MODULE_5__admin_panel_submenu_admin_panel_submenu_component__["a" /* AdminPanelSubmenuComponent */],
            },
        ],
    },
];
var AdminPanelRoutingModule = (function () {
    function AdminPanelRoutingModule() {
    }
    return AdminPanelRoutingModule;
}());
AdminPanelRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* RouterModule */].forChild(adminRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* RouterModule */]]
    })
], AdminPanelRoutingModule);

//# sourceMappingURL=admin-panel-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/admin-panel-submenu/admin-panel-submenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li.active {\r\n  border-right: 2px #0000ff solid;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/admin-panel-submenu/admin-panel-submenu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"bg-light sidebar\">\r\n  <ul class=\"nav flex-md-column nav-pills\">\r\n    <li class=\"nav-item\" *ngFor=\"let menuItem of menuList\">\r\n      <a *ngIf=\"checkPermission(user, menuItem)\"\r\n         class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n         [routerLink]=\"['/admin/ch', {outlets: {primary: menuItem.route}}]\">\r\n        {{menuItem.name}}\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<!--<p>admin  side</p>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/admin-panel-submenu/admin-panel-submenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPanelSubmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminPanelSubmenuComponent = (function () {
    function AdminPanelSubmenuComponent(authService) {
        this.authService = authService;
        this.guest = {
            name: '',
            email: '',
            username: '',
            password: '',
            role: 'Guest',
        };
        this.user = this.guest;
    }
    AdminPanelSubmenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getLoggedUser()
            .subscribe(function (user) { return _this.user = user; });
        this.menuList = [
            {
                name: 'Додати товар',
                route: 'add-product',
                permission: ['Manager', 'Admin'],
            },
            {
                name: 'Редагувати товар',
                route: 'edit-product',
                permission: ['Manager', 'Admin'],
            },
            {
                name: 'Додати користувача',
                route: 'add-user',
                permission: ['Admin'],
            },
        ];
    };
    AdminPanelSubmenuComponent.prototype.checkPermission = function (user, menuItem) {
        for (var i = 0; i < menuItem.permission.length; i++) {
            if (menuItem.permission[i] === user.role) {
                return true;
            }
        }
        return false;
    };
    return AdminPanelSubmenuComponent;
}());
AdminPanelSubmenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-panel-submenu',
        template: __webpack_require__("../../../../../src/app/components/admin-panel/admin-panel-submenu/admin-panel-submenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin-panel/admin-panel-submenu/admin-panel-submenu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AdminPanelSubmenuComponent);

var _a;
//# sourceMappingURL=admin-panel-submenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/admin-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/admin-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-2\">\r\n    <router-outlet name=\"adminPanelSubmenu\"></router-outlet>\r\n  </div>\r\n  <div class=\"col-md-10\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/admin-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPanelComponent; });
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

var AdminPanelComponent = (function () {
    function AdminPanelComponent() {
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
    };
    return AdminPanelComponent;
}());
AdminPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-panel',
        template: __webpack_require__("../../../../../src/app/components/admin-panel/admin-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin-panel/admin-panel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminPanelComponent);

//# sourceMappingURL=admin-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/admin-panel.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelModule", function() { return AdminPanelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_panel_component__ = __webpack_require__("../../../../../src/app/components/admin-panel/admin-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_panel_submenu_admin_panel_submenu_component__ = __webpack_require__("../../../../../src/app/components/admin-panel/admin-panel-submenu/admin-panel-submenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_panel_routing_module__ = __webpack_require__("../../../../../src/app/components/admin-panel/admin-panel-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_management_products_management_module__ = __webpack_require__("../../../../../src/app/components/admin-panel/products-management/products-management.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_management_users_management_module__ = __webpack_require__("../../../../../src/app/components/admin-panel/users-management/users-management.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AdminPanelModule = (function () {
    function AdminPanelModule() {
    }
    return AdminPanelModule;
}());
AdminPanelModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__admin_panel_component__["a" /* AdminPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_3__admin_panel_submenu_admin_panel_submenu_component__["a" /* AdminPanelSubmenuComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            // SharedModule,
            __WEBPACK_IMPORTED_MODULE_5__admin_panel_routing_module__["a" /* AdminPanelRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__products_management_products_management_module__["a" /* ProductsManagementModule */],
            __WEBPACK_IMPORTED_MODULE_7__users_management_users_management_module__["a" /* UsersManagementModule */],
        ],
    })
], AdminPanelModule);

//# sourceMappingURL=admin-panel.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/products-management/add-product/add-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948;\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #dc3545;\r\n}\r\n\r\n.input-group-sm {\r\n  padding: 0;\r\n}\r\n\r\n#itemNumber {\r\n  letter-spacing: 0.5rem\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/products-management/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Додати товар</h2>\r\n  <form (ngSubmit)=\"onAddProductSubmit(addProductForm); addProductForm.reset()\" #addProductForm=\"ngForm\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-md-4\" for=\"category0\">Категорія</label>\r\n            <select class=\"form-control form-control-sm custom-select col-md-8\"  id=\"category0\"\r\n                    required (change)=\"onSelectCategory0($event)\"\r\n                    [(ngModel)]=\"category0\" name=\"category0\">\r\n              <option *ngFor=\"let catalogItem of catalog; let i = index\" [value]=\"catalogItem.category0.name\">\r\n                {{catalogItem.category0.name}}</option>\r\n            </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n         <label class=\"col-md-4\" for=\"category1\">Підкатегорія</label>\r\n          <select class=\"form-control form-control-sm custom-select col-md-8\"  id=\"category1\"\r\n                  [required]=\"isCategory1\" [disabled]=\"!category0 || !isCategory1\"\r\n                  [(ngModel)]=\"category1\" name=\"category1\">\r\n            <option *ngFor=\"let catalogItem of catalogCategory1\" [value]=\"catalogItem.name\">\r\n              {{catalogItem.name}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"name\">Заголовок</label>\r\n          <input type=\"text\" ngModel name=\"name\" class=\"form-control form-control-sm col-md-8\" id=\"name\" required>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"mainImgSrc\">Image source</label>\r\n          <input type=\"text\" ngModel name=\"mainImgSrc\" class=\"form-control form-control-sm col-md-8\" id=\"mainImgSrc\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row form-group\">\r\n      <label class=\"col-md-2\" for=\"itemDescription\">Опис</label>\r\n      <textarea type=\"text\" ngModel name=\"itemDescription\" class=\"form-control form-control-sm col-md-10\"\r\n                id=\"itemDescription\" required=\"\" rows=\"2\"></textarea>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"itemNumber\">Артикул</label>\r\n          <div class=\"input-group input-group-sm col-md-8\">\r\n\r\n            <input type=\"text\"  name=\"itemNumber\" class=\"form-control form-control-sm\"\r\n                   id=\"itemNumber\" required [(ngModel)]=\"freeItemNumber\">\r\n            <!--<span class=\"input-group-btn input-group-sm\" >-->\r\n               <!--<button class=\"btn btn-secondary\" (click)=\"itemNumberInputEnable()\"-->\r\n                       <!--[disabled]=\"!isItemNumberInputDisabled\" type=\"button\">Змінити</button>-->\r\n            <!--</span>-->\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"price\">Ціна</label>\r\n          <div class=\"input-group input-group-sm col-md-8\">\r\n            <input type=\"text\" ngModel name=\"price\" class=\"form-control form-control-sm\" id=\"price\">\r\n            <span class=\"input-group-addon\">0,00 грн</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"discount\">Знижка</label>\r\n          <div class=\"input-group input-group-sm col-md-8\">\r\n            <input type=\"text\" ngModel name=\"discount\" class=\"form-control form-control-sm\" id=\"discount\">\r\n            <span class=\"input-group-addon\">%</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" ngModel name=\"showOnMainPage\"\r\n                     id=\"showOnMainPage\">   На головній</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"width\">Ширина</label>\r\n          <div class=\"input-group input-group-sm col-md-8\">\r\n            <input type=\"text\" ngModel name=\"width\" class=\"form-control form-control-sm\" id=\"width\">\r\n            <span class=\"input-group-addon\">см</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"height\">Висота</label>\r\n          <div class=\"input-group input-group-sm col-md-8\">\r\n            <input type=\"text\" ngModel name=\"height\" class=\"form-control form-control-sm\" id=\"height\">\r\n            <span class=\"input-group-addon\">см</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button class=\"btn button-action button-size-3\" [disabled]=\"!addProductForm.form.valid\">\r\n    <i class=\"material-icons button-action-icon button-icon-size-3\">done</i></button>\r\n    <!--<input type=\"submit\" class=\"btn button-primary\" [disabled]=\"!addProductForm.form.valid\" value=\"Add\">-->\r\n  </form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/products-management/add-product/add-product.component.ts":
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
        this.isItemNumberInputDisabled = true;
        this.updateProducts = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddProductComponent.prototype.ngOnInit = function () {
        this.catalog = this.catalogService.getCatalog();
    };
    AddProductComponent.prototype.itemNumberInputEnable = function () {
        this.isItemNumberInputDisabled = !this.isItemNumberInputDisabled;
    };
    AddProductComponent.prototype.onSelectCategory0 = function (event) {
        var _this = this;
        this.itemNumbersAll = [];
        for (var i = 0; i < this.catalog.length; i++) {
            if (this.catalog[i].category0.name === event.srcElement.value) {
                this.itemNumberPrefix = this.catalog[i].category0.itemNumberPrefix;
                var x = this.productService.getQueriedProducts({ 'category0': this.catalog[i].category0.name });
                x
                    .map(function (item) {
                    for (var i_1 = 0; i_1 < item.length; i_1++) {
                        _this.itemNumbersAll.push(+item[i_1].itemNumber.slice(1));
                    }
                    console.log('not sorted', _this.itemNumbersAll);
                    function compareNumeric(a, b) {
                        if (a > b)
                            return 1;
                        if (a < b)
                            return -1;
                    }
                    _this.itemNumbersAll.sort(compareNumeric);
                    console.log('sorted', _this.itemNumbersAll);
                    for (var i_2 = 0; i_2 < _this.itemNumbersAll.length; i_2++) {
                        if (_this.itemNumbersAll[i_2] !== i_2 + 1) {
                            return i_2 + 1;
                        }
                    }
                    return _this.itemNumbersAll.length + 1;
                })
                    .subscribe(function (item) {
                    var output = item.toString();
                    while (output.length < 3) {
                        output = '0' + output;
                        console.log(output);
                    }
                    return _this.freeItemNumber = _this.itemNumberPrefix + output;
                });
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
    };
    AddProductComponent.prototype.onAddProductSubmit = function (form) {
        var _this = this;
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
        template: __webpack_require__("../../../../../src/app/components/admin-panel/products-management/add-product/add-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin-panel/products-management/add-product/add-product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_catalog_service__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_catalog_service__["a" /* CatalogService */]) === "function" && _f || Object])
], AddProductComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=add-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/products-management/edit-product/edit-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active {\r\n  background-color: rgba(159, 222, 197, 0.5);\r\n  color: white;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.edit-product-table-first-cell {\r\n  width: 5rem;\r\n  text-align: center;\r\n}\r\n\r\n.edit-product-table-last-cell {\r\n  width: 2.5rem;\r\n  text-align: center;\r\n}\r\n\r\n.edit-product-table-cells {\r\n  /*width: 90%;*/\r\n  /*height: 90%;*/\r\n  vertical-align: middle;\r\n  padding: .1rem;\r\n}\r\n\r\n.edit-product-table-cells-input {\r\n  padding: .1rem .2rem;\r\n}\r\n\r\n.material-icons.md-18 {\r\n  font-size: 18px;\r\n}\r\n\r\n.material-icons.md-24 {\r\n  font-size: 24px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/products-management/edit-product/edit-product.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Edit product</h2>\r\n<table *ngIf=\"products\"  class=\"table table-sm\">\r\n  <form *ngFor=\"let product of products; let i = index\" (submit)=\"onEditProductSubmit(product, i)\"\r\n        #editProductForm=\"ngForm\">\r\n    <thead *ngIf=\"product === products[0]\">\r\n      <tr>\r\n        <th class=\"edit-product-table-first-cell\">\r\n        </th>\r\n        <th>Category</th>\r\n        <th>Sub Category</th>\r\n        <th>Item Number</th>\r\n        <th>Name</th>\r\n        <th>Price</th>\r\n        <th>Img source</th>\r\n        <th>Description</th>\r\n        <th>On main page 0/1</th>\r\n        <th>Discount %</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr [class.active]=\"i === selectedRow\" >\r\n          <td class=\"edit-product-table-first-cell\">\r\n\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Edit\">\r\n              <button type=\"button\" (click)=\"onClickEditBtn(i, product._id)\" class=\"btn button-light button-size-2\"\r\n                      [class.hide]=\"!isEditBtnShow\">\r\n                <i class=\"material-icons button-light-icon button-icon-size-2\">mode_edit</i>\r\n                <!--<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>-->\r\n              </button>\r\n              <button type=\"button\" (click)=\"onClickEditBtn(i, product._id)\" class=\"btn button-light button-size-2\"\r\n                      [class.hide]=\"!isEditBtnShow\">\r\n                <i class=\"material-icons button-light-icon button-icon-size-2\">border_color</i>\r\n                <!--<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>-->\r\n              </button>\r\n            </div>\r\n\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Edit\">\r\n              <button type=\"submit\" class=\"btn btn button-light button-size-2\" [class.hide]=\"!(i === selectedRow)\">\r\n                <!--<i class=\"fa fa-check\" aria-hidden=\"true\"></i>-->\r\n                <i class=\"material-icons button-light-icon button-icon-size-2\">done</i>\r\n              </button>\r\n\r\n              <button type=\"button\" class=\"btn btn button-light button-size-2\" (click)=\"onClickCancelEditBtn(i, product._id)\"\r\n                      [class.hide]=\"!(i === selectedRow)\">\r\n                <!--<i class=\"fa fa-ban\" aria-hidden=\"true\"></i>-->\r\n                <i class=\"material-icons button-light-icon button-icon-size-2\">highlight_off</i>\r\n              </button>\r\n            </div>\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.category0\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"category0\" #category0=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.category1\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"category1\" #category1=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.itemNumber\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"itemNumber\" #itemNumber=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.name\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"name\" #name=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.price\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"price\" #price=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.mainImgSrc\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"mainImgSrc\" #mainImgSrc=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.itemDescription\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"itemDescription\" #itemDescription=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n           <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.showOnMainPage\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"showOnMainPage\" #showOnMainPage=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n           <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.discount\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"discount\" #discount=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.size.width\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"width\" #width=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.size.height\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"height\" #height=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n          <td class=\"edit-product-table-last-cell\">\r\n\r\n            <button type=\"button\" class=\"btn btn button-light button-size-2\" (click)=\"onClickDelBtn(i, product._id)\"\r\n                    [class.hidden]=\"!(i === selectedRow)\">\r\n              <i class=\"material-icons button-light-icon button-icon-size-2\">delete_sweep</i>\r\n\r\n              <!--<i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>-->\r\n            </button>\r\n\r\n          </td>\r\n        </tr>\r\n    </tbody>\r\n  </form>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/products-management/edit-product/edit-product.component.ts":
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
        template: __webpack_require__("../../../../../src/app/components/admin-panel/products-management/edit-product/edit-product.component.html"),
        // providers: [ProductService],
        styles: [__webpack_require__("../../../../../src/app/components/admin-panel/products-management/edit-product/edit-product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */]) === "function" && _c || Object])
], EditProductComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/products-management/products-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/products-management/products-management.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  products-management works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/products-management/products-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsManagementComponent; });
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

var ProductsManagementComponent = (function () {
    function ProductsManagementComponent() {
    }
    ProductsManagementComponent.prototype.ngOnInit = function () {
    };
    return ProductsManagementComponent;
}());
ProductsManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products-management',
        template: __webpack_require__("../../../../../src/app/components/admin-panel/products-management/products-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin-panel/products-management/products-management.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductsManagementComponent);

//# sourceMappingURL=products-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/products-management/products-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_management_component__ = __webpack_require__("../../../../../src/app/components/admin-panel/products-management/products-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_product_add_product_component__ = __webpack_require__("../../../../../src/app/components/admin-panel/products-management/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_product_edit_product_component__ = __webpack_require__("../../../../../src/app/components/admin-panel/products-management/edit-product/edit-product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import {SharedModule} from '../../shared/shared.module';
// import {ProductsManagementRoutingModule} from './products-management-routing.module';




var ProductsManagementModule = (function () {
    function ProductsManagementModule() {
    }
    return ProductsManagementModule;
}());
ProductsManagementModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            // SharedModule,
            // ProductsManagementRoutingModule,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__add_product_add_product_component__["a" /* AddProductComponent */],
            __WEBPACK_IMPORTED_MODULE_5__edit_product_edit_product_component__["a" /* EditProductComponent */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__products_management_component__["a" /* ProductsManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_4__add_product_add_product_component__["a" /* AddProductComponent */],
            __WEBPACK_IMPORTED_MODULE_5__edit_product_edit_product_component__["a" /* EditProductComponent */],
        ]
    })
], ProductsManagementModule);

//# sourceMappingURL=products-management.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/users-management/add-user/add-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/users-management/add-user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Зареєструвати нового користувача</h2>\n<form (ngSubmit)=\"onRegisterSubmit(registerForm); registerForm.reset()\" #registerForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input ngModel required name=\"name\" class=\"form-control\" id=\"name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"username\">UserName</label>\n    <input ngModel required name=\"username\" class=\"form-control\" id=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input ngModel required name=\"email\" class=\"form-control\" id=\"email\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input ngModel required name=\"password\" class=\"form-control\" id=\"password\">\n  </div>\n  <button class=\"btn btn-primary\" [disabled]=\"!registerForm.form.valid\">Зареэструватись</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/users-management/add-user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
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





var AddUserComponent = (function () {
    function AddUserComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    AddUserComponent.prototype.ngOnInit = function () {
    };
    AddUserComponent.prototype.onRegisterSubmit = function (form) {
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
    return AddUserComponent;
}());
AddUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-user',
        template: __webpack_require__("../../../../../src/app/components/admin-panel/users-management/add-user/add-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin-panel/users-management/add-user/add-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], AddUserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/users-management/users-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/users-management/users-management.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  users-management works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/users-management/users-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersManagementComponent; });
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

var UsersManagementComponent = (function () {
    function UsersManagementComponent() {
    }
    UsersManagementComponent.prototype.ngOnInit = function () {
    };
    return UsersManagementComponent;
}());
UsersManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users-management',
        template: __webpack_require__("../../../../../src/app/components/admin-panel/users-management/users-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin-panel/users-management/users-management.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UsersManagementComponent);

//# sourceMappingURL=users-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/users-management/users-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_management_component__ = __webpack_require__("../../../../../src/app/components/admin-panel/users-management/users-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_user_add_user_component__ = __webpack_require__("../../../../../src/app/components/admin-panel/users-management/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__users_management_component__["a" /* UsersManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_3__add_user_add_user_component__["a" /* AddUserComponent */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__users_management_component__["a" /* UsersManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_3__add_user_add_user_component__["a" /* AddUserComponent */],
        ]
    })
], UsersManagementModule);

//# sourceMappingURL=users-management.module.js.map

/***/ })

});
//# sourceMappingURL=admin-panel.module.chunk.js.map