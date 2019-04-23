import { AnimationTriggerMetadata, animate, state, style, transition, trigger, animateChild, query } from '@angular/animations';


export class LandingAnimations {
    static animations = LandingAnimations.getAnimations();

    static getAnimations(): Array<AnimationTriggerMetadata> {
        return [
            trigger('FadeIn', [
                transition(':enter', [
                  style({ transform: 'translateY(0)', opacity: 0 }),
                  animate('900ms ease-in', style({ transform: 'translateY(0%)', opacity: 1 }))
                ]),
              ]),
              trigger('selected', [
                state('selected',
                  style({
                    transform: 'scale(1.3)',
                  })
                ),
                transition('selected <=> *', [
                  animate('400ms ease-in')
                ])
              ]),
              trigger('scrollAndShrink', [
                state('scrollAndShrink',
                  style({
                    transform: 'scaleY(0.9)',
                  })
                ),
                transition('default <=> scrollAndShrink', [
                  animate('300ms ease')
                ])
              ]),
              trigger('lineAnimationThin', [
                state('show', style({
                  width: '30%',
                  transform: 'translateX(0)'
                })),
                state('hide',   style({
                  width: '0%',
                  transform: 'translateX(0)'
                })),
                transition('show => hide', animate('300ms ease-out')),
                transition('hide => show', animate('600ms ease-in'))
              ]),
              trigger('lineAnimationThick', [
                state('show', style({
                  width: '10%',
                  transform: 'translateX(0)'
                })),
                state('hide',   style({
                  width: '0%',
                  transform: 'translateX(0)'
                })),
                transition('show => hide', animate('300ms ease-out')),
                transition('hide => show', animate('600ms  ease-in'))
              ]),
              trigger('lineAnimationThinMobile', [
                state('show', style({
                  width: '50%',
                  transform: 'translateX(0)'
                })),
                state('hide',   style({
                  width: '0%',
                  transform: 'translateX(0)'
                })),
                transition('show => hide', animate('300ms ease-out')),
                transition('hide => show', animate('300ms 0.1s ease-in'))
              ]),
              trigger('lineAnimationThickMobile', [
                state('show', style({
                  width: '16%',
                  transform: 'translateX(0)'
                })),
                state('hide',   style({
                  width: '0%',
                  transform: 'translateX(0)'
                })),
                transition('show => hide', animate('300ms ease-out')),
                transition('hide => show', animate('300ms ease-in'))
              ]),
              trigger('scrollGroupAnimation', [
                state('show', style({
                  opacity: 1,
                  transform: 'translateX(0)'
                })),
                state('hide',   style({
                  opacity: 0,
                  transform: 'translateX(0)'
                })),
                transition('hide => show', [ animate('600ms ease-in'),  query('@*', [
                  animateChild(),
                ])
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
                transition('hide => show', animate('400ms ease-in'))
              ]),
              trigger('slideInLeft', [
                state('enterLeft', style({ transform: 'translateX(0)', opacity: 1})),
                transition('* => enterLeft', [
                  style({ transform: 'translateX(20px)', opacity: 0.2 }),
                  animate('900ms ease-in')
                ]),
              ]),
              trigger('slideInLeftWithOpacity', [
                state('enterLeft', style({ transform: 'translateX(0)', opacity: 0.2})),
                transition('void => enterLeft', [
                  style({ transform: 'translateX(2px)', opacity: 0.2 }),
                  animate('900ms ease-in')
                ]),
              ]),
              trigger('slideInRight', [
                state('enterRight', style({ transform: 'translateX(0)' })),
                transition('void => enterRight', [
                  style({ transform: 'translateX(-2px)', opacity: 0 }),
                  animate('900ms ease-in')
                ])
              ]),
              trigger('opacity', [
                state('opacity',
                  style({
                    opacity: 0.2,
                  })
                ),
                transition('* => opacity', [
                  animate('400ms ease-in')
                ])
              ]),
              trigger('slideInUp', [
                transition(':enter', [
                  style({ transform: 'translateY(20px)', opacity: 0.2 }),
                  animate('600ms ease-in', style({ transform: 'translateY(0%)', opacity: 1 }))
                ]),
              ]),
              trigger('fadeInImage', [
                state('fadeIn', style({
                  opacity: 1
                })),
                transition('void=>fadeIn', [ style({ transform: 'translateX(0)', opacity: 0.8 }), animate('600ms ease-in-out')]),
              ]),
              trigger('slideInUpGroup', [
                transition(':enter', [
                  style({ transform: 'translateY(20px)', opacity: 0.2 }),
                  animate('600ms ease-in', style({ transform: 'translateY(0%)', opacity: 1 })),  query('@*', [
                    animateChild(),
                  ])
                ])
              ]),
              trigger('lineAnimationThickParameter', [
                state('show', style({
                  width: '{{ widthLength }}',
                  transform: 'translateX(0)'
                }), {params: {widthLength: '10%'}}),
                state('hide',   style({
                  width: '0%',
                  transform: 'translateX(0)'
                })),
                transition('show => hide', animate('0s')),
                transition('hide => show', animate('600ms  ease-in'))
              ]),
              trigger('lineAnimationThinParameter', [
                state('show', style({
                  width: '{{ widthLength }}',
                  transform: 'translateX(0)'
                }), {params: {widthLength: '10%'}}),
                state('hide',   style({
                  width: '0%',
                  transform: 'translateX(0)'
                })),
                transition('show => hide', animate('0s')),
                transition('hide => show', animate('600ms  ease-in'))
              ]),
              trigger('slideInComputer', [
                 state('show', style({
                opacity: 1,
                transform: 'translateX(20%)'
              })),
              state('hide',   style({
                opacity: 0.8,
                transform: 'translateX(0)'
              })),
              transition('hide => show', animate('600ms ease-in'))
            ])
        ];
    }


}