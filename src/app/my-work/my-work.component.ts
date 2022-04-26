import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  projects = [
    {
      "name": 'Sports Home (Angular)',
      "description": $localize `:@@myWorkSportsHomeDescription:This is my favourite project. You can <b>see and also change the match results of different soccer leagues</b> I implemented. If you change or add the results for matches, the standings will <b>dynamically change</b>, so you will always be up-to-date with your favourite leagues.`,
      "techniques": 'HTML, SCSS, TypeScript, Angular, Firebase Authentication + Database, Rest API, Bootstrap, Git',
      "image": 'assets/img/sports-home-startpage-picture.png',
      "js-doc": 'http://oliver-maender.developerakademie.com/sports-home/documentation/',
      "github": 'https://github.com/oliver-maender/sports-home',
      "product-link": 'http://oliver-maender.developerakademie.com/sports-home/'
    },
    {
      "name": 'Join (JavaScript)',
      "description": $localize `:@@myWorkJoinDescription:Join is a group project of three Developer Akademie students including me. It is a <b>custom version of a Kanban board</b>. You can add things that have to be done to a pool of ideas (the backlog) and push a certain amount to the board which shows the next \"sprint\" of features which should be implemented. On the board you can distribute them between to-do, in progress, testing and done.`,
      "techniques": 'HTML, CSS, JavaScript, Material Icons, Backend Communication for Login, Git',
      "image": 'assets/img/join.png',
      "js-doc": 'http://gruppe-63.developerakademie.com/Join/out/',
      "github": 'https://github.com/oliver-maender/join',
      "product-link": 'http://gruppe-63.developerakademie.com/Join/'
    },
    {
      "name": 'Quiz with Friends (Angular)',
      "description": $localize `:@@myWorkQuizWithFriendsDescription:This is a <b>quiz application</b> you can use to quiz with your friends (as the name suggests).`,
      "techniques": 'HTML, CSS, TypeScript, Angular, Firebase Authentication + Database, Bootstrap, Git',
      "image": 'assets/img/quiz-with-friends-user-startpage.png',
      "js-doc": 'http://oliver-maender.developerakademie.com/quiz-with-friends/documentation/',
      "github": 'https://github.com/oliver-maender/quiz-with-friends',
      "product-link": 'http://oliver-maender.developerakademie.com/quiz-with-friends/'
    },
    {
      "name": 'CommPlat (Angular)',
      "description": $localize `:@@myWorkCommPlatDescription:This is a communication platform with different public channels and also private messages <b>similar to Discord or Slack</b>. You have the possibility to reply to a message which creates an own thread for every topic, so you don\'t have to spam the main channel with answers.`,
      "techniques": 'HTML, SCSS, TypeScript, Angular, Firebase Authentication + Database, Material Design, Git',
      "image": 'assets/img/comm-plat-general.png',
      "js-doc": 'http://oliver-maender.developerakademie.com/comm-plat/documentation/',
      "github": 'https://github.com/oliver-maender/comm-plat',
      "product-link": 'http://oliver-maender.developerakademie.com/comm-plat/'
    },
    {
      "name": 'El Pollo Loco (JavaScript)',
      "description": $localize `:@@myWorkElPolloLocoDescription:El Pollo Loco is a <b>jump-and-run game</b> I built 7 weeks after I joined the Developer Akademie and was the final pure JavaScript project before I started with Angular. You have to control Pepe to <b>collect coins and tabasco bottles, avoid the chickens and reach the final boss</b>, el pollo loco (the crazy chicken), and defeat it.`,
      "techniques": 'HTML, CSS, JavaScript, Canvas drawing, Git',
      "image": 'assets/img/el_pollo_loco.png',
      "js-doc": 'http://oliver-maender.developerakademie.com/el_pollo_loco/out/',
      "github": 'https://github.com/oliver-maender/elpolloloco',
      "product-link": 'http://oliver-maender.developerakademie.com/el_pollo_loco/'
    },
    {
      "name": 'My Homepage (Angular)',
      "description": $localize `:@@myWorkMyHomepageDescription:This is the page you are currently viewing. It is about me and my work.`,
      "techniques": 'HTML, SCSS, TypeScript, Angular, Material Design, Backend Communication for sending contact formular, Git',
      "image": 'assets/img/olivermaender-startpage.png',
      "js-doc": 'http://oliver-maender.developerakademie.com/olivermaender/documentation/',
      "github": 'https://github.com/oliver-maender/olivermaender',
      "product-link": 'http://oliver-maender.developerakademie.com/'
    }
    // {
    //   "name": 'Kochwelt (JavaScript)',
    //   "description": 'Kochwelt is the first group project at the Developer Akademie. We built it with pure JavaScript 3 weeks after I joined the Developer Akademie. It is a website to present cooking recipes. On the start page there is always the \"recipe of the day\" which changes every day but you can also see all the recipes in the recipe overview.',
    //   "image": 'assets/img/kochwelt.png',
    //   "js-doc": 'http://oliver-maender.developerakademie.com/kochwelt/out/',
    //   "github": 'http://oliver-maender.developerakademie.com/el_pollo_loco_v3/out/',
    //   "product-link": 'http://oliver-maender.developerakademie.com/kochwelt/'
    // }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openJSDocLink(project) {
    window.open(this.projects[project]['js-doc'], '_blank');
  }

  openGithubLink(project) {
    window.open(this.projects[project]['github'], '_blank');
  }

  openProductLink(project) {
    window.open(this.projects[project]['product-link'], '_blank');
  }

}
