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
  // imagelist = [
  //   'icon-borderless.png',
  //   'icon-borderless.png',
  //   'icon-borderless.png',
  //   'icon-borderless.png',
  //   'icon-borderless.png',
  //   'icon-borderless.png',
  //   'icon-borderless.png',
  //   'icon-borderless.png',
  //   'icon-borderless.png',
  //   'icon-borderless.png',
  //   'icon-borderless.png'
  // ];


  imageList = [
    {title: "Jinse", 
    text: "Ripio Closes $37 million ICO for Ethereum Lending Network",
    icon1: "fas fa-chart-line",
    icon2: "fas fa-chart-line",
    date: "04/08-09/2019",
    location:"SAN FRANSISCO - US"},
    {title: "Jinse", 
    text: "Ripio Closes $37 million ICO for Ethereum Lending Network",
    icon1: "fas fa-chart-line",
    icon2: "fas fa-chart-line",
    date: "04/08-09/2019",
    location:"SAN FRANSISCO - US"},
    {title: "Jinse", 
    text: "Ripio Closes $37 million ICO for Ethereum Lending Network",
    icon1: "fas fa-chart-line",
    icon2: "fas fa-chart-line",
    date: "04/08-09/2019",
    location:"SAN FRANSISCO - US"},
    {title: "Jinse", 
    text: "Ripio Closes $37 million ICO for Ethereum Lending Network",
    icon1: "fas fa-chart-line",
    icon2: "fas fa-chart-line",
    date: "04/08-09/2019",
    location:"SAN FRANSISCO - US"},
    {title: "Jinse", 
    text: "Ripio Closes $37 million ICO for Ethereum Lending Network",
    icon1: "fas fa-chart-line",
    icon2: "fas fa-chart-line",
    date: "04/08-09/2019",
    location:"SAN FRANSISCO - US"},
    {title: "Jinse", 
    text: "Ripio Closes $37 million ICO for Ethereum Lending Network",
    icon1: "fas fa-chart-line",
    icon2: "fas fa-chart-line",
    date: "04/08-09/2019",
    location:"SAN FRANSISCO - US"},
    {title: "Jinse", 
    text: "Ripio Closes $37 million ICO for Ethereum Lending Network",
    icon1: "fas fa-chart-line",
    icon2: "fas fa-chart-line",
    date: "04/08-09/2019",
    location:"SAN FRANSISCO - US"},
    {title: "Jinse", 
    text: "Ripio Closes $37 million ICO for Ethereum Lending Network",
    icon1: "fas fa-chart-line",
    icon2: "fas fa-chart-line",
    date: "04/08-09/2019",
    location:"SAN FRANSISCO - US"},
    {title: "Jinse", 
    text: "Ripio Closes $37 million ICO for Ethereum Lending Network",
    icon1: "fas fa-chart-line",
    icon2: "fas fa-chart-line",
    date: "04/08-09/2019",
    location:"SAN FRANSISCO - US"},
    {title: "Jinse", 
    text: "Ripio Closes $37 million ICO for Ethereum Lending Network",
    icon1: "fas fa-chart-line",
    icon2: "fas fa-chart-line",
    date: "04/08-09/2019",
    location:"SAN FRANSISCO - US"},
    {title: "Jinse", 
    text: "Ripio Closes $37 million ICO for Ethereum Lending Network",
    icon1: "fas fa-chart-line",
    icon2: "fas fa-chart-line",
    date: "04/08-09/2019",
    location:"SAN FRANSISCO - US"},
    
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
