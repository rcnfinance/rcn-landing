import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingAnimations } from 'src/app/animations/animations';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: LandingAnimations.animations
})

export class HeaderComponent implements OnInit {

  content: IContent[];

  activeContent: IContent[] = [];
  activeContentIndex: number;
  enabledLeft = false;
  first = true;
  last = false;
  screen = 0;

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
      this.activeContent[0].selected = 'enterLeft';
      this.activeContent[0].fadeIn = 'fadeIn';
    }
    this.screen --
    if (this.screen < 0) {
      this.screen = 0;
    }
    this.check()
  }

  right() {

    if (this.activeContentIndex < this.content.length - 1) {
      this.activeContent[0].selected = 'notSelected';
      this.activeContent[0].fadeIn = 'notFadeIn';
      ++this.activeContentIndex;
      this.activeContent.shift();
      this.activeContent.push(this.content[this.activeContentIndex]);
      this.activeContent[0].selected = 'enterLeft';
      this.activeContent[0].fadeIn = 'fadeIn';
    }
    this.screen ++
    if (this.screen > 2) {
      this.screen = 2;
    }
    this.check()
  }

  check() {
    if (this.screen == 0) {
      this.first = true;
      this.last = false;
    } else if (this.screen == 2) {
      this.first = false;
      this.last = true;
    } else {
      this.first = false;
      this.last = false;
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