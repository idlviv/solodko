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
var list_blogs_component_1 = __webpack_require__("../../../../../src/app/components/blogs/list-blogs/list-blogs.component.ts");
var edit_blog_component_1 = __webpack_require__("../../../../../src/app/components/blogs/edit-blog/edit-blog.component.ts");
var delete_blog_component_1 = __webpack_require__("../../../../../src/app/components/blogs/delete-blog/delete-blog.component.ts");
var new_blog_component_1 = __webpack_require__("../../../../../src/app/components/blogs/new-blog/new-blog.component.ts");
var blogsRoutes = [
    {
        path: 'ch',
        component: blogs_component_1.BlogsComponent,
        canActivateChild: [auth_user_guard_1.AuthUserGuard],
        children: [
            {
                path: 'list-blogs',
                component: list_blogs_component_1.ListBlogsComponent,
            },
            {
                path: 'new-blog',
                component: new_blog_component_1.NewBlogComponent,
            },
            {
                path: 'edit-blog/:_id',
                component: edit_blog_component_1.EditBlogComponent,
            },
            {
                path: 'delete-blog/:_id',
                component: delete_blog_component_1.DeleteBlogComponent,
            },
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

module.exports = "<!--<div class=\"row\">-->\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n<!--</div>-->\r\n"

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
var BlogsComponent = (function () {
    function BlogsComponent() {
    }
    BlogsComponent.prototype.ngOnInit = function () { };
    return BlogsComponent;
}());
BlogsComponent = __decorate([
    core_1.Component({
        selector: 'app-blog',
        template: __webpack_require__("../../../../../src/app/components/blogs/blogs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/blogs/blogs.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BlogsComponent);
exports.BlogsComponent = BlogsComponent;
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
var edit_blog_component_1 = __webpack_require__("../../../../../src/app/components/blogs/edit-blog/edit-blog.component.ts");
var list_blogs_component_1 = __webpack_require__("../../../../../src/app/components/blogs/list-blogs/list-blogs.component.ts");
var delete_blog_component_1 = __webpack_require__("../../../../../src/app/components/blogs/delete-blog/delete-blog.component.ts");
var new_blog_component_1 = __webpack_require__("../../../../../src/app/components/blogs/new-blog/new-blog.component.ts");
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
            edit_blog_component_1.EditBlogComponent,
            list_blogs_component_1.ListBlogsComponent,
            delete_blog_component_1.DeleteBlogComponent,
            new_blog_component_1.NewBlogComponent,
        ],
        exports: []
    })
], BlogsModule);
exports.BlogsModule = BlogsModule;
//# sourceMappingURL=blogs.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/blogs/delete-blog/delete-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Дфйсно видалити пост?</h2>\r\n<button class=\"btn btn-danger btn-sm\" (click)=\"onConfirmDelete()\">Видалити</button>\r\n<button class=\"btn btn-info btn-sm\" (click)=\"onCancelDelete()\">Відмінити</button>\r\n<br/>\r\n<div class=\"row\" *ngIf=\"blog\">\r\n  <div class=\"col\">\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h4>{{blog.title}}</h4>\r\n      </div>\r\n\r\n      <div class=\"card-footer text-muted\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4 col-sm-12\">\r\n\r\n          </div>\r\n          <div class=\"col-md-2 col-sm-6\">\r\n            <strong>Автор: </strong>{{blog.createdBy}}\r\n          </div>\r\n          <div class=\"col-md-2 col-sm-6\">\r\n            <strong>Дата: </strong>{{blog.createdAt | date: 'dd.MM.yyyy HH:mm'}}\r\n          </div>\r\n\r\n          <div class=\"col-md-2 col-sm-6\">\r\n            <strong>Лайків </strong>{{blog.likes}}\r\n          </div>\r\n          <div class=\"col-md-2 col-sm-6\">\r\n            <strong>Нелайків </strong>{{blog.dislikes}}\r\n          </div>\r\n        </div>\r\n        <br/>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/blogs/delete-blog/delete-blog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blogs/delete-blog/delete-blog.component.ts":
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
var blogs_service_1 = __webpack_require__("../../../../../src/app/services/blogs.service.ts");
var DeleteBlogComponent = (function () {
    function DeleteBlogComponent(route, router, flashMessage, blogsService) {
        this.route = route;
        this.router = router;
        this.flashMessage = flashMessage;
        this.blogsService = blogsService;
    }
    DeleteBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this._id = params._id;
            _this.searchQuery = {
                type: 'object',
                query: {
                    key: '_id',
                    value: _this._id
                }
            };
        }, function (error) {
            _this.flashMessage.show(error, {
                cssClass: 'alert-danger',
                timeout: 3000
            });
        });
        this.blogsService.getQueriedBlogs(this.searchQuery)
            .subscribe(function (result) {
            if (!result.success) {
                _this.flashMessage.show(result.message, {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/not-found']);
            }
            else {
                _this.blog = result.data[0];
            }
        }, function (error) {
            _this.flashMessage.show(error, {
                cssClass: 'alert-danger',
                timeout: 3000
            });
        });
    };
    DeleteBlogComponent.prototype.onCancelDelete = function () {
        this.router.navigate(['/blogs/ch/list-blogs']);
    };
    DeleteBlogComponent.prototype.onConfirmDelete = function () {
        var _this = this;
        this.blogsService.deleteBlog(this._id)
            .subscribe(function (result) {
            console.log(result);
            if (!result.success) {
                _this.flashMessage.show(result.message, {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
            else {
                _this.flashMessage.show(result.message, {
                    cssClass: 'alert-success',
                    timeout: 2000
                });
            }
        }, function (error) {
            _this.flashMessage.show(error, {
                cssClass: 'alert-danger',
                timeout: 3000
            });
        });
        this.router.navigate(['/blogs/ch/list-blogs']);
    };
    return DeleteBlogComponent;
}());
DeleteBlogComponent = __decorate([
    core_1.Component({
        selector: 'app-delete-blog',
        template: __webpack_require__("../../../../../src/app/components/blogs/delete-blog/delete-blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/blogs/delete-blog/delete-blog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _c || Object, typeof (_d = typeof blogs_service_1.BlogsService !== "undefined" && blogs_service_1.BlogsService) === "function" && _d || Object])
], DeleteBlogComponent);
exports.DeleteBlogComponent = DeleteBlogComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=delete-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/blogs/edit-blog/edit-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Редагувати пост</h2>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n\r\n    <form [formGroup]=\"editBlogForm\" (ngSubmit)=\"onEditBlogSubmit()\" *ngIf=\"blog\">\r\n      <div class=\"form-group\">\r\n        <label for=\"title\">Заголовок</label>\r\n        <input formControlName=\"title\" [formGroup]=\"editBlogForm\" required\r\n               class=\"form-control\" id=\"title\" placeholder=\"Заголовок\" [(ngModel)]=\"blog.title\">\r\n        <div class=\"alert alert-danger\" role=\"alert\"\r\n             *ngIf=\"(editBlogForm.controls['title'].errors?.minlength ||\r\n              editBlogForm.controls['title'].errors?.maxlength) && editBlogForm.controls['title'].touched\">\r\n          Довжина від 4 до 50 символів\r\n        </div>\r\n        <div class=\"alert alert-danger\" role=\"alert\"\r\n             *ngIf=\"editBlogForm.controls['title'].errors?.pattern && editBlogForm.controls['title'].touched\">\r\n          Використовуйте тільки цифри і букви\r\n        </div>\r\n        <!--{{editBlogForm.controls['title'].errors | json}}-->\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"body\">Текст</label>\r\n        <textarea formControlName=\"body\" cols=\"30\" rows=\"5\"\r\n                  [formGroup]=\"editBlogForm\" required autocomplete=\"false\"\r\n                  class=\"form-control\" id=\"body\" placeholder=\"\" [(ngModel)]=\"blog.body\"></textarea>\r\n        <div class=\"alert alert-danger\" role=\"alert\"\r\n             *ngIf=\"(editBlogForm.controls['body'].errors?.minlength ||\r\n              editBlogForm.controls['body'].errors?.maxlength) && editBlogForm.controls['body'].touched\">\r\n          Довжина від 4 до 1000 символів\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"!editBlogForm.valid || processing\">Зберегти</button>\r\n      <button [disabled]=\"processing\" type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"goBack()\">Повернутись</button>\r\n      <button [routerLink]=\"['/blogs/ch/delete-blog', blog._id]\" type=\"button\" class=\"btn btn-danger btn-sm\">Видалити</button>\r\n\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/blogs/edit-blog/edit-blog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blogs/edit-blog/edit-blog.component.ts":
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
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var blogs_service_1 = __webpack_require__("../../../../../src/app/services/blogs.service.ts");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/index.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var EditBlogComponent = (function () {
    function EditBlogComponent(authService, blogsService, flashMessage, route, router, location) {
        this.authService = authService;
        this.blogsService = blogsService;
        this.flashMessage = flashMessage;
        this.route = route;
        this.router = router;
        this.location = location;
    }
    EditBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        // creates form
        this.editBlogForm = new forms_1.FormGroup({
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
        // gets logged user
        this.authService.getLoggedUser()
            .subscribe(function (user) { return _this.loggedUser = user; });
        // gets id of edited blog
        this.route.params
            .subscribe(function (params) {
            _this._id = params._id;
            _this.searchQuery = {
                type: 'object',
                query: {
                    key: '_id',
                    value: _this._id
                }
            };
            // gets blog by _id
            _this.blogsService.getQueriedBlogs(_this.searchQuery)
                .subscribe(function (result) {
                if (!result.success) {
                    _this.flashMessage.show(result.message, {
                        cssClass: 'alert-danger',
                        timeout: 3000
                    });
                    _this.router.navigate(['/not-found']);
                }
                else {
                    _this.blog = result.data[0];
                }
            }, function (error) {
                _this.flashMessage.show(error, {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            });
        }, function (error) {
            _this.flashMessage.show(error, {
                cssClass: 'alert-danger',
                timeout: 3000
            });
        });
    };
    EditBlogComponent.prototype.onEditBlogSubmit = function () {
        var _this = this;
        this.searchQuery = {
            type: 'object',
            query: {
                key: '_id',
                value: this._id
            },
            data: this.blog,
        };
        this.blogsService.editBlog(this.searchQuery)
            .subscribe(function (result) {
            _this.flashMessage.show(result.message, {
                cssClass: 'alert-success',
                timeout: 3000
            });
            _this.router.navigate(['/blogs/ch/list-blogs']);
        }, function (error) {
            _this.flashMessage.show(error.message, {
                cssClass: 'alert-danger',
                timeout: 3000
            });
        });
    };
    EditBlogComponent.prototype.goBack = function () {
        // this.router.navigate(['/blogs/ch/list-blogs']);
        this.location.back();
    };
    return EditBlogComponent;
}());
EditBlogComponent = __decorate([
    core_1.Component({
        selector: 'app-edit-blog',
        template: __webpack_require__("../../../../../src/app/components/blogs/edit-blog/edit-blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/blogs/edit-blog/edit-blog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof blogs_service_1.BlogsService !== "undefined" && blogs_service_1.BlogsService) === "function" && _b || Object, typeof (_c = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _c || Object, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object, typeof (_e = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _e || Object, typeof (_f = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _f || Object])
], EditBlogComponent);
exports.EditBlogComponent = EditBlogComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=edit-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/blogs/list-blogs/list-blogs.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Блог</h2>\r\n<button [routerLink]=\"['/blogs/ch/new-blog']\"\r\n\r\n        class=\"btn btn-sm btn-info\">Новий пост---</button>\r\n<!--new blog form-->\r\n<div *ngIf=\"newPost\" class=\"row\">\r\n  <div class=\"col\">\r\n\r\n    <form [formGroup]=\"blogForm\" (ngSubmit)=\"onBlogSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"title\">Заголовок</label>\r\n        <input formControlName=\"title\" [formGroup]=\"blogForm\" required\r\n               class=\"form-control\" id=\"title\" placeholder=\"Заголовок\">\r\n        <div class=\"alert alert-danger\" role=\"alert\"\r\n             *ngIf=\"(blogForm.controls['title'].errors?.minlength ||\r\n          blogForm.controls['title'].errors?.maxlength) && blogForm.controls['title'].touched\">\r\n          Довжина від 4 до 50 символів\r\n        </div>\r\n        <div class=\"alert alert-danger\" role=\"alert\"\r\n             *ngIf=\"blogForm.controls['title'].errors?.pattern && blogForm.controls['title'].touched\">\r\n          Використовуйте тільки цифри і букви\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"body\">Текст</label>\r\n        <textarea formControlName=\"body\" cols=\"30\" rows=\"5\"\r\n                  [formGroup]=\"blogForm\" required autocomplete=\"false\"\r\n                  class=\"form-control\" id=\"body\" placeholder=\"\"></textarea>\r\n        <div class=\"alert alert-danger\" role=\"alert\"\r\n             *ngIf=\"(blogForm.controls['body'].errors?.minlength ||\r\n          blogForm.controls['body'].errors?.maxlength) && blogForm.controls['body'].touched\">\r\n          Довжина від 4 до 1000 символів\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input  class=\"form-check-input\" type=\"checkbox\" formControlName=\"showOnMainPage\"\r\n                   [formGroup]=\"blogForm\" id=\"showOnMainPage\">   На головній</label>\r\n        </div>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"!blogForm.valid\">Запостити</button>\r\n      <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"goBack()\">Повернутись</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n<!--end of new blog form-->\r\n\r\n<div class=\"row\" *ngIf=\"!newPost\">\r\n  <div class=\"col\">\r\n\r\n    <button *ngIf=\"loggedUser.role === 'Admin' || loggedUser.role === 'Manager'\"\r\n            class=\"btn btn-success btn-sm\"\r\n            (click)=\"newBlogForm()\">Новий пост</button>\r\n    <button [disabled]=\"loadingBlogs\" class=\"btn btn-primary btn-info btn-sm\"\r\n            (click)=\"reloadBlogs()\">Перезавантажити</button>\r\n  </div>\r\n</div>\r\n<br/>\r\n\r\n<div class=\"row\" *ngIf=\"!newPost\">\r\n  <div class=\"col-12\" *ngFor=\"let blog of blogs\">\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h4>{{blog.title}}</h4>\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <p class=\"card-text\">{{blog.body}}</p>\r\n      </div>\r\n\r\n      <div class=\"card-footer text-muted\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4 col-sm-12\">\r\n            <button [routerLink]=\"['/blogs/ch/edit-blog', blog._id]\"\r\n                    *ngIf=\"blog.createdBy_id === loggedUser._id ||\r\n                    loggedUser.role === 'Admin' || loggedUser.role === 'Manager'\"\r\n                    class=\"btn btn-sm btn-info\">Редагувати</button>\r\n            <button [routerLink]=\"['/blogs/ch/delete-blog', blog._id]\"\r\n                    *ngIf=\"blog.createdBy_id === loggedUser._id ||\r\n                    loggedUser.role === 'Admin' || loggedUser.role === 'Manager'\"\r\n                    [disabled]=\"loadingBlogs\" class=\"btn btn-danger btn-sm\">Видалити</button>\r\n\r\n            <div class=\"c_dropdown\" *ngIf=\"blog.createdBy_id !== loggedUser._id\">\r\n              <button class=\"btn btn-success btn-sm\">Лайки</button>\r\n              <div class=\"c_dropdown-content\">\r\n                <p><a href=\"#\">user1</a></p>\r\n                <p><a href=\"#\">user2</a></p>\r\n                <p><a href=\"#\">user3</a></p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"c_dropdown\" *ngIf=\"blog.createdBy_id !== loggedUser._id\">\r\n              <button class=\"btn btn-success btn-sm\">Нелайки</button>\r\n              <div class=\"c_dropdown-content\">\r\n                <p><a href=\"#\">user1</a></p>\r\n                <p><a href=\"#\">user2</a></p>\r\n                <p><a href=\"#\">user3</a></p>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-md-2 col-sm-6\">\r\n            <strong>Автор: </strong>{{blog.createdBy}}\r\n          </div>\r\n          <div class=\"col-md-2 col-sm-6\">\r\n            <strong>Дата: </strong>{{blog.createdAt | date: 'dd.MM.yyyy HH:mm'}}\r\n          </div>\r\n\r\n          <div class=\"col-md-2 col-sm-6\" *ngIf=\"blog.createdBy_id === loggedUser._id\">\r\n            <strong>Лайків </strong>{{blog.likes}}\r\n          </div>\r\n          <div class=\"col-md-2 col-sm-6\" *ngIf=\"blog.createdBy_id === loggedUser._id\">\r\n            <strong>Нелайків </strong>{{blog.dislikes}}\r\n          </div>\r\n        </div>\r\n        <br/>\r\n\r\n\r\n\r\n      </div>\r\n\r\n      <ul class=\"list-group\" *ngIf=\"!newPost\">\r\n        <li class=\"list-group-item\">\r\n          <button class=\"btn btn-sm btn-danger\" (click)=\"draftComment()\">\r\n            Коментувати\r\n          </button>\r\n          <!--<form>-->\r\n          <!--<textarea name=\"comment\" id=\"\" cols=\"30\" rows=\"10\" class=\"form-control\">-->\r\n          <!--<button class=\"btn btn-sm btn-info\">Submit</button>-->\r\n          <!--<button class=\"btn btn-sm btn-info\">Cancel</button>-->\r\n          <!--</textarea>-->\r\n          <!--</form>-->\r\n        </li>\r\n\r\n\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <br/>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/blogs/list-blogs/list-blogs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blogs/list-blogs/list-blogs.component.ts":
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
var ListBlogsComponent = (function () {
    function ListBlogsComponent(blogsService, authService, flashMessage, validateService) {
        this.blogsService = blogsService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.newPost = false;
        this.loadingBlogs = false;
        this.processing = false;
    }
    ListBlogsComponent.prototype.ngOnInit = function () {
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
            showOnMainPage: new forms_1.FormControl('', []),
        });
        this.authService.getLoggedUser()
            .subscribe(function (user) { return _this.loggedUser = user; });
        this.getBlogs();
    };
    ListBlogsComponent.prototype.getBlogs = function () {
        var _this = this;
        this.blogsService.getBlogs()
            .subscribe(function (result) { return _this.blogs = result.data; }, function (error) {
            _this.flashMessage.show(error.message, {
                cssClass: 'alert-danger',
                timeout: 2000
            });
        });
    };
    ListBlogsComponent.prototype.onBlogSubmit = function () {
        var _this = this;
        if (!this.blogForm.value.showOnMainPage) {
            this.blogForm.value.showOnMainPage = false;
        }
        var newBlog = {
            title: this.blogForm.value.title,
            body: this.blogForm.value.body,
            showOnMainPage: this.blogForm.value.showOnMainPage
        };
        this.disableBlogForm();
        this.blogsService.addBlog(newBlog)
            .subscribe(function (result) {
            _this.processing = false;
            _this.enableBlogForm();
            if (result.success) {
                _this.getBlogs();
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
    ListBlogsComponent.prototype.goBack = function () {
        this.newPost = false;
        this.blogForm.reset();
        // window.location.reload();
    };
    // Enable new blog form
    ListBlogsComponent.prototype.enableBlogForm = function () {
        this.blogForm.get('title').enable(); // Enable title field
        this.blogForm.get('body').enable(); // Enable body field
    };
    // Disable new blog form
    ListBlogsComponent.prototype.disableBlogForm = function () {
        this.blogForm.get('title').disable(); // Disable title field
        this.blogForm.get('body').disable(); // Disable body field
    };
    ListBlogsComponent.prototype.newBlogForm = function () {
        this.newPost = true;
    };
    ListBlogsComponent.prototype.reloadBlogs = function () {
        // this.loadingBlogs = true;
        this.getBlogs();
    };
    ListBlogsComponent.prototype.draftComment = function () {
    };
    return ListBlogsComponent;
}());
ListBlogsComponent = __decorate([
    core_1.Component({
        selector: 'app-list-blogs',
        template: __webpack_require__("../../../../../src/app/components/blogs/list-blogs/list-blogs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/blogs/list-blogs/list-blogs.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof blogs_service_1.BlogsService !== "undefined" && blogs_service_1.BlogsService) === "function" && _a || Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _b || Object, typeof (_c = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _c || Object, typeof (_d = typeof validate_service_1.ValidateService !== "undefined" && validate_service_1.ValidateService) === "function" && _d || Object])
], ListBlogsComponent);
exports.ListBlogsComponent = ListBlogsComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=list-blogs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/blogs/new-blog/new-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Додати блог</h2>\r\n\r\n<form [formGroup]=\"blogForm\" (ngSubmit)=\"onBlogSubmit()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"row form-group\">\r\n\r\n        <!--title-->\r\n          <div class=\"col-md-4\">\r\n            <label for=\"title\">Заголовок</label>\r\n          </div>\r\n          <div class=\"col-md-8\">\r\n            <input formControlName=\"title\" required\r\n                   class=\"form-control\" id=\"title\" placeholder=\"Заголовок\">\r\n            <div class=\"alert alert-danger\" role=\"alert\"\r\n                 *ngIf=\"(blogForm.controls['title'].errors?.minlength ||\r\n             blogForm.controls['title'].errors?.maxlength ||\r\n             blogForm.controls['title'].errors?.required) &&\r\n             blogForm.controls['title'].touched\">\r\n              Довжина від 4 до 50 символів\r\n            </div>\r\n            <div class=\"alert alert-danger\" role=\"alert\"\r\n                 *ngIf=\"blogForm.controls['title'].errors?.pattern && blogForm.controls['title'].touched\">\r\n              Використовуйте тільки цифри і букви\r\n            </div>\r\n          </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n\r\n    </div>\r\n  </div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n      <!--body-->\r\n      <div class=\"form-group\" [formGroup]=\"blogForm.get('body')\">\r\n\r\n        <!--body mainImage-->\r\n        <div class=\"form-group\">\r\n          <label for=\"body.mainImage\">Головне зображення</label>\r\n          <input formControlName=\"mainImage\" required autocomplete=\"false\"\r\n                 class=\"form-control\" id=\"body.mainImage\" placeholder=\"Головне зображення\">\r\n          <div class=\"alert alert-danger\" role=\"alert\"\r\n               *ngIf=\"blogForm.get('body').get('mainImage').errors?.required &&\r\n               blogForm.get('body').get('mainImage').touched\">\r\n            Введіть шлях до зображення\r\n          </div>\r\n        </div>\r\n\r\n        <!--body mainText-->\r\n        <div class=\"form-group\">\r\n          <label for=\"body.mainText\">Вступ</label>\r\n          <textarea formControlName=\"mainText\" cols=\"30\" rows=\"3\"\r\n                    required autocomplete=\"false\"\r\n                    class=\"form-control\" id=\"body.mainText\" placeholder=\"Вступ\"></textarea>\r\n          <div class=\"alert alert-danger\" role=\"alert\"\r\n               *ngIf=\"(blogForm.get('body').get('mainText').errors?.minlength ||\r\n               blogForm.get('body').get('mainText').errors?.maxlength) ||\r\n               blogForm.get('body').get('mainText').errors?.required &&\r\n               blogForm.get('body').get('mainText').touched\">\r\n               Довжина від 4 до 1000 символів\r\n          </div>\r\n        </div>\r\n\r\n        <!--body components-->\r\n\r\n        <!--{{blogForm.get('body').get('components').controls[i].get('material').value | json}}-->\r\n        <!--<p>&#45;&#45;&#45;&#45;</p>-->\r\n        <!--{{blogForm.controls['body'].controls['components'].controls[i].controls['material'].value | json}}-->\r\n\r\n        <div class=\"form-group\" formArrayName=\"components\">\r\n          <div *ngFor=\"let component of blogForm.get('body').get('components').controls; let i=index\">\r\n            <div class=\"form-group\" [formGroupName]=\"i\">\r\n\r\n              <!--body components material-->\r\n              <div class=\"form-group\">\r\n              <label for=\"body.components.material\">Матеріал</label>\r\n              <input formControlName=\"material\" required autocomplete=\"false\"\r\n                     class=\"form-control\" id=\"body.components.material\" placeholder=\"Матеріал\">\r\n              </div>\r\n              <!--body components quantity-->\r\n              <div class=\"form-group\">\r\n                <label for=\"body.components.quantity\">Кількість</label>\r\n                <input formControlName=\"quantity\" required autocomplete=\"false\"\r\n                       class=\"form-control\" id=\"body.components.quantity\" placeholder=\"Кількість\">\r\n              </div>\r\n              <!--body components quantity-->\r\n              <div class=\"form-group\">\r\n                <label for=\"body.components.unit\">Одиниця</label>\r\n                <input formControlName=\"unit\" required autocomplete=\"false\"\r\n                       class=\"form-control\" id=\"body.components.unit\" placeholder=\"Одиниця\">\r\n              </div>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"removeComponent(i)\">Видалити</button>\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <!--body components end-->\r\n        <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"addComponent()\">Додати матеріал</button>\r\n\r\n        <!--body blocks-->\r\n        <div class=\"form-group\" formArrayName=\"blocks\">\r\n          <div *ngFor=\"let block of blogForm.get('body').get('blocks').controls; let i=index\">\r\n            <div class=\"form-group\" [formGroupName]=\"i\">\r\n\r\n              <!--body blocks image-->\r\n              <div class=\"form-group\">\r\n                <label for=\"body.blocks.image\">Зображення</label>\r\n                <input formControlName=\"image\" required autocomplete=\"false\"\r\n                       class=\"form-control\" id=\"body.blocks.image\" placeholder=\"Зображення\">\r\n              </div>\r\n              <!--body blocks text-->\r\n              <div class=\"form-group\">\r\n                <label for=\"body.blocks.text\">Текст</label>\r\n                <input formControlName=\"text\" required autocomplete=\"false\"\r\n                       class=\"form-control\" id=\"body.blocks.text\" placeholder=\"Текст\">\r\n              </div>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"removeBlock(i)\">Видалити</button>\r\n\r\n          </div>\r\n        </div>\r\n        <!--body blocks end-->\r\n        <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"addBlock()\">Додати текстовий блок</button>\r\n\r\n      </div>\r\n      <!--body end-->\r\n\r\n      <!--on main page-->\r\n      <div class=\"form-group\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input  class=\"form-check-input\" type=\"checkbox\" formControlName=\"showOnMainPage\"\r\n                    [formGroup]=\"blogForm\" id=\"showOnMainPage\">   На головній</label>\r\n        </div>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"!blogForm.valid\">Запостити</button>\r\n      <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"goBack()\">Повернутись</button>\r\n\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/blogs/new-blog/new-blog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blogs/new-blog/new-blog.component.ts":
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
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/index.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var NewBlogComponent = (function () {
    function NewBlogComponent(blogsService, authService, flashMessage) {
        this.blogsService = blogsService;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    NewBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogForm = new forms_1.FormGroup({
            title: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(4),
                forms_1.Validators.maxLength(50),
                forms_1.Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
            ]),
            body: new forms_1.FormGroup({
                mainImage: new forms_1.FormControl('', [
                    forms_1.Validators.required,
                ]),
                mainText: new forms_1.FormControl('', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(90),
                ]),
                components: new forms_1.FormArray([
                    this.initComponents()
                ]),
                blocks: new forms_1.FormArray([
                    this.initBlocks()
                ]),
            }),
            showOnMainPage: new forms_1.FormControl('', []),
        });
        this.authService.getLoggedUser()
            .subscribe(function (user) { return _this.loggedUser = user; });
    };
    NewBlogComponent.prototype.initComponents = function () {
        return new forms_1.FormGroup({
            material: new forms_1.FormControl('', []),
            quantity: new forms_1.FormControl('', []),
            unit: new forms_1.FormControl('', []),
        });
    };
    NewBlogComponent.prototype.initBlocks = function () {
        return new forms_1.FormGroup({
            image: new forms_1.FormControl('', []),
            text: new forms_1.FormControl('', [
                forms_1.Validators.minLength(4),
                forms_1.Validators.maxLength(500),
            ])
        });
    };
    NewBlogComponent.prototype.addBlock = function () {
        var control = this.blogForm.get('body').get('blocks');
        control.push(this.initComponents());
    };
    NewBlogComponent.prototype.removeBlock = function (i) {
        var control = this.blogForm.get('body').get('blocks');
        control.removeAt(i);
    };
    NewBlogComponent.prototype.addComponent = function () {
        var control = this.blogForm.get('body').get('components');
        control.push(this.initComponents());
    };
    NewBlogComponent.prototype.removeComponent = function (i) {
        var control = this.blogForm.get('body').get('components');
        control.removeAt(i);
    };
    NewBlogComponent.prototype.onBlogSubmit = function () {
        var _this = this;
        // this.addComponent();
        if (!this.blogForm.value.showOnMainPage) {
            this.blogForm.value.showOnMainPage = false;
        }
        // const newBlog = {
        //   title: this.blogForm.value.title,
        //   body: {
        //     mainImage: this.blogForm.get('body').get('mainImage').value,
        //     mainText: this.blogForm.get('body').get('mainText').value,
        //     components: {
        //       material: this.blogForm.get('body').get('components').get('material').value,
        //       // quantity: this.blogForm.get('body').get('components').get('quantity').value,
        //       // unit: this.blogForm.get('body').get('components').get('unit').value,
        //     }
        //   },
        //   showOnMainPage: this.blogForm.value.showOnMainPage,
        //   createdBy_id: this.loggedUser._id
        // };
        // console.log('newBlog', newBlog);
        console.log('this.blogForm.value', this.blogForm.value);
        console.log('this.blogForm', this.blogForm);
        this.blogsService.addBlog(this.blogForm.value)
            .subscribe(function (result) {
            console.log('result', result);
            if (result.success) {
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
    return NewBlogComponent;
}());
NewBlogComponent = __decorate([
    core_1.Component({
        selector: 'app-new-blog',
        template: __webpack_require__("../../../../../src/app/components/blogs/new-blog/new-blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/blogs/new-blog/new-blog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof blogs_service_1.BlogsService !== "undefined" && blogs_service_1.BlogsService) === "function" && _a || Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _b || Object, typeof (_c = typeof angular2_flash_messages_1.FlashMessagesService !== "undefined" && angular2_flash_messages_1.FlashMessagesService) === "function" && _c || Object])
], NewBlogComponent);
exports.NewBlogComponent = NewBlogComponent;
var _a, _b, _c;
//# sourceMappingURL=new-blog.component.js.map

/***/ })

});
//# sourceMappingURL=blogs.module.chunk.js.map