import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {IUser} from '../../../interfaces/i-user';

@Component({
  selector: 'app-admin-panel-submenu',
  templateUrl: './admin-panel-submenu.component.html',
  styleUrls: ['./admin-panel-submenu.component.css']
})
export class AdminPanelSubmenuComponent implements OnInit {
  menuList: object[];
  guest: IUser = {
    name: '',
    email: '',
    username: '',
    password: '',
    role: 'Guest',
  };
  user: IUser = this.guest;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.authService.getLoggedUser()
      .subscribe(
        user => this.user = user
      );

    this.menuList = [
      {
        name: 'Додати товар',
        route: 'add-product',
        permission: ['Manager', 'Admin'],
      },
      {
        name: 'Редагувати товар',
        route: 'edit-product',
        permission: ['Manager', 'Admin'],

      },
      {
        name: 'Додати користувача',
        route: 'add-user',
        permission: ['Admin'],
      },
    ];
  }

  checkPermission(user, menuItem) {
    for (let i = 0; i < menuItem.permission.length; i++) {
      if (menuItem.permission[i] === user.role) {
        return true;
      }
    }
    return false;
  }
}
