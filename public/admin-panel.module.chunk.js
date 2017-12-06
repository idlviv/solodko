webpackJsonp(["admin-panel.module"],{

/***/ "../../../../../src/app/components/admin-panel/admin-panel-routing.module.ts":
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
// import {ProductsManagementComponent} from './products-management.component';
// import {EditProductComponent} from './products/edit-product/edit-product.component';
// import {ProductsManagementSubmenuComponent} from './products-management-submenu/products-management-submenu.component';
// import {AddProductComponent} from './products/add-product/add-product.component';
var auth_admin_guard_1 = __webpack_require__("../../../../../src/app/guards/auth-admin.guard.ts");
var auth_manager_guard_1 = __webpack_require__("../../../../../src/app/guards/auth-manager.guard.ts");
var admin_panel_component_1 = __webpack_require__("../../../../../src/app/components/admin-panel/admin-panel.component.ts");
var admin_panel_submenu_component_1 = __webpack_require__("../../../../../src/app/components/admin-panel/admin-panel-submenu/admin-panel-submenu.component.ts");
var add_product_component_1 = __webpack_require__("../../../../../src/app/components/admin-panel/products-management/add-product/add-product.component.ts");
var edit_product_component_1 = __webpack_require__("../../../../../src/app/components/admin-panel/products-management/edit-product/edit-product.component.ts");
var signup_component_1 = __webpack_require__("../../../../../src/app/components/users/login/signup/signup.component.ts");
var adminRoutes = [
    {
        path: 'ch',
        canActivateChild: [auth_manager_guard_1.AuthManagerGuard],
        component: admin_panel_component_1.AdminPanelComponent,
        children: [
            // {
            //   path: 'add-product/0',
            //   component: AddProductComponent,
            // },
            {
                path: 'add-product/:_id',
                component: add_product_component_1.AddProductComponent,
            },
            {
                path: 'edit-product',
                component: edit_product_component_1.EditProductComponent,
            },
            {
                path: 'add-user',
                canActivate: [auth_admin_guard_1.AuthAdminGuard],
                component: signup_component_1.SignupComponent,
            },
            {
                path: '',
                outlet: 'adminPanelSubmenu',
                component: admin_panel_submenu_component_1.AdminPanelSubmenuComponent,
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
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(adminRoutes)
        ],
        exports: [router_1.RouterModule]
    })
], AdminPanelRoutingModule);
exports.AdminPanelRoutingModule = AdminPanelRoutingModule;
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

module.exports = "<!--<nav class=\"bg-light sidebar\">-->\r\n  <ul class=\"nav flex-md-column nav-pills\">\r\n    <li class=\"nav-item\" *ngFor=\"let menuItem of menuList\">\r\n      <a *ngIf=\"checkPermission(user, menuItem)\"\r\n         class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n         [routerLink]=\"['/admin/ch', {outlets: {primary: menuItem.route}}]\">\r\n        {{menuItem.name}}\r\n      </a>\r\n    </li>\r\n  </ul>\r\n<!--</nav>-->\r\n<!--<p>admin  side</p>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/admin-panel-submenu/admin-panel-submenu.component.ts":
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
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var AdminPanelSubmenuComponent = (function () {
    function AdminPanelSubmenuComponent(authService) {
        this.authService = authService;
        this.guest = {
            name: '',
            surname: '',
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
                route: 'add-product/new',
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
                permission: ['Manager', 'Admin'],
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
    core_1.Component({
        selector: 'app-admin-panel-submenu',
        template: __webpack_require__("../../../../../src/app/components/admin-panel/admin-panel-submenu/admin-panel-submenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin-panel/admin-panel-submenu/admin-panel-submenu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object])
], AdminPanelSubmenuComponent);
exports.AdminPanelSubmenuComponent = AdminPanelSubmenuComponent;
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
var AdminPanelComponent = (function () {
    function AdminPanelComponent() {
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
    };
    return AdminPanelComponent;
}());
AdminPanelComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-panel',
        template: __webpack_require__("../../../../../src/app/components/admin-panel/admin-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin-panel/admin-panel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminPanelComponent);
exports.AdminPanelComponent = AdminPanelComponent;
//# sourceMappingURL=admin-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/admin-panel.module.ts":
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
var admin_panel_component_1 = __webpack_require__("../../../../../src/app/components/admin-panel/admin-panel.component.ts");
var admin_panel_submenu_component_1 = __webpack_require__("../../../../../src/app/components/admin-panel/admin-panel-submenu/admin-panel-submenu.component.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var admin_panel_routing_module_1 = __webpack_require__("../../../../../src/app/components/admin-panel/admin-panel-routing.module.ts");
var products_management_module_1 = __webpack_require__("../../../../../src/app/components/admin-panel/products-management/products-management.module.ts");
var users_management_module_1 = __webpack_require__("../../../../../src/app/components/admin-panel/users-management/users-management.module.ts");
var users_module_1 = __webpack_require__("../../../../../src/app/components/users/users.module.ts");
var AdminPanelModule = (function () {
    function AdminPanelModule() {
    }
    return AdminPanelModule;
}());
AdminPanelModule = __decorate([
    core_1.NgModule({
        declarations: [
            admin_panel_component_1.AdminPanelComponent,
            admin_panel_submenu_component_1.AdminPanelSubmenuComponent,
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            admin_panel_routing_module_1.AdminPanelRoutingModule,
            products_management_module_1.ProductsManagementModule,
            users_management_module_1.UsersManagementModule,
            users_module_1.UsersModule,
        ],
    })
], AdminPanelModule);
exports.AdminPanelModule = AdminPanelModule;
//# sourceMappingURL=admin-panel.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/products-management/add-product/add-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-group-sm {\r\n  padding: 0;\r\n}\r\n\r\n#itemNumber {\r\n  letter-spacing: 0.5rem\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/products-management/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Додати товар</h2>\r\n<!--<div *ngFor=\"let product of products$ | async\">-->\r\n<div *ngIf=\"product\">\r\n  <form (ngSubmit)=\"onAddProductSubmit(addProductForm); addProductForm.reset()\" #addProductForm=\"ngForm\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-md-4\" for=\"category0\">Категорія</label>\r\n            <select class=\"form-control form-control-sm custom-select col-md-8\"  id=\"category0\"\r\n                    required (change)=\"onSelectCategory0($event)\"\r\n                    [(ngModel)]=\"product.category0\" name=\"category0\">\r\n              <option *ngFor=\"let catalogItem of catalog; let i = index\" [value]=\"catalogItem.category0.name\">\r\n                {{catalogItem.category0.name}}</option>\r\n            </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group row\">\r\n         <label class=\"col-md-4\" for=\"category1\">Підкатегорія</label>\r\n          <select class=\"form-control form-control-sm custom-select col-md-8\"  id=\"category1\"\r\n                  [(ngModel)]=\"product.category1\" name=\"category1\"\r\n                  [required]=\"isCategory1\" [disabled]=\"!isCategory1\">\r\n            <option *ngFor=\"let catalogItem of category1List\" [value]=\"catalogItem.name\">\r\n              {{catalogItem.name}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"name\">Заголовок</label>\r\n          <input type=\"text\" [(ngModel)]=\"product.name\" name=\"name\"\r\n                 class=\"form-control form-control-sm col-md-8\" id=\"name\" required>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"mainImgSrc\">Image source</label>\r\n          <input type=\"text\" [(ngModel)]=\"product.mainImgSrc\" name=\"mainImgSrc\"\r\n                 class=\"form-control form-control-sm col-md-8\" id=\"mainImgSrc\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row form-group\">\r\n      <label class=\"col-md-2\" for=\"itemDescription\">Опис</label>\r\n      <textarea type=\"text\" [(ngModel)]=\"product.itemDescription\" name=\"itemDescription\"\r\n                class=\"form-control form-control-sm col-md-10\"\r\n                id=\"itemDescription\" required=\"\" rows=\"2\"></textarea>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"itemNumber\">Артикул</label>\r\n          <div class=\"input-group input-group-sm col-md-8\">\r\n\r\n            <input type=\"text\"  name=\"itemNumber\" class=\"form-control form-control-sm\"\r\n                   id=\"itemNumber\" required [(ngModel)]=\"product.itemNumber\">\r\n            <!--<span class=\"input-group-btn input-group-sm\" >-->\r\n               <!--<button class=\"btn btn-secondary\" (click)=\"itemNumberInputEnable()\"-->\r\n                       <!--[disabled]=\"!isItemNumberInputDisabled\" type=\"button\">Змінити</button>-->\r\n            <!--</span>-->\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"price\">Ціна</label>\r\n          <div class=\"input-group input-group-sm col-md-8\">\r\n            <input type=\"text\" [(ngModel)]=\"product.price\" name=\"price\" class=\"form-control form-control-sm\" id=\"price\">\r\n            <span class=\"input-group-addon\">0,00 грн</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"discount\">Знижка</label>\r\n          <div class=\"input-group input-group-sm col-md-8\">\r\n            <input type=\"text\" ngModel [(ngModel)]=\"product.discount\" name=\"discount\" class=\"form-control form-control-sm\" id=\"discount\">\r\n            <span class=\"input-group-addon\">%</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"product.showOnMainPage\" name=\"showOnMainPage\"\r\n                     id=\"showOnMainPage\">   На головній</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"width\">Ширина</label>\r\n          <div class=\"input-group input-group-sm col-md-8\">\r\n            <input type=\"text\" [(ngModel)]=\"product.size.width\" name=\"width\" class=\"form-control form-control-sm\" id=\"width\">\r\n            <span class=\"input-group-addon\">см</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-md-4\" for=\"height\">Висота</label>\r\n          <div class=\"input-group input-group-sm col-md-8\">\r\n            <input type=\"text\" [(ngModel)]=\"product.size.height\" name=\"height\" class=\"form-control form-control-sm\" id=\"height\">\r\n            <span class=\"input-group-addon\">см</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button class=\"btn btn-primary\" [disabled]=\"!addProductForm.form.valid\">\r\n    <i class=\"material-icons\">done</i> Додати</button>\r\n  </form>\r\n\r\n\r\n</div>\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/products-management/add-product/add-product.component.ts":
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
var validate_service_1 = __webpack_require__("../../../../../src/app/services/validate.service.ts");
var product_service_1 = __webpack_require__("../../../../../src/app/services/product.service.ts");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/index.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var catalog_service_1 = __webpack_require__("../../../../../src/app/services/catalog.service.ts");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/Rx.js");
var product_1 = __webpack_require__("../../../../../src/app/data/product.ts");
var AddProductComponent = (function () {
    // emptyProduct = {} as IProduct;
    function AddProductComponent(validateService, productService, flashMessage, router, route, catalogService) {
        this.validateService = validateService;
        this.productService = productService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.route = route;
        this.catalogService = catalogService;
        this.isNewProduct = false;
        this.isCategory1 = false;
        this.isItemNumberInputDisabled = true;
        this.updateProducts = new core_1.EventEmitter();
        this.emptyProduct = product_1.emptyProduct;
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catalog = this.catalogService.getCatalog();
        this.products$ = this.route.params
            .filter(function (params) { return params['_id'] !== undefined; })
            .switchMap(function (params) {
            if (params._id === 'new') {
                _this.isNewProduct = true;
                return Observable_1.Observable.of([_this.emptyProduct]);
            }
            _this.isNewProduct = false;
            return _this.productService.getQueriedProducts(params);
        });
        this.products$.subscribe(function (products) {
            _this.product = products[0];
            _this.category1List = _this.catalogService.getCategory1List(products[0].category0);
            if (_this.category1List) {
                _this.isCategory1 = true;
            }
        });
    };
    AddProductComponent.prototype.itemNumberInputEnable = function () {
        this.isItemNumberInputDisabled = !this.isItemNumberInputDisabled;
    };
    AddProductComponent.prototype.onSelectCategory0 = function (event, val) {
        var value;
        if (val) {
            value = val;
        }
        else {
            value = event.srcElement.value;
        }
        this.itemNumbersAll = [];
        for (var i = 0; i < this.catalog.length; i++) {
            if (this.catalog[i].category0.name === value) {
                if (this.isNewProduct) {
                    this.createItemNumber(i);
                }
                if (this.catalog[i].category0.category1) {
                    this.category1List = this.catalog[i].category0.category1;
                    this.isCategory1 = true;
                    this.product.category1 = this.catalog[i].category0.category1[0].name;
                }
                else {
                    this.isCategory1 = false;
                    this.product.category1 = '';
                    // const category1Element = document.querySelector('#category1');
                    // category1Element.nodeValue = '';
                }
            }
        }
        console.log('product.category1', this.product.category1);
    };
    AddProductComponent.prototype.createItemNumber = function (i) {
        var _this = this;
        this.itemNumberPrefix = this.catalog[i].category0.itemNumberPrefix;
        this.productService.getQueriedProducts({ 'category0': this.catalog[i].category0.name })
            .map(function (item) {
            for (var j = 0; j < item.length; j++) {
                _this.itemNumbersAll.push(+item[j].itemNumber.slice(1));
            }
            function compareNumeric(a, b) {
                if (a > b) {
                    return 1;
                }
                if (a < b) {
                    return -1;
                }
            }
            _this.itemNumbersAll.sort(compareNumeric);
            for (var j = 0; j < _this.itemNumbersAll.length; j++) {
                if (_this.itemNumbersAll[j] !== j + 1) {
                    return j + 1;
                }
            }
            return _this.itemNumbersAll.length + 1;
        })
            .subscribe(function (item) {
            var output = item.toString();
            while (output.length < 3) {
                output = '0' + output;
            }
            return _this.product.itemNumber = _this.itemNumberPrefix + output;
        });
    };
    AddProductComponent.prototype.onAddProductSubmit = function (form) {
        var _this = this;
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
            this.flashMessage.show('fill all fields', {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        }
        if (this.isNewProduct) {
            this.productService.addProduct(this.product)
                .subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('Added successfully', {
                        cssClass: 'alert-success',
                        timeout: 3000
                    });
                    _this.router.navigate(['/admin/ch', { outlets: { primary: 'add-product/new' } }]);
                    _this.updateProducts.emit();
                }
                else {
                    console.log('add data', data);
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
        }
        else {
            this.productService.editProduct(this.product)
                .subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('Edited successfully', {
                        cssClass: 'alert-success',
                        timeout: 3000
                    });
                    _this.router.navigate(['/admin/ch', { outlets: { primary: 'edit-product' } }]);
                    _this.updateProducts.emit();
                }
                else {
                    _this.flashMessage.show('Editing failed', {
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
        }
    };
    return AddProductComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AddProductComponent.prototype, "updateProducts", void 0);
AddProductComponent = __decorate([
    core_1.Component({
        selector: 'app-add-product',
        template: __webpack_require__("../../../../../src/app/components/admin-panel/products-management/add-product/add-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin-panel/products-management/add-product/add-product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof validate_service_1.ValidateService !== "undefined" && validate_service_1.ValidateService) === "function" && _a || Object, typeof (_b = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _b || Object, typeof (_c = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _e || Object, typeof (_f = typeof catalog_service_1.CatalogService !== "undefined" && catalog_service_1.CatalogService) === "function" && _f || Object])
], AddProductComponent);
exports.AddProductComponent = AddProductComponent;
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

module.exports = "<h2 class=\"page-header\">Edit product</h2>\r\n<table *ngIf=\"products\"  class=\"table table-sm\">\r\n  <form *ngFor=\"let product of products; let i = index\" (submit)=\"onEditProductSubmit(product)\"\r\n        #editProductForm=\"ngForm\">\r\n    <thead *ngIf=\"product === products[0]\">\r\n      <tr>\r\n        <th class=\"edit-product-table-first-cell\">\r\n        </th>\r\n        <th>Category</th>\r\n        <th>Sub Category</th>\r\n        <th>Item Number</th>\r\n        <th>Name</th>\r\n        <th>Price</th>\r\n        <th>Img source</th>\r\n        <th>Description</th>\r\n        <th>On main page 0/1</th>\r\n        <th>Discount %</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr [class.active]=\"i === selectedRow\" >\r\n          <td class=\"edit-product-table-first-cell\">\r\n\r\n            <!--<div class=\"btn-group\" role=\"group\" aria-label=\"Edit\">-->\r\n              <button type=\"button\" class=\"btn btn-primary button-round-2\" [routerLinkActive]=\"['active']\"\r\n                      [routerLinkActiveOptions]=\"{exact: true}\" [class.hide]=\"!isEditBtnShow\"\r\n                      [routerLink]=\"['/admin/ch', {outlets: {primary: ['add-product', product._id]}}]\">\r\n                <i class=\"material-icons button-round-icon-2\">mode_edit</i>\r\n                <!--<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>-->\r\n              </button>\r\n\r\n              <button type=\"button\" (click)=\"onClickEditBtn(i, product._id)\" class=\"btn btn-primary button-round-2\"\r\n                      [class.hide]=\"!isEditBtnShow\">\r\n                <i class=\"material-icons button-round-icon-2\">border_color</i>\r\n                <!--<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>-->\r\n              </button>\r\n            <!--</div>-->\r\n\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Edit\">\r\n              <button type=\"submit\" class=\"btn btn-primary button-round-2\" [class.hide]=\"!(i === selectedRow)\">\r\n                <!--<i class=\"fa fa-check\" aria-hidden=\"true\"></i>-->\r\n                <i class=\"material-icons button-round-icon-2\">done</i>\r\n              </button>\r\n\r\n              <button type=\"button\" class=\"btn btn-primary button-round-2\" (click)=\"onClickCancelEditBtn(i, product._id)\"\r\n                      [class.hide]=\"!(i === selectedRow)\">\r\n                <!--<i class=\"fa fa-ban\" aria-hidden=\"true\"></i>-->\r\n                <i class=\"material-icons button-round-icon-2\">highlight_off</i>\r\n              </button>\r\n            </div>\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.category0\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"category0\" #category0=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.category1\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"category1\" #category1=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.itemNumber\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"itemNumber\" #itemNumber=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.name\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"name\" #name=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.price\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"price\" #price=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.mainImgSrc\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"mainImgSrc\" #mainImgSrc=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.itemDescription\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"itemDescription\" #itemDescription=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n           <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.showOnMainPage\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"showOnMainPage\" #showOnMainPage=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n           <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.discount\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"discount\" #discount=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.size.width\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"width\" #width=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.size.height\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"height\" #height=\"ngModel\"\r\n                   class=\"form-control form-control-sm edit-product-table-cells-input\">\r\n          </td>\r\n          <td class=\"edit-product-table-last-cell\">\r\n\r\n            <button type=\"button\" class=\"btn btn-primary button-round-2\" (click)=\"onClickDelBtn(i, product._id)\"\r\n                    [class.hidden]=\"!(i === selectedRow)\">\r\n              <i class=\"material-icons button-round-icon-2\">delete_sweep</i>\r\n\r\n              <!--<i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>-->\r\n            </button>\r\n\r\n          </td>\r\n        </tr>\r\n    </tbody>\r\n  </form>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/products-management/edit-product/edit-product.component.ts":
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
var product_service_1 = __webpack_require__("../../../../../src/app/services/product.service.ts");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/index.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
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
    EditProductComponent.prototype.onEditProductSubmit = function (product) {
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
    core_1.Component({
        selector: 'app-edit-product',
        template: __webpack_require__("../../../../../src/app/components/admin-panel/products-management/edit-product/edit-product.component.html"),
        // providers: [ProductService],
        styles: [__webpack_require__("../../../../../src/app/components/admin-panel/products-management/edit-product/edit-product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" && _a || Object, typeof (_b = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], EditProductComponent);
exports.EditProductComponent = EditProductComponent;
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

module.exports = "<p>\r\n  products-management works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/products-management/products-management.component.ts":
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
var ProductsManagementComponent = (function () {
    function ProductsManagementComponent() {
    }
    ProductsManagementComponent.prototype.ngOnInit = function () {
    };
    return ProductsManagementComponent;
}());
ProductsManagementComponent = __decorate([
    core_1.Component({
        selector: 'app-products-management',
        template: __webpack_require__("../../../../../src/app/components/admin-panel/products-management/products-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin-panel/products-management/products-management.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductsManagementComponent);
exports.ProductsManagementComponent = ProductsManagementComponent;
//# sourceMappingURL=products-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/products-management/products-management.module.ts":
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
// import {SharedModule} from '../../shared/shared.module';
// import {ProductsManagementRoutingModule} from './products-management-routing.module';
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var products_management_component_1 = __webpack_require__("../../../../../src/app/components/admin-panel/products-management/products-management.component.ts");
var add_product_component_1 = __webpack_require__("../../../../../src/app/components/admin-panel/products-management/add-product/add-product.component.ts");
var edit_product_component_1 = __webpack_require__("../../../../../src/app/components/admin-panel/products-management/edit-product/edit-product.component.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var ProductsManagementModule = (function () {
    function ProductsManagementModule() {
    }
    return ProductsManagementModule;
}());
ProductsManagementModule = __decorate([
    core_1.NgModule({
        declarations: [
            products_management_component_1.ProductsManagementComponent,
            add_product_component_1.AddProductComponent,
            edit_product_component_1.EditProductComponent,
        ],
        imports: [
            common_1.CommonModule,
            // SharedModule,
            // ProductsManagementRoutingModule,
            forms_1.FormsModule,
            router_1.RouterModule
        ],
        exports: [],
    })
], ProductsManagementModule);
exports.ProductsManagementModule = ProductsManagementModule;
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

module.exports = "<h2 class=\"page-header\">Зареєструвати нового користувача</h2>\r\n<form (ngSubmit)=\"onRegisterSubmit(registerForm); registerForm.reset()\" #registerForm=\"ngForm\">\r\n  <div class=\"form-group\">\r\n    <label for=\"name\">Name</label>\r\n    <input ngModel required name=\"name\" class=\"form-control\" id=\"name\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">UserName</label>\r\n    <input ngModel required name=\"username\" class=\"form-control\" id=\"username\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <input ngModel required name=\"email\" class=\"form-control\" id=\"email\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input ngModel required name=\"password\" class=\"form-control\" id=\"password\">\r\n  </div>\r\n  <button class=\"btn btn-primary\" [disabled]=\"!registerForm.form.valid\">Зареэструватись</button>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/users-management/add-user/add-user.component.ts":
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
var validate_service_1 = __webpack_require__("../../../../../src/app/services/validate.service.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/index.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
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
        // this.authService.registerUser(user)
        //   .subscribe(data => {
        //       if (data.success) {
        //         this.flashMessage.show(
        //           'Registration successful',
        //           {
        //             cssClass: 'alert-success',
        //             timeout: 3000
        //           });
        //         // this.router.navigate(['/login']);
        //       } else {
        //         this.flashMessage.show(
        //           'Registration failed',
        //           {
        //             cssClass: 'alert-danger',
        //             timeout: 3000
        //           });
        //         this.router.navigate(['/register']);
        //       }
        //     },
        //     error => {
        //       if (error.status === 401) {
        //         this.flashMessage.show(
        //           'Please login',
        //           {
        //             cssClass: 'alert-danger',
        //             timeout: 3000
        //           });
        //         this.router.navigate(['/login']);
        //       }
        //     });
    };
    return AddUserComponent;
}());
AddUserComponent = __decorate([
    core_1.Component({
        selector: 'app-add-user',
        template: __webpack_require__("../../../../../src/app/components/admin-panel/users-management/add-user/add-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin-panel/users-management/add-user/add-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof validate_service_1.ValidateService !== "undefined" && validate_service_1.ValidateService) === "function" && _a || Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _d || Object])
], AddUserComponent);
exports.AddUserComponent = AddUserComponent;
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

module.exports = "<p>\r\n  users-management works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/users-management/users-management.component.ts":
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
var UsersManagementComponent = (function () {
    function UsersManagementComponent() {
    }
    UsersManagementComponent.prototype.ngOnInit = function () {
    };
    return UsersManagementComponent;
}());
UsersManagementComponent = __decorate([
    core_1.Component({
        selector: 'app-users-management',
        template: __webpack_require__("../../../../../src/app/components/admin-panel/users-management/users-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin-panel/users-management/users-management.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UsersManagementComponent);
exports.UsersManagementComponent = UsersManagementComponent;
//# sourceMappingURL=users-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-panel/users-management/users-management.module.ts":
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
var users_management_component_1 = __webpack_require__("../../../../../src/app/components/admin-panel/users-management/users-management.component.ts");
var add_user_component_1 = __webpack_require__("../../../../../src/app/components/admin-panel/users-management/add-user/add-user.component.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var UsersManagementModule = (function () {
    function UsersManagementModule() {
    }
    return UsersManagementModule;
}());
UsersManagementModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        exports: [],
        declarations: [
            users_management_component_1.UsersManagementComponent,
            add_user_component_1.AddUserComponent,
        ]
    })
], UsersManagementModule);
exports.UsersManagementModule = UsersManagementModule;
//# sourceMappingURL=users-management.module.js.map

/***/ }),

/***/ "../../../../../src/app/data/product.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyProduct = {
    category0: '',
    category1: '',
    itemNumber: '',
    name: '',
    price: 0,
    mainImgSrc: [],
    itemDescription: '',
    showOnMainPage: true,
    discount: 0,
    size: {
        width: 0,
        height: 0,
    }
};
//# sourceMappingURL=product.js.map

/***/ })

});
//# sourceMappingURL=admin-panel.module.chunk.js.map