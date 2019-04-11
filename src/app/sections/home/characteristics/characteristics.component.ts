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
      transition('* => opacity', [
        animate('300ms ease-in')
      ])
    ]),
  ]
})
export class CharacteristicsComponent implements OnInit {



  characteristics: ICharacteristic[];

  constructor() { }

  expandedStyle = false

  ngOnInit() {
    this.characteristics = [
      {
        img: '../../../../assets/icons/icon-frictionless.png',
        text:'By reducing fees and eliminating entry barriers RCN increases efficiency throughout the lending process.',
        title: 'Frictionless', selected: 'notSelected', opacity: 'notOpacity', expanded : false
      },
      {
        img: '../../../../assets/icons/icon-transparent.png',
        text:'RCN smart-contracts ensure non-custodial storage of all funds and full auditability of every transaction.',
        title: 'Transparent', selected: 'notSelected', opacity: 'notOpacity', expanded : false
      },
      {
        img: '../../../../assets/icons/icon-borderless.png',
        text:'The network seamlessly connects borrowers and creditors from all around the world.',
        title: 'Borderless', selected: 'notSelected', opacity: 'notopacity', expanded : false
      }
    ];
  }



  updateNoSelections() {
    for (const characteristic of this.characteristics) {
        characteristic.selected = 'notSelected';
        characteristic.opacity = 'notOpacity';
        characteristic.expanded = false;
        this.expandedStyle = false
    }
  }


   updateCharacteristics(title: string) {
        for (const characteristic of this.characteristics) {
          if (characteristic.title !== title) {
            characteristic.selected = 'notSelected';
            characteristic.opacity = 'opacity';
            characteristic.expanded = false;
            this.expandedStyle = false
          } else {
            characteristic.selected = 'selected';
            characteristic.opacity = 'notOpacity';
            characteristic.expanded = true;
            this.expandedStyle = true
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