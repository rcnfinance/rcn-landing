import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

  content = [
    {img: "../../../../assets/icons/icon-frictionless.png", 
    title: "Frictionless"},
    {img: "../../../../assets/icons/icon-transparent.png", 
    title: "Transparent"},
    {img: "../../../../assets/icons/icon-borderless.png", 
    title: "Borderless"}
    ];
  title = ["Frictionless","2","3"];
  constructor() { }

  

  ngOnInit() {
  }

}
