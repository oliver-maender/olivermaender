import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  opened = false;

  constructor() { }

  ngOnInit(): void { }

  toggleSidenav() {
    if (this.opened == false) {
      this.opened = true;
    }
    else {
      this.opened = false;
    }
  }

}
