import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel-submenu',
  templateUrl: './admin-panel-submenu.component.html',
  styleUrls: ['./admin-panel-submenu.component.css']
})
export class AdminPanelSubmenuComponent implements OnInit {
  menuList: object[];

  constructor() { }

  ngOnInit() {
    this.menuList = [
      {
        name: 'Додати товар',
        route: 'add-product',
      },
      {
        name: 'Редагувати товар',
        route: 'edit-product',
      },
      {
        name: 'Додати користувача',
        route: 'add-user',
      },
    ];
  }

}
