import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { LandingAnimations } from 'src/app/animations/animations';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
  animations: LandingAnimations.animations
})
export class TypesComponent implements OnInit {
  state = 'hide';
  lineState = 'hide';

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition + 750 >= componentPosition) {
        this.lineState = 'show';
        this.state = 'show';
      } else {
      }

    }

    ngOnInit() {
    }

}
