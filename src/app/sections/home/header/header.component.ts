import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(3000)),
    ]),
    trigger('EnterLeft', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.6s ease-in')
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({transform: 'translateX(20px)', opacity: 0}),
        animate('600ms ease-in', style({transform: 'translateX(0%)', opacity: 1}))
      ]),
    ]),
    trigger('slideInUp', [
      transition(':enter', [
        style({transform: 'translateY(20px)', opacity: 0}),
        animate('600ms ease-in', style({transform: 'translateY(0%)', opacity: 1}))
      ]),
    ])
  ]
})

export class HeaderComponent implements OnInit {

  content = {title: "RCN",
            img: "../../../../assets/img/slider-RCN_desktop.jpg",
            imgMobile: "../../../../assets/img/slider-RCN_mobile.jpg"};
  counter = 0;
  hidden = false;

  constructor(private router: Router) { }

  hide(){
    this.hidden = true;
  }

  navigate(){
    this.router.navigate(['how-it-works']);
  }

  changingContent(){
    if (this.counter == 0) {
    this.content = {title: "RCN",
                    img: "../../../../assets/img/slider-RCN_desktop.jpg",
                    imgMobile: "../../../../assets/img/slider-RCN_mobile.jpg"};
    } else if (this.counter == 1) {
      this.content = {title: "BLOCKCHAIN GLOBAL LENDING",
                      img: "../../../../assets/img/slider-blockchain_desktop.jpg",
                      imgMobile: "../../../../assets/img/slider-blockchain_mobile.jpg"};
    } else {
      this.content = {title: "FRICTIONLESS DEBT MARKETS",
                      img: "../../../../assets/img/slider-frictionless_desktop.jpg",
                      imgMobile: "../../../../assets/img/slider-frictionless_mobile.jpg"};
    }
  }

  left(){
    this.counter--
    if (this.counter < 0) {
      this.counter = 0
    }
    this.changingContent()
  }

  right(){
    this.counter++
    console.log(123)
    if (this.counter > 2) {
      this.counter = 2
    }
    this.changingContent()
  }



  ngOnInit() {
  }

}
