import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss'],
  animations: [
    trigger('selected', [
      state('selected',
        style({
          transform: 'scale(1.3)',
        })
      ),
      transition('selected <=> *', [
        animate('300ms ease-in')
      ])
    ]),
    trigger('opacity', [
      state('opacity',
        style({
          opacity: 0.2,
        })
      ),
      transition('opacity <=> *', [
        animate('300ms ease-in')
      ])
    ]),
  ]
})
export class CharacteristicsComponent implements OnInit {



  characteristics: ICharacteristic[];

  constructor() { }


  ngOnInit() {
    this.characteristics = [
      {
        img: '../../../../assets/icons/icon-frictionless.png',
        title: 'Frictionless', selected: 'notSelected', opacity: 'notOpacity'
      },
      {
        img: '../../../../assets/icons/icon-transparent.png',
        title: 'Transparent', selected: 'notSelected', opacity: 'notOpacity'
      },
      {
        img: '../../../../assets/icons/icon-borderless.png',
        title: 'Borderless', selected: 'notSelected', opacity: 'notopacity'
      }
    ];
  }

  updateNoSelections() {
    for (const characteristic of this.characteristics) {
        characteristic.selected = 'notSelected';
        characteristic.opacity = 'notOpacity';
    }
  }


   updateCharacteristics(title: string) {
        for (const characteristic of this.characteristics) {
          if (characteristic.title !== title) {
            characteristic.selected = 'notSelected';
            characteristic.opacity = 'opacity';
          } else {
            characteristic.selected = 'selected';
            characteristic.opacity = 'notOpacity';
          }
        }
  }

}

interface ICharacteristic {
  img: string;
  title: string;
  selected: string;
  opacity: string;
}