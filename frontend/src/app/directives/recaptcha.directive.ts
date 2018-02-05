import {AfterViewInit, Directive, ElementRef, Input, OnInit} from '@angular/core';
import {IReCaptchaConfig} from '../interfaces/i';
import {ControlValueAccessor} from '@angular/forms';


@Directive({
  selector: '[nbRecaptcha]',
})
export class ReCaptchaDirective implements OnInit, AfterViewInit, ControlValueAccessor {
  @Input() key : string;
  @Input() config : IReCaptchaConfig = {};
  @Input() lang : string;

  private widgetId : number;

  constructor( private element : ElementRef ) {}

  ngOnInit() {
    this.registerReCaptchaCallback();
    this.addScript();
  }

  registerReCaptchaCallback() {
    window.reCaptchaLoad = () => {
      const config = {
        ...this.config,
        'sitekey': this.key,
        'callback': this.onSuccess.bind(this),
        'expired-callback': this.onExpired.bind(this)
      };
      this.widgetId = this.render(this.element.nativeElement, config);
    };
  }

  private render( element : HTMLElement, config ) : number {
    return grecaptcha.render(element, config);
  }

  addScript() {
    let script = document.createElement('script');
    const lang = this.lang ? '&hl=' + this.lang : '';
    script.src = `https://www.google.com/recaptcha/api.js?onload=reCaptchaLoad&render=explicit${lang}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

}
