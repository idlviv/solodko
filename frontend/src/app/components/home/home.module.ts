import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeSectionComponent} from './home-section/home-section.component';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './home.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {HomeRoutingModule} from './home-routing.module';
import {BlogsModule} from '../blogs/blogs.module';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import {SharedService} from '../../services/shared.service';

@NgModule({
  declarations: [
    HomeSectionComponent,
    HomeComponent,
    SideMenuComponent,
    HomeBlogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    BlogsModule
  ],
  exports: [],

})
export class HomeModule {}
