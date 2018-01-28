import { Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appScrolling]'
})
export class ScrollingDirective {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    // do tracking
    // console.log('scrolled', event.target.scrollTop);
    // Listen to click events in the component
    const tracker = event.target;
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log('youre at the bottom of the page');
    }
    const limit = tracker.scrollHeight - tracker.clientHeight;
    console.log(event.target.scrollTop, limit);
    if (event.target.scrollTop === limit) {
      alert('end reached');
    }
  }

  constructor() { }


}
