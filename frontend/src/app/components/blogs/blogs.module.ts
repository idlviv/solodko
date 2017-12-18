import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogsComponent} from './blogs.component';
import {BlogsRoutingModule} from './blogs-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BlogsRoutingModule,
    SharedModule,
  ],
  declarations: [
    BlogsComponent,
  ],
  exports: [
  ]
})
export class BlogsModule { }
