import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';

// import {ProductsModule} from './components/products/products.module';
// import {HomeModule} from './components/home/home.module';
import {SharedModule} from './components/shared/shared.module';
import {UsersModule} from './components/users/users.module';
// import {ProductsManagementModule} from './components/products-management/products-management.module';
import {MyUrlSerializer} from './services/url-serializer.service';
import {ProductResolverService} from './services/product-resolver.service';
import {ProductService} from './services/product.service';
import {CatalogService} from './services/catalog.service';
import {ValidateService} from './services/validate.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthAdminGuard} from './guards/auth-admin.guard';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import {AuthManagerGuard} from './guards/auth-manager.guard';
import {AuthUserGuard} from './guards/auth-user.guard';
import {AuthService} from './services/auth.service';
// import {AdminPanelModule} from './components/admin-panel/admin-panel.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    // ProductsModule,
    // ProductsManagementModule,
    // HomeModule,
    SharedModule,
    UsersModule,
    AppRoutingModule,
    FlashMessagesModule,
    BrowserAnimationsModule,
    // AdminPanelModule,

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
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
