import { Component, OnInit, Input } from '@angular/core';
import {IProduct} from "../../../interfaces/i-product";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
