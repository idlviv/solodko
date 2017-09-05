import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ItemComponent} from './item/item.component';
import {Page404Component} from './page404/page404.component';

@NgModule({
  declarations: [
    ItemComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ItemComponent,
    Page404Component
  ]
})
export class SharedModule {}
