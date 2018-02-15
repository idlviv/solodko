import {Component, OnInit, Output} from '@angular/core';
// import {CatalogService} from './services/catalog.service';
// import {FlashMessagesService} from 'angular2-flash-messages';
import {ICatalog} from './interfaces/i-catalog';
import {NavigationStart, Router} from '@angular/router';
import {AuthService} from './services/auth.service';
import {IUser} from './interfaces/i-user';
// import {Observable} from 'rxjs/Observable';
import {emptyUser} from './data/user';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public catalog: ICatalog[];

  emptyUser: IUser = emptyUser;
  // guest: IUser = {
  //   name: '',
  //   surname: '',
  //   email: '',
  //   username: '',
  //   password: '',
  //   role: 'Guest',
  // };

  // @Output()
  //   user: IUser; // = this.guest;


  constructor(
    private router: Router,
    private authService: AuthService,
    // private catalogService: CatalogService,
    // private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {

    // this.authService.getLoggedUser()
    //   .subscribe(
    //     user => {
    //       console.log('user', user);
    //       return this.user = user
    //     }
    //   );

    // checks which user logged on every change route
    // to do this subscribes on change route event
    // and when it is subscribes on authService.getProfile
    this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe(() => {
        this.authService.getProfile()
          .subscribe (
            user => {
              this.authService.logUserIn(user);
            },
            () => {

              // if got error sets emptyUser (Guest) as user
              this.authService.logUserOut(this.emptyUser);
            }
          );
      });



    // this.catalogService.getCatalog()
    //   .subscribe(
    //       catalog => {
    //         console.log('app catalog ', catalog);
    //         return this.catalog = catalog
    //           ;},
    //       (error) => {
    //         this.flashMessage.show(
    //           error,
    //           {
    //             cssClass: 'alert-danger',
    //             timeout: 3000
    //           });
    //         return false;
    //       });
  }
}
