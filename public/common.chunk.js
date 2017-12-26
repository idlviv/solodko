webpackJsonp(["common"],{

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
        ],
        exports: []
    })
], BlogsModule);
exports.BlogsModule = BlogsModule;
//# sourceMappingURL=blogs.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/blogs/delete-blog/delete-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Дфйсно видалити пост?</h2>\n<button class=\"btn btn-danger btn-sm\" (click)=\"onConfirmDelete()\">Видалити</button>\n<button class=\"btn btn-info btn-sm\" (click)=\"onCancelDelete()\">Відмінити</button>\n<br/>\n<div class=\"row\" *ngIf=\"blog\">\n  <div class=\"col\">\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4>{{blog.title}}</h4>\n      </div>\n\n      <div class=\"card-footer text-muted\">\n        <div class=\"row\">\n          <div class=\"col-md-4 col-sm-12\">\n\n          </div>\n          <div class=\"col-md-2 col-sm-6\">\n            <strong>Автор: </strong>{{blog.createdBy}}\n          </div>\n          <div class=\"col-md-2 col-sm-6\">\n            <strong>Дата: </strong>{{blog.createdAt | date: 'dd.MM.yyyy HH:mm'}}\n          </div>\n\n          <div class=\"col-md-2 col-sm-6\">\n            <strong>Лайків </strong>{{blog.likes}}\n          </div>\n          <div class=\"col-md-2 col-sm-6\">\n            <strong>Нелайків </strong>{{blog.dislikes}}\n          </div>\n        </div>\n        <br/>\n      </div>\n    </div>\n  </div>\n</div>\n"

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

module.exports = "<h2 class=\"page-header\">Редагувати пост</h2>\n\n<div class=\"row\">\n  <div class=\"col\">\n\n    <form [formGroup]=\"editBlogForm\" (ngSubmit)=\"onEditBlogSubmit()\" *ngIf=\"blog\">\n      <div class=\"form-group\">\n        <label for=\"title\">Заголовок</label>\n        <input formControlName=\"title\" [formGroup]=\"editBlogForm\" required\n               class=\"form-control\" id=\"title\" placeholder=\"Заголовок\" [(ngModel)]=\"blog.title\">\n        <div class=\"alert alert-danger\" role=\"alert\"\n             *ngIf=\"(editBlogForm.controls['title'].errors?.minlength ||\n              editBlogForm.controls['title'].errors?.maxlength) && editBlogForm.controls['title'].touched\">\n          Довжина від 4 до 50 символів\n        </div>\n        <div class=\"alert alert-danger\" role=\"alert\"\n             *ngIf=\"editBlogForm.controls['title'].errors?.pattern && editBlogForm.controls['title'].touched\">\n          Використовуйте тільки цифри і букви\n        </div>\n        <!--{{editBlogForm.controls['title'].errors | json}}-->\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"body\">Текст</label>\n        <textarea formControlName=\"body\" cols=\"30\" rows=\"5\"\n                  [formGroup]=\"editBlogForm\" required autocomplete=\"false\"\n                  class=\"form-control\" id=\"body\" placeholder=\"\" [(ngModel)]=\"blog.body\"></textarea>\n        <div class=\"alert alert-danger\" role=\"alert\"\n             *ngIf=\"(editBlogForm.controls['body'].errors?.minlength ||\n              editBlogForm.controls['body'].errors?.maxlength) && editBlogForm.controls['body'].touched\">\n          Довжина від 4 до 1000 символів\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"!editBlogForm.valid || processing\">Зберегти</button>\n      <button [disabled]=\"processing\" type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"goBack()\">Повернутись</button>\n      <button [routerLink]=\"['/blogs/ch/delete-blog', blog._id]\" type=\"button\" class=\"btn btn-danger btn-sm\">Видалити</button>\n\n    </form>\n\n  </div>\n</div>\n"

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

