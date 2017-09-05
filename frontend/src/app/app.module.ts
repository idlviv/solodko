import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';

import {ProductsModule} from './components/products/products.module';
import {HomeModule} from './components/home/home.module';
import {SharedModule} from './components/shared/shared.module';
import {UsersManagementModule} from './components/users-management/users-management.module';
import {ProductsManagementModule} from './components/products-management/products-management.module';
import {MyUrlSerializer} from './services/url-serializer.service';
import {ProductResolverService} from './services/product-resolver.service';
import {ProductService} from './services/product.service';
import {CatalogResolverService} from './services/catalog-resolver.service';
import {CatalogService} from './services/catalog.service';
import {ValidateService} from './services/validate.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    ProductsModule,
    ProductsManagementModule,
    HomeModule,
    SharedModule,
    UsersManagementModule,
    AppRoutingModule,
    FlashMessagesModule,
  ],
  exports: [
    SharedModule,
  ],
  providers: [
    MyUrlSerializer,
    CatalogService,
    CatalogResolverService,
    ProductService,
    ProductResolverService,
    ValidateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
