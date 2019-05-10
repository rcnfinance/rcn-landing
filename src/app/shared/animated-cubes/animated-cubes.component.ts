import { Component, OnInit, ElementRef, Input, SimpleChange, HostListener } from '@angular/core';
import { getAnimationKeys } from '../../../assets/lottie-animations/cubes';

@Component({
  selector: 'app-animated-cubes',
  templateUrl: './animated-cubes.component.html'
})

export class AnimatedCubesComponent implements OnInit {

  @Input() currentTab: number | null;

  tabAnimatingTo = null;
  animationKeys = getAnimationKeys();
  currentAnimation = null;
  initialized = false;

  constructor(private el: ElementRef) { }
  
  ngOnInit() {
  }

  ngOnChanges({currentTab}: {[propKey: string]: SimpleChange}) {
    if (!currentTab || currentTab.firstChange || this.tabAnimatingTo !== null) return;

    const { previousValue, currentValue } = currentTab;
    this.playAnimation(`${previousValue}${currentValue}`);
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (this.initialized) return;

    const componentRect = this.el.nativeElement.getBoundingClientRect();
    if (componentRect.top - window.innerHeight - 300 > 0) return;
    
    this.playAnimation('-10');
    this.initialized = true;
  }
  
  animationFinished() {
    if (this.currentTab === this.tabAnimatingTo) {
      this.tabAnimatingTo = null;
      return;
    }
    this.playAnimation(`${this.tabAnimatingTo}${this.currentTab}`);
  }
  
  playAnimation(key: string) {
    this.currentAnimation = key;
    this.tabAnimatingTo = this.currentTab;
  }

}
