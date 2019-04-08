import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  mobile = false;
  menu = false;

  mobileMenu() {
    this.mobile = !this.mobile;
    this.menu = !this.menu;
  }

  hideMenu() {
    this.menu = !this.menu;
  }

  ngOnInit() {
  }

}
