import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeSectionComponent } from './home-section/home-section.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {HomeComponent} from './home.component';
import {ProductResolverService} from '../../services/product-resolver.service';
import {HomeBlogComponent} from './home-blog/home-blog.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeSectionComponent,
        resolve: {products: ProductResolverService}
      },
      {
        path: '',
        outlet: 'sidemenu',
        component: SideMenuComponent
      },
      {
        path: '',
        outlet: 'blog',
        component: HomeBlogComponent
      },
      {
        path: '**',
        component: HomeSectionComponent
      },
      {
        path: '**',
        outlet: 'sidemenu',
        component: SideMenuComponent
      }]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      homeRoutes
    )],
  exports: [RouterModule]
})

export class HomeRoutingModule {}

