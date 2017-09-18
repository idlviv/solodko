import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IProduct} from '../../../interfaces/i-product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() product: IProduct;
  @Input() parentComponentLink: any;
  @Output() imageClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onImageClick(product: IProduct) {
    this.imageClick.emit(product);
  }
}
