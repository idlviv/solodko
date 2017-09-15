import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../../../interfaces/i-product';

@Component({
  selector: 'app-modal-img',
  templateUrl: './modal-img.component.html',
  styleUrls: ['./modal-img.component.css']
})
export class ModalImgComponent implements OnInit {
  @Input() product: IProduct;

  constructor() { }

  ngOnInit() {
    console.log(this.product);
  }

}
