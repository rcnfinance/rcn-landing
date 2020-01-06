import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
  animations: LandingAnimations.animations
})
export class HowItWorksComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('RCN | How It Works');
  }

}
