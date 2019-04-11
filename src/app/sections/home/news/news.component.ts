import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  animations: [
    trigger('slideInLeft', [
      state('enterLeft', style({ transform: 'translateX(0)', opacity: 0.2})),
      transition('void => enterLeft', [
        style({ transform: 'translateX(20px)', opacity: 0.2 }),
        animate('600ms ease-in')
      ]),
    ]),
    trigger('slideInRight', [
      state('enterRight', style({ transform: 'translateX(0)' })),
      transition('void => enterRight', [
        style({ transform: 'translateX(-20px)', opacity: 0 }),
        animate('600ms ease-in')
      ])
    ]),
    trigger('opacity', [
      state('opacity',
        style({
          opacity: 0.2,
        })
      ),
      transition('* => opacity', [
        animate('0ms ease-in')
      ])
    ])
  ]
})
export class NewsComponent implements OnInit {

  hideScrollbar;
  disabled;
  xDisabled;
  yDisabled;

  content: IContent[] = [];

  activeContent: IContent[] = [];
  activeContentStartIndex: number;
  maxActiveContent = 5;

  constructor() { }

  ngOnInit() {
    this.content = [
      {
        title: "LendIt USA 2019",
        text: "LendIt is one of the world’s leading events in financial services innovation, fintech, digital banking, blockchain and lending.",
        icon1: "fas fa-calendar-alt",
        icon2: "fas fa-map-marker-alt",
        date: "04/08-09/2019",
        location: "SAN FRANSISCO - US",
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
        icon1: "fas fa-chart-line",
        icon2: "fas fa-chart-line",
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
  }

  right() {

    if (this.activeContentStartIndex < this.content.length - this.maxActiveContent) {
      ++this.activeContentStartIndex;
      this.activateContent(this.activeContentStartIndex, 'right');
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