import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-the-network',
  templateUrl: './the-network.component.html',
  styleUrls: ['./the-network.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide',   style({
        opacity: 0,
        transform: 'translateX(0)'
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('600ms ease-in'))
    ])
  ]
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
