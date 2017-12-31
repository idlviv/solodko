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

  orderImg: any;
  orderText: any;


  constructor() { }

  ngOnInit() {
    if (this.index % 2 === 0) {
      this.orderImg = 'order-lg-1 order-1';
      this.orderText = 'order-lg-2 order-2';
    } else {
      this.orderImg = 'order-lg-2 order-1';
      this.orderText = 'order-lg-1 order-2';
    }
  }

}
