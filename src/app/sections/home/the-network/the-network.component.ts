import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-the-network',
  templateUrl: './the-network.component.html',
  styleUrls: ['./the-network.component.scss'],
  animations: LandingAnimations.animations
})

export class TheNetworkComponent implements OnInit {

  state = 'hide';

  constructor(public el: ElementRef,  private router: Router) { }

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
