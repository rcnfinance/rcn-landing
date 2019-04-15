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
  lineState = 'hide';

  constructor(public el: ElementRef, private router: Router) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition + 750 >= componentPosition) {
      this.lineState = 'show';
      this.state = 'show';
    } else {
      this.lineState = 'hide';
      this.state = 'hide';
    }

  }

  ngOnInit() {
  }

}
