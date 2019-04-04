import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-origin-char',
  templateUrl: './origin-char.component.html',
  styleUrls: ['./origin-char.component.scss']
})
export class OriginCharComponent implements OnInit {

  content = [
    {img: "../../../../assets/icons/icon-multicurrency.png", 
    title: "Multicurrency"},
    {img: "../../../../assets/icons/icon-competitive.png", 
    title: "Scalable"},
    {img: "../../../../assets/icons/icon-risk.png", 
    title: "Borderless"}
    ];

  constructor() { }

  ngOnInit() {
  }

}
