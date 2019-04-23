import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  animations: LandingAnimations.animations
})
export class NewsComponent implements OnInit {

  hideScrollbar;
  disabled;
  xDisabled;
  yDisabled;

  content: IContent[] = [];
  activeContent: IContent[] = [];
  activeContentStartIndex: number;
  maxActiveContent = 6;
  first = true;
  last = false;
  screen = 0;

  state = 'hide';
  lineState = 'hide';
  content = [];

  private isMobileResolution: boolean;

  constructor(public el: ElementRef) { }


  @HostListener('window:resize', ['$event'])
  checkWidth() {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition + 750 >= componentPosition) {
      this.lineState = 'show';
      this.state = 'show';
    } else {
    }

  }

  ngOnInit() {
    this.content = [
      {
        title: "",
        text: "",
        icon1: "",
        icon2: "",
        date: "",
        location: "",
        movement: '',
        opacity: ''
      },
      {
        title: "LendIt USA 2019",
        text: "LendIt is one of the world’s leading events in financial services innovation, fintech, digital banking, blockchain and lending.",
        icon1: "fas fa-calendar-alt",
        icon2: "fas fa-map-marker-alt",
        date: "04/08-09/2019",
        location: "San Fransisco - US",
        movement: 'noMovement',
        opacity: 'notOpacity'
      },
      {
        title: "Coindesk",
        text: "Ripio Rolls Out Crypto-Powered Loans Across Latin America.",
        icon1: "",
        icon2: "",
        date: "",
        location: "",
        movement: 'noMovement',
        opacity: 'notOpacity'
      },
      {
        title: "EDCON 2019",
        text: "EDCON is a global conference series aiming to accelerate the development of the Ethereum ecosystem worldwide.",
        icon1: "fas fa-calendar-alt",
        icon2: "fas fa-map-marker-alt",
        date: "04/08-14/2019",
        location: "Sydney - Australia",
        movement: 'noMovement',
        opacity: 'notOpacity'
      },
      {
        title: "Forbes",
        text: "A Journey From Poverty To Banking The Unbanked in Argentina.",
        icon1: "",
        icon2: "",
        date: "",
        location: "",
        movement: 'noMovement',
        opacity: 'notOpacity'
      },
      {
        title: "Cointelegraph",
        text: "Ripio Closes $37 million ICO for Ethereum Lending Network.",
        icon1: "",
        icon2: "",
        date: "",
        location: "",
        movement: 'noMovement',
        opacity: 'notOpacity'
      },
      {
        title: "Venturebeat",
        text: "RCN launches Ripio engine to bring blockchain and smart-contracts to loans.",
        icon1: "",
        icon2: "",
        date: "",
        location: "",
        movement: 'noMovement',
        opacity: 'notOpacity'
      },
      {
        title: "Nasdaq",
        text: "Trade Talks - Blockchain is Transforming Global Credit and Lending.",
        icon1: "",
        icon2: "",
        date: "",
        location: "",
        movement: 'noMovement',
        opacity: 'notOpacity'
      },
    ];

    this.activeContentStartIndex = 0;
    this.activateContent(this.activeContentStartIndex, '');

  }

  activateContent(startIndex: number, movement: string) {
    if (this.isMobileResolution === true) {
      this.maxActiveContent = 1;
    } else {
      this.maxActiveContent = 6;
    }


    let activeContent: IContent[] = [];

    activeContent = JSON.parse(JSON.stringify(this.content));


    this.activeContent = activeContent.slice(startIndex, startIndex + this.maxActiveContent);

    this.activeContent[this.activeContent.length - 1].opacity = 'opacity';

    if (movement === 'right') {
      this.activeContent[this.activeContent.length - 1].movement = 'enterLeft';
    }

    if (movement === 'left') {
      this.activeContent[0].movement = 'enterRight';
    }


  }


  left() {
    if (this.activeContentStartIndex > 0) {
      --this.activeContentStartIndex;
      this.activateContent(this.activeContentStartIndex, 'left');
    }
    this.screen --
    if (this.screen < 0) {
      this.screen = 0;
    }
    this.check()
  }

  right() {

    if (this.activeContentStartIndex < this.content.length - this.maxActiveContent) {
      ++this.activeContentStartIndex;
      this.activateContent(this.activeContentStartIndex, 'right');
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
  text: string;
  icon1: string;
  icon2: string;
  date: string;
  location: string;
  movement: string;
  opacity: string;
}