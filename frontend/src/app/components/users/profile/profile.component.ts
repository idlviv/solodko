import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UploadService} from '../../../services/upload.service';

import {config} from '../../../app.config';

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
  @ViewChild('inputFile') inputFile;

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

  }
// f(){
//   // создать объект для формы
//   var formData = new FormData(document.forms.person);
//
//   // добавить к пересылке ещё пару ключ - значение
//   formData.append("patronym", "Робертович");
//   console.log(formData);
//   // отослать
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", config.serverUrl + 'upload/upload');
//   xhr.send(formData);
// }

  changeAvatar(event) {

    let iii = document.getElementById('iii');
    console.log('iii', iii.value);

    const formData: FormData = new FormData();
    formData.append('iii', iii);
  console.log('form data', formData.get('iii'));

    this.editAvatar = true;
    console.log('event', typeof(event.target.files[0]));
    // console.log('event', event);
    this.changeAvatarForm.get('file').setValue(event.target.files[0]);
    this.uploadService.uploadPic(this.changeAvatarForm.get('file').value)
      .subscribe(result => console.log('result', result));

    // this.uploadService.uploadPic(this.inputFile.nativeElement.files[0])
    //   .subscribe(result => console.log('result', result));

  }

}
