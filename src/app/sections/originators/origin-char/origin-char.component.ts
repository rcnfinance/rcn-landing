import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-origin-char',
  templateUrl: './origin-char.component.html',
  styleUrls: ['./origin-char.component.scss']
})
export class OriginCharComponent implements OnInit {

  content = [
    {img: "../../../../assets/icons/icon-multicurrency.png", 
    title: "Clobaly liquid"},
    {img: "../../../../assets/icons/icon-competitive.png", 
    title: "Term flexible"},
    {img: "../../../../assets/icons/icon-risk.png", 
    title: "Plug & play"}
    ];

  constructor() { }

  ngOnInit() {
  }

}
