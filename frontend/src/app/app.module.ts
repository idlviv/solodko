import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { AppRoutingModule } from './app-routing.module';

import {SharedModule} from './components/shared/shared.module';
import {UsersModule} from './components/users/users.module';
import {BlogsModule} from './components/blogs/blogs.module';

import {ProductResolverService} from './services/product-resolver.service';
import {ProductService} from './services/product.service';
import {CatalogService} from './services/catalog.service';
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {BlogsService} from './services/blogs.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AuthAdminGuard} from './guards/auth-admin.guard';
import {AuthManagerGuard} from './guards/auth-manager.guard';
import {AuthUserGuard} from './guards/auth-user.guard';
import {NoAuthGuard} from './guards/noAuth.guard';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';

import {MyUrlSerializer} from './services/url-serializer.service';
import {CustomErrorHandler} from './services/CustomErrorHandler';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    UsersModule,
    BlogsModule,
    AppRoutingModule,
    FlashMessagesModule,
    BrowserAnimationsModule,
  ],
  exports: [
    SharedModule,
  ],
  providers: [
    MyUrlSerializer,
    CatalogService,
    ProductService,
    ProductResolverService,
    ValidateService,
    AuthAdminGuard,
    AuthManagerGuard,
    AuthUserGuard,
    NoAuthGuard,
    AuthService,
    CustomErrorHandler,
    BlogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
