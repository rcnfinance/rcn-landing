import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { start } from 'repl';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(20px)', opacity: 0 }),
        animate('600ms ease-in')
      ])
    ]),
    trigger('selected', [
      state('selected', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(20px)', opacity: 0 }),
        animate('600ms ease-in')
      ])
    ]),
    trigger('opacity', [
      state('selected',
        style({
          opacity: 0.2,
        })
      ),
      transition('notSelected <=> *', [
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class NewsComponent implements OnInit {

  hideScrollbar;
  disabled;
  xDisabled;
  yDisabled;

  content: IContent[];

  activeContent: IContent[];
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
        selected: 'notSelected'
      },
      {
        title: "Coindesk",
        text: "Ripio Rolls Out Crypto-Powered Loans Across Latin America.",
        icon1: "",
        icon2: "",
        date: "",
        location: "",
        selected: 'notSelected'
      },
      {
        title: "EDCON 2019",
        text: "EDCON is a global conference series aiming to accelerate the development of the Ethereum ecosystem worldwide.",
        icon1: "fas fa-chart-line",
        icon2: "fas fa-chart-line",
        date: "04/08-14/2019",
        location: "Sydney - Australia",
        selected: 'notSelected'
      },
      {
        title: "Forbes",
        text: "A Journey From Poverty To Banking The Unbanked in Argentina.",
        icon1: "",
        icon2: "",
        date: "",
        location: "",
        selected: 'notSelected'
      },
      {
        title: "Cointelegraph",
        text: "Ripio Closes $37 million ICO for Ethereum Lending Network.",
        icon1: "",
        icon2: "",
        date: "",
        location: "",
        selected: 'notSelected'
      },
      {
        title: "Venturebeat",
        text: "RCN launches Ripio engine to bring blockchain and smart-contracts to loans.",
        icon1: "",
        icon2: "",
        date: "",
        location: "",
        selected: 'notSelected'
      },
      {
        title: "Nasdaq",
        text: "Trade Talks - Blockchain is Transforming Global Credit and Lending.",
        icon1: "",
        icon2: "",
        date: "",
        location: "",
        selected: 'notSelected'
      },
    ];

    this.activeContentStartIndex = 0;
    this.activateContent(this.activeContentStartIndex);

  }

  activateContent(startIndex: number) {
    const activeContent: IContent[] = [];
    for (startIndex; startIndex < this.content.length; startIndex++) {
      if (activeContent.length < this.maxActiveContent) {
        activeContent.push(this.content[startIndex]);
      }
    }
    activeContent[activeContent.length - 1].selected = 'selected';
    this.activeContent = activeContent;

    console.log(activeContent);
  }


  left() {
    if (this.activeContentStartIndex > 0) {
      --this.activeContentStartIndex;
      this.activateContent(this.activeContentStartIndex);

    }
  }

  right() {

    if (this.activeContentStartIndex < this.content.length - this.maxActiveContent) {
      ++this.activeContentStartIndex;
      this.activateContent(this.activeContentStartIndex);

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
  selected: string;
}