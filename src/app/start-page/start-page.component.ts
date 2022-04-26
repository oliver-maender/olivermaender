import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  @HostListener('window:scroll', [])
  onScroll() {
    if (window.scrollY > 800) {
      this.noArrowUp = false;
    } else {
      this.noArrowUp = true;
    }
  }

  noArrowUp = true;

  constructor() { }

  ngOnInit(): void {
  }

  scrollUp() {
    window.scrollTo(0, 0);
  }

}
