import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-creditors',
  templateUrl: './creditors.component.html',
  styleUrls: ['./creditors.component.scss'],
  animations: LandingAnimations.animations
})
export class CreditorsComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('RCN | Creditors');
  }

}
