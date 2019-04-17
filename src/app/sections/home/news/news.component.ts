import { Component, OnInit, ViewChild } from '@angular/core';

import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  hideScrollbar;
  disabled;
  xDisabled;
  yDisabled;

  info = [
    {title: "", 
    text: "",
    icon1: "",
    icon2: "",
    date: "",
    location:""},
    {title: "LendIt USA 2019", 
    text: "LendIt is one of the world’s leading events in financial services innovation, fintech, digital banking, blockchain and lending.",
    icon1: "fas fa-calendar-alt",
    icon2: "fas fa-map-marker-alt",
    date: "04/08-09/2019",
    location:"San Fransisco - US"},
    {title: "Coindesk", 
    text: "Ripio Rolls Out Crypto-Powered Loans Across Latin America.",
    icon1: "",
    icon2: "",
    date: "",
    location:""},
    {title: "EDCON 2019", 
    text: "EDCON is a global conference series aiming to accelerate the development of the Ethereum ecosystem worldwide.",
    icon1: "fas fa-calendar-alt",
    icon2: "fas fa-map-marker-alt",
    date: "04/08-14/2019",
    location:"Sydney - Australia"},
    {title: "Forbes", 
    text: "A Journey From Poverty To Banking The Unbanked in Argentina.",
    icon1: "",
    icon2: "",
    date: "",
    location:""},
    {title: "Cointelegraph", 
    text: "Ripio Closes $37 million ICO for Ethereum Lending Network.",
    icon1: "",
    icon2: "",
    date: "",
    location:""},
    {title: "Venturebeat", 
    text: "RCN launches Ripio engine to bring blockchain and smart-contracts to loans.",
    icon1: "",
    icon2: "",
    date: "",
    location:""},
    {title: "Nasdaq", 
    text: "Trade Talks - Blockchain is Transforming Global Credit and Lending.",
    icon1: "",
    icon2: "",
    date: "",
    location:""},
    ];
  leftNavDisabled = false;
  rightNavDisabled = false;
  index = 0;

  @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;

  moveLeft($event) {
    this.ds.moveLeft();
    console.info(123)
  }

  moveRight() {
    this.ds.moveRight();
  }

  moveTo(index) {
    this.ds.moveTo(index);
  }

  leftBoundStat(reachesLeftBound: boolean) {
    this.leftNavDisabled = reachesLeftBound;
  }

  rightBoundStat(reachesRightBound: boolean) {
    this.rightNavDisabled = reachesRightBound;
  }

  // ngAfterViewInit() {
  //   // Starting ngx-drag-scroll from specified index(3)
  //   setTimeout(() => {
  //     this.ds.moveTo(3);
  //   }, 0);
  // }


  // @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;

  // moveLeft() {
  //   this.ds.moveLeft();
  // }

  // moveRight() {
  //   this.ds.moveRight();
  // }

  // moveTo(index) {
  //   this.ds.moveTo(index);
  // }
  constructor() { }

  ngOnInit() {
  }


}
