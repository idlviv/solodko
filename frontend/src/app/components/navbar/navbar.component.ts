import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {CatalogService} from '../../services/catalog.service';
import {ICatalog} from '../../interfaces/i-catalog';
import {IUser} from '../../interfaces/i-user';
import {emptyUser} from '../../data/user';
import {Observable} from 'rxjs/Observable';

declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  localCatalog: ICatalog[];
  // for async pipe
  getLoggedUser$: Observable<IUser>;

  // guest: IUser = {
  //     name: '',
  //     surname: '',
  //     email: '',
  //     username: '',
  //     password: '',
  //     role: 'Guest',
  // };
  user: IUser = emptyUser; // = this.guest;
  // // user = {} as IUser;
  // role = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private catalogService: CatalogService
  ) {}

  ngOnInit() {

    this.localCatalog = this.catalogService.getCatalog();

    this.getLoggedUser$ = this.authService.getLoggedUser();

    this.getLoggedUser$
      .subscribe(
        user => this.user = user
      );

    // On each change of route check user rights (getProfile)
    //   this.router.events
    //       .filter(event => event instanceof NavigationStart)
    //       .subscribe(() => {
            // this.authService.getProfile()
            //     .subscribe (
            //       user => this.user = user,
            //       err => this.user = this.guest
            //     );
          // });
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
