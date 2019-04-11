import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingAnimations } from '../animations/animations';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  animations: LandingAnimations.animations
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
