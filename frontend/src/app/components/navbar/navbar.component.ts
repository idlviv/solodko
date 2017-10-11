import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router, NavigationStart} from '@angular/router';
import {CatalogService} from '../../services/catalog.service';
import {ICatalog} from '../../interfaces/i-catalog';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {IUser} from '../../interfaces/i-user';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  localCatalog: ICatalog[];
  guest: IUser = {
    name: '',
    email: '',
    username: '',
    password: '',
    role: 'Guest',
  };
  user: IUser = this.guest;
  // user = {} as IUser;
  role = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private catalogService: CatalogService
  ) {}

  ngOnInit() {

    this.localCatalog = this.catalogService.getCatalog();

    // On each change of route check user rights (getProfile)
      this.router.events
          .filter(event => event instanceof NavigationStart)
          .subscribe(() => {

            this.authService.getProfile()
                .subscribe (
                  user => this.user = user,
                  err => this.user = this.guest
                );
          });
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
