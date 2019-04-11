import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-meet-the-dapp',
  templateUrl: './meet-the-dapp.component.html',
  styleUrls: ['./meet-the-dapp.component.scss'],
  animations: LandingAnimations.animations
})
export class MeetTheDappComponent implements OnInit {

  state = 'hide';

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    console.info('componentPosition', componentPosition);
    console.info('scrollPosition', scrollPosition);

    if (scrollPosition + 700 >= componentPosition) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }

  }

  ngOnInit() {
  }

}
