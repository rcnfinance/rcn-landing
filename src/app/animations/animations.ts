import { AnimationTriggerMetadata, animate, state, style, transition, trigger } from '@angular/animations';


export class LandingAnimations {
    static animations = LandingAnimations.getAnimations();

    static getAnimations(): Array<AnimationTriggerMetadata> {
        return [
            trigger('FadeIn', [
                transition(':enter', [
                  style({ transform: 'translateY(0)', opacity: 0 }),
                  animate('600ms 0.3s ease-in', style({ transform: 'translateY(0%)', opacity: 1 }))
                ]),
              ]),
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
              trigger('scrollAnimation', [
                state('show', style({
                  opacity: 1,
                  transform: 'translateX(0)'
                })),
                state('hide',   style({
                  opacity: 0,
                  transform: 'translateX(0)'
                })),
                transition('show => hide', animate('600ms ease-out')),
                transition('hide => show', animate('600ms ease-in'))
              ]),
              trigger('slideInLeft', [
                state('enterLeft', style({ transform: 'translateX(0)', opacity: 0.2})),
                transition('void => enterLeft', [
                  style({ transform: 'translateX(20px)', opacity: 0.2 }),
                  animate('600ms ease-in')
                ]),
              ]),
              trigger('slideInRight', [
                state('enterRight', style({ transform: 'translateX(0)' })),
                transition('void => enterRight', [
                  style({ transform: 'translateX(-20px)', opacity: 0 }),
                  animate('600ms ease-in')
                ])
              ]),
              trigger('opacity', [
                state('opacity',
                  style({
                    opacity: 0.2,
                  })
                ),
                transition('* => opacity', [
                  animate('0ms ease-in')
                ])
              ])
        ];
    }


}