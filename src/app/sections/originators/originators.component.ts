import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-originators',
  templateUrl: './originators.component.html',
  styleUrls: ['./originators.component.scss'],
  animations: LandingAnimations.animations
})
export class OriginatorsComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('RCN | Originators');
  }

}
