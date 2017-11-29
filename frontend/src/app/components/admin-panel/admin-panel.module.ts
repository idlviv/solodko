import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminPanelSubmenuComponent } from './admin-panel-submenu/admin-panel-submenu.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {AdminPanelRoutingModule} from './admin-panel-routing.module';
import { ProductsManagementComponent } from './products-management/products-management.component';
import {ProductsManagementModule} from './products-management/products-management.module';
import {UsersManagementModule} from './users-management/users-management.module';
import {UsersModule} from '../users/users.module';

@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminPanelSubmenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminPanelRoutingModule,
    ProductsManagementModule,
    UsersManagementModule,
    UsersModule,
  ],

})
export class AdminPanelModule { }
