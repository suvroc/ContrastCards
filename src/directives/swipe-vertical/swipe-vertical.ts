import { Directive, ElementRef, Input, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import {Gesture} from 'ionic-angular/gestures/gesture';
declare var Hammer: any;

/*
  Class for the SwipeVertical directive (attribute (swipe) is only horizontal).

  In order to use it you must add swipe-vertical attribute to the component.
  The directives for binding functions are [swipeUp] and [swipeDown].

  IMPORTANT:
  [swipeUp] and [swipeDown] MUST be added in a component which
  already has "swipe-vertical".
*/

@Directive({
  selector: '[swipe-vertical]' // Attribute selector
})
export class SwipeVertical implements OnInit, OnDestroy {
  @Input('swipeAny') swipe: EventEmitter<any>;

  private el: HTMLElement
  private swipeGesture: Gesture
  //private swipeDownGesture: Gesture

  constructor(el: ElementRef) {
    this.el = el.nativeElement
  }

  ngOnInit() {
    this.swipeGesture = new Gesture(this.el, {
            recognizers: [
                [Hammer.Swipe, {direction: Hammer.DIRECTION_ALL}]
            ]
        });
        this.swipeGesture.listen();
        this.swipeGesture.on('swipe', e => {
          console.log('swipe any');
            // Publish event when swipe is detected.
            this.swipe.emit();
        });
  }

  ngOnDestroy() {
    this.swipeGesture.destroy()
  }
}