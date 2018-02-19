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
  editForm: FormGroup;
  changeAvatarForm: FormGroup;

  editAvatar = false;
  previewAvatarUrl;
  processingChangeAvatar = false;

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private uploadService: UploadService,
  ) {}

  ngOnInit() {

    this.editForm = new FormGroup({
      emailSignup: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      nameSignup: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
      ]),
      surnameSignup: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
      ]),
    });

    // підписується на юзера з auth.service
    // this.getUsersProfile();
    this.authService.getProfile()
      .subscribe(profile => {
          this.user = profile;
          console.log('this.user', this.user);
          this.editForm.patchValue(this.user);

        },
        error => this.flashMessage.show(error, {cssClass: 'alert-danger', timeout: 3000}));

    this.editForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
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

  onEditForm() {
    this.editMode = true;

  }

  onSubmitEditForm() {
    console.log('submit');
    this.editMode = false;

  }

  onCancelEditForm() {
    console.log('cancel');

    this.editMode = false;

  }

  editModeOn() {
    this.editMode = true;
  }

  saveChanges() {
    this.editMode = false;
  }

  onSubmitEditForm0() {

  }

  onSubmitChangeAvatarForm() {
    this.processingChangeAvatar = true;
    this.uploadService.uploadPic(this.changeAvatarForm.get('file').value, this.user)
      .subscribe(result => {
        this.authService.getProfile()
          .subscribe(profile => {
            this.user = profile;
            this.previewAvatarUrl = null;
            this.processingChangeAvatar = false;
            if (!result.success) {
              this.flashMessage.show(result.message, {cssClass: 'alert-danger', timeout: 3000});
            }
              this.editAvatar = false;
          },
            error => {
              this.flashMessage.show(
                error,
                {
                  cssClass: 'alert-danger',
                  timeout: 3000
                });
              this.editAvatar = false;
            });
      });
  }

  changeAvatar(event) {
    this.editAvatar = true;
    const checkFile = this.uploadService.checkFile(event.target);

    if (!checkFile.success) {
      this.cancelChangeAvatar();
      this.flashMessage.show(checkFile.message, {cssClass: 'alert-danger', timeout: 3000});
    } else {
      this.changeAvatarForm.get('file').setValue(event.target.files[0]);

      const reader = new FileReader();

      reader.addEventListener('load', (readerEvent: any) => {
        // .jpg, .jpe, .jpeg, .bmp, .webp, .png
        this.previewAvatarUrl = readerEvent.target.result;
        console.log('reader onload');
      });

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  cancelChangeAvatar() {
    this.changeAvatarForm.get('file').setValue(null);
    this.editAvatar = false;
    this.previewAvatarUrl = null;
  }
}
