import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(800)),
    ]),
    trigger('slideInUp', [
      transition(':enter', [
        style({ transform: 'translateY(0)', opacity: 0 }),
        animate('800ms ease-in', style({ transform: 'translateY(0%)', opacity: 1 }))
      ]),
    ])
  ]
})
export class MainContainerComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  mobile = false;
  menu = false;

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
