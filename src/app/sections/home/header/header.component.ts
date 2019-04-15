import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingAnimations } from 'src/app/animations/animations';

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