import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {AuthMenuGuard} from '../../guards/auth-menu.guard';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router, GuardsCheckEnd, Event, NavigationStart} from '@angular/router';
import {CatalogService} from '../../services/catalog.service';
import {ICatalog} from '../../interfaces/i-catalog';
import {AuthAdminGuard} from '../../guards/auth-admin.guard';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  localCatalog: ICatalog[];
  isAdmin: boolean;

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
    // this.authMenuGuard.canActivateMenuAdmin()
    //   .subscribe(isAdmin => this.isAdmin = isAdmin);

  // this.isAdmin =
    this.router.events
        .filter(event => event instanceof NavigationStart)
        .subscribe(() => {

          this.authService.loggedInRole()
            .subscribe(
              (result) => {
                if (result === 'Admin') {
                  console.log('authMenuGuard - isAdmin', result);
                  return this.isAdmin = true;
                } else {
                  console.log('authMenuGuard - isAdmin', result);
                  return this.isAdmin = false;
                }
              },
              (err) => {
                console.log('authMenuGuard - isAdmin - false', err);
                this.isAdmin = false;
                console.log('this.isAdmin - on error', this.isAdmin);
                return this.isAdmin;
                // throw err;
              });
      });
    // this.isAdmin = this.authMenuGuard.isAdmin()
    //     .subscribe(isAdmin => {
    //       console.log('isAdmin', isAdmin);
    //
    //       return isAdmin;
    //     },
    //       (err) => false
    //   );
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
