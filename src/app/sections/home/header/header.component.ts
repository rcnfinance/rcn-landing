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
    trigger('fadeIn', [
      state('fadeIn', style({
        opacity: 1
      })),
      transition('void=>fadeIn', [ style({ transform: 'translateX(0)', opacity: 0 }), animate('600ms ease-in')]),
    ]),
    trigger('slideInLeft', [
      state('selected', style({ transform: 'translateX(0)' })),
      transition('void => selected', [
        style({ transform: 'translateX(20px)', opacity: 0 }),
        animate('600ms ease-in')
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

  activeContent: IContent[] = [];
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
        selected: 'notSelected',
        fadeIn: 'notFadeIn'
      },
      {
        title: 'BLOCKCHAIN GLOBAL LENDING',
        img: '../../../../assets/img/slider-blockchain_desktop.jpg',
        imgMobile: '../../../../assets/img/slider-blockchain_mobile.jpg',
        selected: 'notSelected',
        fadeIn: 'notFadeIn'
      },
      {
        title: 'FRICTIONLESS DEBT MARKETS',
        img: '../../../../assets/img/slider-frictionless_desktop.jpg',
        imgMobile: '../../../../assets/img/slider-frictionless_mobile.jpg',
        selected: 'notSelected',
        fadeIn: 'notFadeIn'
      }
    ];

    this.activeContent.push(this.content[0]);
    this.activeContentIndex = 0;
    this.activeContent[0].fadeIn = 'fadeIn';
  }


  left() {
    if (this.activeContentIndex > 0) {
      this.activeContent[0].selected = 'notSelected';
      this.activeContent[0].fadeIn = 'notFadeIn';
      --this.activeContentIndex;
      this.activeContent.shift();
      this.activeContent.push(this.content[this.activeContentIndex]);


      this.activeContent[0].selected = 'selected';
      this.activeContent[0].fadeIn = 'fadeIn';

      console.log(this.activeContent);
    }
  }

  right() {

    if (this.activeContentIndex < this.content.length - 1) {
      this.activeContent[0].selected = 'notSelected';
      this.activeContent[0].fadeIn = 'notFadeIn';
      ++this.activeContentIndex;
      this.activeContent.shift();
      this.activeContent.push(this.content[this.activeContentIndex]);
 
      this.activeContent[0].selected = 'selected';
      this.activeContent[0].fadeIn = 'fadeIn';

      console.log(this.activeContent);
    }

  }

}


interface IContent {
  title: string;
  img: string;
  imgMobile: string;
  selected: string;
  fadeIn: string;
}