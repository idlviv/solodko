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
  role: string;

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

      this.router.events
          .filter(event => event instanceof NavigationStart)
          .subscribe(() => this.checkUser())
  }

  hide() {
    if ($('.navbar-toggler').css('display') === 'block') {
      $('button.navbar-toggler').click();
    }
  }


  checkUser() {
    console.log('check user');
    this.authService.getProfile()
      .subscribe (user => {
        return this.user = user;
        },
        err => this.user = this.guest
      )
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
