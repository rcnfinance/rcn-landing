import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('selected', [
      state('selected',
        style({
        })
      ),
      transition('selected <=> *', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate('600ms ease-in', style({ transform: 'translateY(0%)', opacity: 1 }))
      ])
    ]),
    trigger('fadeInOut', [
      state('fadeIn', style({
        opacity: 0
      })),
      transition('void <=> *', animate(3000)),
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(20px)', opacity: 0 }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)', opacity: 1 }))
      ]),
    ]),
    trigger('slideInUp', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate('600ms ease-in', style({ transform: 'translateY(0%)', opacity: 1 }))
      ]),
    ])
  ]
})

export class HeaderComponent implements OnInit {

  content: IContent[];

  activeContent: IContent;
  activeContentIndex: number;

  constructor(private router: Router) { }

  navigate() {
    this.router.navigate(['how-it-works']);
  }

  ngOnInit() {
    this.content = [
      {
        title: 'RCN',
        img: '../../../../assets/img/slider-RCN_desktop.jpg',
        imgMobile: '../../../../assets/img/slider-RCN_mobile.jpg',
        selected: 'selected'
      },
      {
        title: 'BLOCKCHAIN GLOBAL LENDING',
        img: '../../../../assets/img/slider-blockchain_desktop.jpg',
        imgMobile: '../../../../assets/img/slider-blockchain_mobile.jpg',
        selected: 'notSelected'
      },
      {
        title: 'FRICTIONLESS DEBT MARKETS',
        img: '../../../../assets/img/slider-frictionless_desktop.jpg',
        imgMobile: '../../../../assets/img/slider-frictionless_mobile.jpg',
        selected: 'notSelected'
      }
    ];

    this.activeContent = this.content[0];
    this.activeContentIndex = 0;

  }


  left() {
      if (this.activeContentIndex > 0) {
      --this.activeContentIndex;
      this.activeContent = this.content[this.activeContentIndex];
      this.activeContent.selected = 'selected';
    }
  }

  right() {

    if (this.activeContentIndex < this.content.length - 1) {
      ++this.activeContentIndex;
      this.activeContent = this.content[this.activeContentIndex];
      this.content[this.activeContentIndex].selected = 'selected';
    }

  }

}


interface IContent {
  title: string;
  img: string;
  imgMobile: string;
  selected: string;
}