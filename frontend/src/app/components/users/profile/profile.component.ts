import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UploadService} from '../../../services/upload.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: Object;
  editMode = false;
  editAvatar = false;
  editForm: FormGroup;
  changeAvatarForm: FormGroup;
  previewAvatarUrl;
  processingChangeAvatar = false;

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private uploadService: UploadService,
  ) {}

  ngOnInit() {

    // підписується на юзера з auth.service
    // this.getUsersProfile();
    this.authService.getProfile()
      .subscribe(profile => this.user = profile,
        error => {
          this.flashMessage.show(
            error,
            {
              cssClass: 'alert-danger',
              timeout: 3000
            });
          return false;
        });

    this.editForm = new FormGroup({
      password : new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.pattern('[a-zA-Z0-9]+'),
      ]),
    });

    this.changeAvatarForm = new FormGroup({
      file : new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  // getUsersProfile() {
  //
  // }

  onVerificationSend() {
    this.authService.sendVerificationEmail()
      .subscribe(() => {
        this.flashMessage.show(
          'Перевірте пошту, повідомлення надіслано',
          {
            cssClass: 'alert-success',
            timeout: 3000
          });
        return true;
        },
      error => {
        this.flashMessage.show(
          error,
          {
            cssClass: 'alert-danger',
            timeout: 3000
          });
        return false;
      });
  }

  editModeOn() {
    this.editMode = true;
  }

  saveChanges() {
    this.editMode = false;
  }

  onSubmitchangeAvatarForm() {
    this.processingChangeAvatar = true;
    this.editAvatar = false;
    this.uploadService.uploadPic(this.changeAvatarForm.get('file').value, this.user)
      .subscribe(result => {
        this.authService.getProfile()
          .subscribe(profile => {
            this.user = profile;
            this.previewAvatarUrl = null;
            this.processingChangeAvatar = false;
            if (!result.success) {
              this.flashMessage.show(
                result.message,
                {
                  cssClass: 'alert-danger',
                  timeout: 3000
                });
            }
            console.log('result', result);
          },
            error => {
              this.flashMessage.show(
                error,
                {
                  cssClass: 'alert-danger',
                  timeout: 3000
                });
              return false;
            });
        // console.log('user.avatar', this.user.avatar);

      });
  }

  changeAvatar(event) {
    this.editAvatar = true;

    if (event.target.files && event.target.files[0]) {

      this.changeAvatarForm.get('file').setValue(event.target.files[0]);

      const reader = new FileReader();

      reader.onload = (readerEvent: any) => {
        this.previewAvatarUrl = readerEvent.target.result;
        console.log('reader onload');
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  cancelChangeAvatar() {
    this.changeAvatarForm.get('file').setValue(null);
    this.editAvatar = false;
    this.previewAvatarUrl = null;
  }
}
