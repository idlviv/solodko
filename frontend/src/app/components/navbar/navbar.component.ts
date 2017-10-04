import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {AuthMenuGuard} from '../../guards/auth-menu.guard';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {CatalogService} from '../../services/catalog.service';
import {ICatalog} from '../../interfaces/i-catalog';
import {AuthAdminGuard} from '../../guards/auth-admin.guard';
import {Observable} from 'rxjs/Observable';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  localCatalog: ICatalog[];
  // isAdmin: Observable<boolean>;

  constructor(
    public authService: AuthService,
    public authAdminGuard: AuthAdminGuard,
    private authMenuGuard: AuthMenuGuard,

    private router: Router,
    private flashMessage: FlashMessagesService,
    private catalogService: CatalogService
  ) {}

  ngOnInit() {
    this.localCatalog = this.catalogService.getCatalog();
    // this.isAdmin = this.authMenuGuard.canActivateMenuAdmin();
  }

  hide() {
    if ($('.navbar-toggler').css('display') === 'block') {
      $('button.navbar-toggler').click();
    }
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
