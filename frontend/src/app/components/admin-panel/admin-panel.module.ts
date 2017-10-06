import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminPanelSubmenuComponent } from './admin-panel-submenu/admin-panel-submenu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminPanelComponent, AdminPanelSubmenuComponent]
})
export class AdminPanelModule { }
