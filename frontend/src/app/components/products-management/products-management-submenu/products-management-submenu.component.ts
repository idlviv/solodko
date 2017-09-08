import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-products-management-submenu',
  templateUrl: './products-management-submenu.component.html',
  styleUrls: ['./products-management-submenu.component.css']
})
export class ProductsManagementSubmenuComponent implements OnInit {

  menuList: object[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

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
    ];
  }
}
