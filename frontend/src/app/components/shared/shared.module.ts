import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ItemComponent} from './item/item.component';
import {Page404Component} from './page404/page404.component';
import { MenuHComponent } from './menu-h/menu-h.component';
import {RouterModule} from '@angular/router';
import { ModalImgComponent } from './modal-img/modal-img.component';
import { BlogComponent } from './blog/blog.component';
import { PopupComponent } from './popup/popup.component';
import { CommentComponent } from './comment/comment.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedService} from '../../services/shared.service';

@NgModule({
  declarations: [
    ItemComponent,
    Page404Component,
    MenuHComponent,
    ModalImgComponent,
    BlogComponent,
    PopupComponent,
    CommentComponent,
    CommentFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    ItemComponent,
    BlogComponent,
    ModalImgComponent,
    Page404Component,
    MenuHComponent,
    PopupComponent,
    CommentComponent,
    CommentFormComponent
  ],
  // providers: [
  //   SharedService,
  // ]
})
export class SharedModule {}
