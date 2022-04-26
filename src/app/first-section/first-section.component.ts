import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss'],
  animations: [
    trigger('divState', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(200px)'
        }),
        animate(1000)
      ])
    ]),
    trigger('textZoomOut', [
      transition('void => *', [
        style({
          transform: 'scale(1.5)'
        }),
        animate(1000)
      ])
    ])
  ]
})
export class FirstSectionComponent implements OnInit {

  hideOverflow = false;

  constructor() { }

  ngOnInit(): void {
  }

  animationStarted() {
    this.hideOverflow = true;
  }

  animationEnded() {
    this.hideOverflow = false;
  }

}
