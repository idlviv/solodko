import { Component, OnInit, Input } from '@angular/core';
import {IBlog} from '../../../interfaces/i-blog';
import {IBlogOptions} from '../../../interfaces/i-options';
import {Location} from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() blog: IBlog;
  @Input() index: number;
  @Input() blogOptions: IBlogOptions;

  // onMain: boolean;
  orderMainImage: any;
  orderMainText: any;
  startOrder: number;

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
    this.getMainImageOrderStyle();

  }

  getMainImageOrderStyle() {
    if (this.index % 2 === 0) {
      this.orderMainImage = 'order-md-1 order-1';
      this.orderMainText = 'order-md-2 order-2';
      this.startOrder = 0;
    } else {
      this.orderMainImage = 'order-md-2 order-1';
      this.orderMainText = 'order-md-1 order-2';
      this.startOrder = 1;
    }
  }

  getOrderStyle(i, startPosition): string {
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
      return 'order-md-' + subOrder + ' order-1';
    } else {
      return 'order-md-' + order + ' order-2';
    }
  }

  goBack() {
    this.location.back();
  }

}
