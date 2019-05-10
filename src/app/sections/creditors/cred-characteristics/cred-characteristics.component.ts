import { Component, OnInit } from '@angular/core';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-cred-characteristics',
  templateUrl: './cred-characteristics.component.html',
  styleUrls: ['./cred-characteristics.component.scss'],
  animations: LandingAnimations.animations
})
export class CredCharacteristicsComponent implements OnInit {

  characteristics: ICharacteristic[];

  constructor() { }

  ngOnInit() {
    this.characteristics = [
      {img: '../../../../assets/icons/icon-multicurrency.svg',
      title: 'Multicurrency',
      text: 'By reducing fees and eliminating entry barriers RCN increases efficiency throughout the lending process.',
      selected: 'notSelected', opacity: 'notopacity', expanded : false},
      {img: '../../../../assets/icons/icon-competitive.svg',
      title: 'Competitive',
      text: 'By reducing fees and eliminating entry barriers RCN increases efficiency throughout the lending process.',
      selected: 'notSelected', opacity: 'notopacity', expanded : false},
      {img: '../../../../assets/icons/icon-risk.svg',
      title: 'Risk Versatile',
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
