import { Component, OnInit } from '@angular/core';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-origin-char',
  templateUrl: './origin-char.component.html',
  styleUrls: ['./origin-char.component.scss'],
  animations: LandingAnimations.animations
})
export class OriginCharComponent implements OnInit {

  characteristics: ICharacteristic[];

  constructor() { }

  ngOnInit() {

    this.characteristics = [
      {img: '../../../../assets/icons/icon-liquid.png',
      title: 'Globaly liquid',
      text: 'By reducing fees and eliminating entry barriers RCN increases efficiency throughout the lending process.',
      selected: 'notSelected', opacity: 'notopacity', expanded : false},
      {img: '../../../../assets/icons/icon-term.png',
      title: 'Term flexible',
      text: 'By reducing fees and eliminating entry barriers RCN increases efficiency throughout the lending process.',
      selected: 'notSelected', opacity: 'notopacity', expanded : false},
      {img: '../../../../assets/icons/icon-plugplay.png',
      title: 'Plug & play',
      text: 'By reducing fees and eliminating entry barriers RCN increases efficiency throughout the lending process.',
      selected: 'notSelected', opacity: 'notopacity', expanded : false}
      ];
  }

  updateNoSelections() {
    for (const characteristic of this.characteristics) {
        characteristic.selected = 'notSelected';
        characteristic.opacity = 'notOpacity';
        characteristic.expanded = false;
    }
  }


   updateCharacteristics(title: string) {
        for (const characteristic of this.characteristics) {
          if (characteristic.title !== title) {
            characteristic.selected = 'notSelected';
            characteristic.opacity = 'opacity';
            characteristic.expanded = false;
          } else {
            characteristic.selected = 'selected';
            characteristic.opacity = 'notOpacity';
            characteristic.expanded = true;
          }
        }
  }

}



interface ICharacteristic {
  img: string;
  title: string;
  text: string;
  selected: string;
  opacity: string;
  expanded: boolean;
}