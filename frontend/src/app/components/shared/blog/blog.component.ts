import { Component, OnInit, Input } from '@angular/core';
import {IBlog} from '../../../interfaces/i-blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
@Input() blog: IBlog;

  constructor() { }

  ngOnInit() {
  }

}
