import {DefaultUrlSerializer, UrlTree} from '@angular/router';

export class MyUrlSerializer extends DefaultUrlSerializer {

  parse(url: string): UrlTree {
    // url.replace('%20', '-');
    return super.parse(url);
  }


  serialize(tree: UrlTree): string {
    return super.serialize(tree);
    // return super.serialize(tree).replace('%20', '-');
  }
}
