import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ItemComponent} from './item/item.component';
import {Page404Component} from './page404/page404.component';
import { MenuHComponent } from './menu-h/menu-h.component';
import {RouterModule} from '@angular/router';
import { ModalImgComponent } from './modal-img/modal-img.component';
import { PopupComponent } from './popup/popup.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ItemComponent,
    Page404Component,
    MenuHComponent,
    ModalImgComponent,
    PopupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    ItemComponent,
    ModalImgComponent,
    Page404Component,
    MenuHComponent,
    PopupComponent,
  ],
})
export class SharedModule {}
