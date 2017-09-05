import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products-management-submenu',
  templateUrl: './products-management-submenu.component.html',
  styleUrls: ['./products-management-submenu.component.css']
})
export class ProductsManagementSubmenuComponent implements OnInit {

  menuList: object[];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
     this.menuList = [
     {
       name: 'Редагувати товар',
       route: 'edit-product',
     },
     {
       name: 'Додати товар',
       route: 'add-product',
     },
    ];
  }
}
