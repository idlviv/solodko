import { Component, OnInit, Input } from '@angular/core';
import {IBlog} from '../../../interfaces/i-blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() blog: IBlog;
  @Input() index: number;

  orderMainImage: any;
  orderMainText: any;


  constructor() { }

  ngOnInit() {
    if (this.index % 2 === 0) {
      this.orderMainImage = 'order-lg-1 order-1';
      this.orderMainText = 'order-lg-2 order-2';
    } else {
      this.orderMainImage = 'order-lg-2 order-1';
      this.orderMainText = 'order-lg-1 order-2';
    }
  }

  getOrderStyle(i, startPosition) {
    let order: number;
    let subOrder: number;
    if (this.index % 2 === 0) {
      if (i % 2 === 0) {
        order = 2;
        subOrder = 1;
      } else {
        order = 1;
        subOrder = 2;
      }
    } else {
      if (i % 2 === 0) {
        order = 1;
        subOrder = 2;
      } else {
        subOrder = 1;
        order = 2;
      }
    }
    if (!startPosition) {
      return 'order-lg-' + order + ' order-1';
    } else {
      return 'order-lg-' + subOrder + ' order-2';

    }
  }

}
