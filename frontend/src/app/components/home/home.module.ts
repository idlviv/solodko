import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeSectionComponent} from './home-section/home-section.component';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './home.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {HomeRoutingModule} from './home-routing.module';

@NgModule({
  declarations: [
    HomeSectionComponent,
    HomeComponent,
    SideMenuComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports: []

})
export class HomeModule {}
