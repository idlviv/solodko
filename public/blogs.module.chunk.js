webpackJsonp(["blogs.module"],{

/***/ "../../../../../src/app/components/blogs/blogs-routing.module.ts":
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
var blogs_component_1 = __webpack_require__("../../../../../src/app/components/blogs/blogs.component.ts");
var page404_component_1 = __webpack_require__("../../../../../src/app/components/shared/page404/page404.component.ts");
var auth_user_guard_1 = __webpack_require__("../../../../../src/app/guards/auth-user.guard.ts");
var blogsRoutes = [
    {
        path: 'addblog',
        component: blogs_component_1.BlogsComponent,
        canActivateChild: [auth_user_guard_1.AuthUserGuard],
        children: [
            // {
            //   path: 'start/:category0/:category1',
            //   component: ProductsListComponent,
            //   // resolve: {products: ProductResolverService}
            // },
            {
                path: '**',
                component: page404_component_1.Page404Component
            },
        ],
    },
];
var BlogsRoutingModule = (function () {
    function BlogsRoutingModule() {
    }
    return BlogsRoutingModule;
}());
BlogsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(blogsRoutes)
        ],
        exports: [router_1.RouterModule]
    })
], BlogsRoutingModule);
exports.BlogsRoutingModule = BlogsRoutingModule;
//# sourceMappingURL=blogs-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/blogs/blogs.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Блог</h2>\r\n<!--<button class=\"btn btn-sm btn-danger\" (click)=\"addBlog()\">-->\r\n  <!--Check-->\r\n<!--</button>-->\r\n\r\n\r\n\r\n\r\n<!--<div class=\"row show-hide-message\">-->\r\n  <!--<div [ngClass]=\"messageClass\">-->\r\n    <!--{{message}}-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n<!--<div class=\"row\">-->\r\n  <!--<div class=\"col\">-->\r\n    <!--<button class=\"btn btn-primary\" *ngIf=\"!newPost\" (click)=\"newBlogForm()\">Новий пост</button>-->\r\n    <!--<button [disabled]=\"loadingBlogs\" class=\"btn btn-primary\" *ngIf=\"!newPost\" (click)=\"reloadBlogs()\">Перезавантажити</button>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n\r\n    <!--new blog form-->\r\n    <form *ngIf=\"newPost\" [formGroup]=\"blogForm\" (ngSubmit)=\"onBlogSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"title\">Заголовок</label>\r\n        <input formControlName=\"title\" [formGroup]=\"blogForm\" required\r\n               class=\"form-control\" id=\"title\" placeholder=\"Заголовок\">\r\n        <div class=\"alert alert-danger\" role=\"alert\"\r\n             *ngIf=\"(blogForm.controls['title'].errors?.minlength ||\r\n          blogForm.controls['title'].errors?.maxlength) && blogForm.controls['title'].touched\">\r\n          Довжина від 4 до 50 символів\r\n        </div>\r\n        <div class=\"alert alert-danger\" role=\"alert\"\r\n             *ngIf=\"blogForm.controls['title'].errors?.pattern && blogForm.controls['title'].touched\">\r\n          Використовуйте тільки цифри і букви\r\n        </div>\r\n        <!--{{blogForm.controls['title'].errors | json}}-->\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"body\">Текст</label>\r\n        <textarea formControlName=\"body\" cols=\"30\" rows=\"5\"\r\n                  [formGroup]=\"blogForm\" required autocomplete=\"false\"\r\n                  class=\"form-control\" id=\"body\" placeholder=\"\"></textarea>\r\n        <div class=\"alert alert-danger\" role=\"alert\"\r\n             *ngIf=\"(blogForm.controls['body'].errors?.minlength ||\r\n          blogForm.controls['body'].errors?.maxlength) && blogForm.controls['body'].touched\">\r\n          Довжина від 4 до 1000 символів\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"!blogForm.valid || processing\">Запостити</button>\r\n      <button [disabled]=\"processing\" type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"goBack()\">Повернутись</button>\r\n\r\n    </form>\r\n    <!--new blog form-->\r\n\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n          <button class=\"btn btn-success btn-sm\" *ngIf=\"!newPost\"\r\n                  (click)=\"newBlogForm()\">Новий пост</button>\r\n          <button [disabled]=\"loadingBlogs\" class=\"btn btn-primary btn-info btn-sm\" *ngIf=\"!newPost\"\r\n                  (click)=\"reloadBlogs()\">Перезавантажити</button>\r\n      </div>\r\n\r\n      <div class=\"card-body\" *ngIf=\"!newPost\">\r\n        <h4 class=\"card-title\">Blog title</h4>\r\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n      </div>\r\n\r\n      <div class=\"card-footer text-muted\" *ngIf=\"!newPost\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4 col-sm-12\">\r\n            <button class=\"btn btn-primary btn-sm btn-info\">Редагувати</button>\r\n            <button [disabled]=\"loadingBlogs\" class=\"btn btn-danger btn-sm\">Видалити</button>\r\n\r\n            <div class=\"c_dropdown\">\r\n              <button class=\"btn btn-success btn-sm\">Лайки</button>\r\n              <div class=\"c_dropdown-content\">\r\n                <p><a href=\"#\">user1</a></p>\r\n                <p><a href=\"#\">user2</a></p>\r\n                <p><a href=\"#\">user3</a></p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"c_dropdown\">\r\n              <button class=\"btn btn-success btn-sm\">Нелайки</button>\r\n              <div class=\"c_dropdown-content\">\r\n                <p><a href=\"#\">user1</a></p>\r\n                <p><a href=\"#\">user2</a></p>\r\n                <p><a href=\"#\">user3</a></p>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-md-2 col-sm-6\">\r\n            <strong>Автор:</strong> Poster\r\n          </div>\r\n          <div class=\"col-md-2 col-sm-6\">\r\n            <strong>Дата:</strong> 31.12.2017 23:58\r\n          </div>\r\n          <div class=\"col-md-2 col-sm-6\">\r\n            <strong>Лайків</strong> 125488\r\n          </div>\r\n          <div class=\"col-md-2 col-sm-6\">\r\n            <strong>Нелайків</strong> 5\r\n          </div>\r\n        </div>\r\n        <br/>\r\n\r\n\r\n\r\n      </div>\r\n\r\n      <!--<ul class=\"list-group\" *ngIf=\"!newPost\">-->\r\n        <!--<li class=\"list-group-item\">-->\r\n          <!--<button class=\"btn btn-sm btn-danger\" (click)=\"draftComment()\">-->\r\n            <!--Запостити-->\r\n          <!--</button>-->\r\n          <!--<br/>-->\r\n          <!--&lt;!&ndash;<form>&ndash;&gt;-->\r\n          <!--&lt;!&ndash;<textarea name=\"comment\" id=\"\" cols=\"30\" rows=\"10\" class=\"form-control\">&ndash;&gt;-->\r\n          <!--&lt;!&ndash;<button class=\"btn btn-sm btn-info\">Submit</button>&ndash;&gt;-->\r\n          <!--&lt;!&ndash;<button class=\"btn btn-sm btn-info\">Cancel</button>&ndash;&gt;-->\r\n          <!--&lt;!&ndash;</textarea>&ndash;&gt;-->\r\n          <!--&lt;!&ndash;</form>&ndash;&gt;-->\r\n        <!--</li>-->\r\n\r\n      <!--</ul>-->\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/blogs/blogs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blogs/blogs.component.ts":
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
var blogs_service_1 = __webpack_require__("../../../../../src/app/services/blogs.service.ts");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/index.js");
var validate_service_1 = __webpack_require__("../../../../../src/app/services/validate.service.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var BlogsComponent = (function () {
    function BlogsComponent(blogsService, authService, flashMessage, validateService) {
        this.blogsService = blogsService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.newPost = false;
        this.loadingBlogs = false;
        this.processing = false;
    }
    BlogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogForm = new forms_1.FormGroup({
            title: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(4),
                forms_1.Validators.maxLength(50),
                forms_1.Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
            ]),
            body: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(4),
                forms_1.Validators.maxLength(1000),
            ]),
        });
        this.authService.getLoggedUser()
            .subscribe(function (user) { return _this.loggedUser = user; });
    };
    BlogsComponent.prototype.onBlogSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableBlogForm();
        this.blogsService.addBlog({
            title: this.blogForm.value.title,
            body: this.blogForm.value.body,
        })
            .subscribe(function (result) {
            _this.processing = false;
            _this.enableBlogForm();
            if (result.success) {
                _this.newPost = false;
                _this.blogForm.reset();
                _this.flashMessage.show(result.message, {
                    cssClass: 'alert-success',
                    timeout: 2000
                });
            }
            else {
                _this.flashMessage.show(result.message, {
                    cssClass: 'alert-danger',
                    timeout: 2000
                });
            }
        });
    };
    BlogsComponent.prototype.goBack = function () {
        window.location.reload();
    };
    // Enable new blog form
    BlogsComponent.prototype.enableBlogForm = function () {
        this.blogForm.get('title').enable(); // Enable title field
        this.blogForm.get('body').enable(); // Enable body field
    };
    // Disable new blog form
    BlogsComponent.prototype.disableBlogForm = function () {
        this.blogForm.get('title').disable(); // Disable title field
        this.blogForm.get('body').disable(); // Disable body field
    };
    BlogsComponent.prototype.newBlogForm = function () {
        this.newPost = true;
    };
    BlogsComponent.prototype.reloadBlogs = function () {
        this.loadingBlogs = true;
    };
    BlogsComponent.prototype.draftComment = function () {
    };
    return BlogsComponent;
}());
BlogsComponent = __decorate([
    core_1.Component({
        selector: 'app-blog',
        template: __webpack_require__("../../../../../src/app/components/blogs/blogs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/blogs/blogs.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof blogs_service_1.BlogsService !== "undefined" && blogs_service_1.BlogsService) === "function" && _a || Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _b || Object, typeof (_c = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _c || Object, typeof (_d = typeof validate_service_1.ValidateService !== "undefined" && validate_service_1.ValidateService) === "function" && _d || Object])
], BlogsComponent);
exports.BlogsComponent = BlogsComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=blogs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/blogs/blogs.module.ts":
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
var blogs_component_1 = __webpack_require__("../../../../../src/app/components/blogs/blogs.component.ts");
var blogs_routing_module_1 = __webpack_require__("../../../../../src/app/components/blogs/blogs-routing.module.ts");
var shared_module_1 = __webpack_require__("../../../../../src/app/components/shared/shared.module.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var BlogsModule = (function () {
    function BlogsModule() {
    }
    return BlogsModule;
}());
BlogsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            blogs_routing_module_1.BlogsRoutingModule,
            shared_module_1.SharedModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            blogs_component_1.BlogsComponent,
        ],
        exports: []
    })
], BlogsModule);
exports.BlogsModule = BlogsModule;
//# sourceMappingURL=blogs.module.js.map

/***/ })

});
//# sourceMappingURL=blogs.module.chunk.js.map