module.exports = "<h2 class=\"page-header\">Блог</h2>\n\n<!--new blog form-->\n<div *ngIf=\"newPost\" class=\"row\">\n  <div class=\"col\">\n\n    <form [formGroup]=\"blogForm\" (ngSubmit)=\"onBlogSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"title\">Заголовок</label>\n        <input formControlName=\"title\" [formGroup]=\"blogForm\" required\n               class=\"form-control\" id=\"title\" placeholder=\"Заголовок\">\n        <div class=\"alert alert-danger\" role=\"alert\"\n             *ngIf=\"(blogForm.controls['title'].errors?.minlength ||\n          blogForm.controls['title'].errors?.maxlength) && blogForm.controls['title'].touched\">\n          Довжина від 4 до 50 символів\n        </div>\n        <div class=\"alert alert-danger\" role=\"alert\"\n             *ngIf=\"blogForm.controls['title'].errors?.pattern && blogForm.controls['title'].touched\">\n          Використовуйте тільки цифри і букви\n        </div>\n        <!--{{blogForm.controls['title'].errors | json}}-->\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"body\">Текст</label>\n        <textarea formControlName=\"body\" cols=\"30\" rows=\"5\"\n                  [formGroup]=\"blogForm\" required autocomplete=\"false\"\n                  class=\"form-control\" id=\"body\" placeholder=\"\"></textarea>\n        <div class=\"alert alert-danger\" role=\"alert\"\n             *ngIf=\"(blogForm.controls['body'].errors?.minlength ||\n          blogForm.controls['body'].errors?.maxlength) && blogForm.controls['body'].touched\">\n          Довжина від 4 до 1000 символів\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"!blogForm.valid || processing\">Запостити</button>\n      <button [disabled]=\"processing\" type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"goBack()\">Повернутись</button>\n    </form>\n  </div>\n</div>\n<!--end of new blog form-->\n\n<div class=\"row\" *ngIf=\"!newPost\">\n  <div class=\"col\">\n\n    <button *ngIf=\"loggedUser.role === 'Admin' || loggedUser.role === 'Manager'\"\n            class=\"btn btn-success btn-sm\"\n            (click)=\"newBlogForm()\">Новий пост</button>\n    <button [disabled]=\"loadingBlogs\" class=\"btn btn-primary btn-info btn-sm\"\n            (click)=\"reloadBlogs()\">Перезавантажити</button>\n  </div>\n</div>\n<br/>\n\n<div class=\"row\" *ngIf=\"!newPost\">\n  <div class=\"col\" *ngFor=\"let blog of blogs\">\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4>{{blog.title}}</h4>\n      </div>\n\n      <div class=\"card-body\">\n        <p class=\"card-text\">{{blog.body}}</p>\n      </div>\n\n      <div class=\"card-footer text-muted\">\n        <div class=\"row\">\n          <div class=\"col-md-4 col-sm-12\">\n            <button [routerLink]=\"['/blogs/ch/edit-blog', blog._id]\"\n                    *ngIf=\"blog.createdBy_id === loggedUser._id ||\n                    loggedUser.role === 'Admin' || loggedUser.role === 'Manager'\"\n                    class=\"btn btn-sm btn-info\">Редагувати</button>\n            <button [routerLink]=\"['/blogs/ch/delete-blog', blog._id]\"\n                    *ngIf=\"blog.createdBy_id === loggedUser._id ||\n                    loggedUser.role === 'Admin' || loggedUser.role === 'Manager'\"\n                    [disabled]=\"loadingBlogs\" class=\"btn btn-danger btn-sm\">Видалити</button>\n\n            <div class=\"c_dropdown\" *ngIf=\"blog.createdBy_id !== loggedUser._id\">\n              <button class=\"btn btn-success btn-sm\">Лайки</button>\n              <div class=\"c_dropdown-content\">\n                <p><a href=\"#\">user1</a></p>\n                <p><a href=\"#\">user2</a></p>\n                <p><a href=\"#\">user3</a></p>\n              </div>\n            </div>\n\n            <div class=\"c_dropdown\" *ngIf=\"blog.createdBy_id !== loggedUser._id\">\n              <button class=\"btn btn-success btn-sm\">Нелайки</button>\n              <div class=\"c_dropdown-content\">\n                <p><a href=\"#\">user1</a></p>\n                <p><a href=\"#\">user2</a></p>\n                <p><a href=\"#\">user3</a></p>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"col-md-2 col-sm-6\">\n            <strong>Автор: </strong>{{blog.createdBy}}\n          </div>\n          <div class=\"col-md-2 col-sm-6\">\n            <strong>Дата: </strong>{{blog.createdAt | date: 'dd.MM.yyyy HH:mm'}}\n          </div>\n\n          <div class=\"col-md-2 col-sm-6\" *ngIf=\"blog.createdBy_id === loggedUser._id\">\n            <strong>Лайків </strong>{{blog.likes}}\n          </div>\n          <div class=\"col-md-2 col-sm-6\" *ngIf=\"blog.createdBy_id === loggedUser._id\">\n            <strong>Нелайків </strong>{{blog.dislikes}}\n          </div>\n        </div>\n        <br/>\n\n\n\n      </div>\n\n      <ul class=\"list-group\" *ngIf=\"!newPost\">\n        <li class=\"list-group-item\">\n          <button class=\"btn btn-sm btn-danger\" (click)=\"draftComment()\">\n            Коментувати\n          </button>\n          <!--<form>-->\n          <!--<textarea name=\"comment\" id=\"\" cols=\"30\" rows=\"10\" class=\"form-control\">-->\n          <!--<button class=\"btn btn-sm btn-info\">Submit</button>-->\n          <!--<button class=\"btn btn-sm btn-info\">Cancel</button>-->\n          <!--</textarea>-->\n          <!--</form>-->\n        </li>\n\n\n      </ul>\n    </div>\n  </div>\n  <br/>\n\n</div>\n\n"

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

/***/ })

});
//# sourceMappingURL=common.chunk.js.map