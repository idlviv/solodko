import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
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

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private uploadService: UploadService,
  ) {}

  ngOnInit() {

    // підписується на юзера з auth.service
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
    const formData = new FormData();
    formData.append('file', this.changeAvatarForm.get('file').value);
console.log('this.changeAvatarForm.get(\'file\').value', this.changeAvatarForm.get('file').value);
    this.uploadService.uploadPic(formData)
      .subscribe(result => console.log('result', result));

  }

  changeAvatar(event) {
    this.editAvatar = true;
    console.log('event', event.target.files[0]);
    console.log('event', event);
    this.changeAvatarForm.get('file').setValue(event.target.files[0]);

  }
}
