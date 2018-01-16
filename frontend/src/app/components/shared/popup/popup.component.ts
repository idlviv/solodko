import {Component, Input, OnInit} from '@angular/core';
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


  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private location: Location,
  ) { }

  ngOnInit() {
    // this.route.url
    //   .subscribe(url => {
    //

        // delete blog
        // if (this.job === 'delete-blog') {
        //   this.deleteBlog();
        // }
        // else {
        //   // something wrong
        //   this.flashMessage.show(
        //     'Щось не так',
        //     {cssClass: 'alert-danger', timeout: 2000});
        //   this.goBack();
    //     }
    //   });
  }

  deleteBlog() {
    this.blogsService.deleteBlog(this.blog._id)
      .subscribe(result => {
          if (result.success) {
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
        }
      );
    // $('#popupModal').modal('hide');
    //
    // this.location.back();
  }

  goBack() {
    this.location.back();
  }

}
