import {Component, Input, OnInit} from '@angular/core';
import {IBlog} from '../../../interfaces/i-blog';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() blog: IBlog;

  constructor(
  ) { }

  ngOnInit() {}
}
