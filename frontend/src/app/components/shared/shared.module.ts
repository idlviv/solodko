import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ItemComponent} from './item/item.component';
import {Page404Component} from './page404/page404.component';
import { MenuHComponent } from './menu-h/menu-h.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ItemComponent,
    Page404Component,
    MenuHComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ItemComponent,
    Page404Component,
    MenuHComponent
  ]
})
export class SharedModule {}
