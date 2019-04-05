import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  constructor() { }


  home = true;
  creditors = false;
  originators = false;
  developers = false;
  how = false;
  mobile = false;
  menu = false;

  sectionHome() {
    this.home = true;
    this.creditors = false;
    this.originators = false;
    this.developers = false;
    this.how = false;
  }

  
  sectionCreditors() {
    this.home = false;
    this.creditors = true;
    this.originators = false;
    this.developers = false;
    this.how = false;
  }

  sectionOriginators() {
    this.home = false;
    this.creditors = false;
    this.originators = true;
    this.developers = false;
    this.how = false;
  }

  sectionDevelopers() {
    this.home = false;
    this.creditors = false;
    this.originators = false;
    this.developers = true;
    this.how = false;
  }

  sectionHow() {
    this.home = false;
    this.creditors = false;
    this.originators = false;
    this.developers = false;
    this.how = true;
  }

  mobileMenu() {
    this.mobile = !this.mobile;
  }

  hideMenu() {
    this.menu = !this.menu;
  }

  clearSec() {
  this.creditors = false;
  this.originators = false;
  this.developers = false;
  this.how = false;
  }



  ngOnInit() {
  }

}
