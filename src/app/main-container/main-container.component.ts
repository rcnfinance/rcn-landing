import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LandingAnimations } from '../animations/animations';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  animations: LandingAnimations.animations
})
export class MainContainerComponent implements OnInit {

  state = 'default';
  lineState = 'hide';
  mobile = false;
  menu = false;

  constructor(public el: ElementRef,  private router: Router) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset;

      console.info('componentPosition', componentPosition);
      console.info('scrollPosition', scrollPosition);

      if (scrollPosition > componentPosition) {
        this.lineState = 'show';
        this.state = 'scrollAndShrink';
      } else {
        this.lineState = 'hide';
        this.state = 'default';
      }

    }
 

  mobileMenu() {
    this.mobile = !this.mobile;
    this.menu = !this.menu;
  }

  hideMenu() {
    this.menu = !this.menu;
  }

  ngOnInit() {
  }

}
