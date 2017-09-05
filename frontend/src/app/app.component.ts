import {Component, OnInit} from '@angular/core';
import {CatalogService} from './services/catalog.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ICatalog} from './interfaces/i-catalog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public catalog: ICatalog[];

  constructor(private catalogService: CatalogService,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.catalogService.getCatalog()
      .subscribe(
          catalog => {
            console.log('app catalog ', catalog);
            return this.catalog = catalog
              ;},
          (error) => {
            this.flashMessage.show(
              error,
              {
                cssClass: 'alert-danger',
                timeout: 3000
              });
            return false;
          });
  }
}
