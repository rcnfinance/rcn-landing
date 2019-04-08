import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cred-characteristics',
  templateUrl: './cred-characteristics.component.html',
  styleUrls: ['./cred-characteristics.component.scss']
})
export class CredCharacteristicsComponent implements OnInit {

  content = [
    {img: "../../../../assets/icons/icon-multicurrency.png", 
    title: "Multicurrency"},
    {img: "../../../../assets/icons/icon-competitive.png", 
    title: "Competitive"},
    {img: "../../../../assets/icons/icon-risk.png", 
    title: "Risk Versatile"}
    ];

  constructor() { }

  ngOnInit() {
  }

}
