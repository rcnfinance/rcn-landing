import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LandingAnimations } from '../../animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: LandingAnimations.animations
})
export class HomeComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('RCN - Global Lending');
  }

}
