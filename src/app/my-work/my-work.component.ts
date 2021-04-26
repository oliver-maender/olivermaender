import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  projects = [
    {
      "name": 'Lieferdienst',
      "description": 'Lieferdienst is a project I already built 4 weeks after I joined the Developer Akademie. It is a small replica of the Lieferando website. You can see a restaurant\'s menu, select your food and order it.',
      "image": "assets/img/lieferdienst.png",
      "js-doc": 'http://oliver-maender.developerakademie.com/lieferdienst/out/',
      "product-link": 'http://oliver-maender.developerakademie.com/lieferdienst/'
    },
    {
      "name": 'El Pollo Loco',
      "description": 'El Pollo Loco is a jump-and-run game I built 7 weeks after I joined and was the final pure JavaScript project before I started with Angular. You have to control Pepe to collect coins and tabasco bottles, avoid the chickens and reach the final boss, el pollo loco (the crazy chicken), and defeat it.',
      "image": "assets/img/el_pollo_loco.png",
      "js-doc": 'http://oliver-maender.developerakademie.com/el_pollo_loco_v3/out/',
      "product-link": 'http://oliver-maender.developerakademie.com/el_pollo_loco_v3/'
    },
    {
      "name": 'Join',
      "description": 'Join is a group project of three Developer Akademie students including me. It is a custom version of a Kanban board.',
      "image": "assets/img/join.png",
      "js-doc": 'JS-DOC',
      "product-link": 'http://gruppe-63.developerakademie.com/Join/'
    },
    {
      "name": 'Ring of Fire',
      "description": 'Ring of Fire is the first Angular project I worked on. The idea and code is based on the Developer Akademie template for this game. It is a card game in which you or other players have to execute some action which is determined by the card you drew.',
      "image": "assets/img/ring-of-fire.png",
      "js-doc": 'JS-DOC',
      "product-link": 'http://oliver-maender.developerakademie.com/ringoffire/'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openJSDocLink(project) {
    window.open(this.projects[project]['js-doc'], '_blank');
  }

  openProductLink(project) {
    window.open(this.projects[project]['product-link'], '_blank');
  }

}
