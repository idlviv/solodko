import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ICatalog} from '../interfaces/i-catalog';
import {Observable} from 'rxjs/Observable';
import {CatalogService} from './catalog.service';

@Injectable()
export class CatalogResolverService implements Resolve<ICatalog> {
  catalog: ICatalog[];

  constructor(private catalogService: CatalogService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ICatalog> {

    return this.catalogService.getCatalog();
  }
}

