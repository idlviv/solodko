import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {CatalogService} from '../../services/catalog.service';
import {ICatalog} from '../../interfaces/i-catalog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  localCatalog: ICatalog[];

  constructor(
    public authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private catalogService: CatalogService
  ) {}

  ngOnInit() {
    this.localCatalog = this.catalogService.getCatalog();
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show(
      'Logged out',
      {
        cssClass: 'alert-success',
        timeout: 3000
      });
    this.router.navigate(['/login']);
    return false;
  }
}
