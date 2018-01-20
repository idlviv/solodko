import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {BlogsService} from '../../../services/blogs.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Location} from '@angular/common';
import {IBlog} from '../../../interfaces/i-blog';
declare const $: any;


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Input() blog: IBlog;
  @Input() job: string;
  @Output() onDeletePopEmitter = new EventEmitter<boolean>();


  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private location: Location,
  ) { }

  ngOnInit() {
  }

  deleteBlog() {
    this.blogsService.deleteBlog(this.blog._id)
      .subscribe(result => {
          if (result.success) {
            $('#popupModal').modal('hide');
            this.onDeletePopEmitter.emit();
            this.flashMessage.show(
              result.message,
              {
                cssClass: 'alert-success',
                timeout: 2000
              });
          } else {
            this.flashMessage.show(
              result.message,
              {
                cssClass: 'alert-danger',
                timeout: 2000
              });
          }
        });
  }

  goBack() {
    this.location.back();
  }

}
