import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  skills = [
    {
      "name": 'HTML',
      "amount": '90'
    },
    {
      "name": 'CSS, SCSS',
      "amount": '90'
    },
    {
      "name": 'Bootstrap',
      "amount": '80'
    },
    {
      "name": 'JavaScript',
      "amount": '80'
    },
    {
      "name": 'TypeScript/Angular',
      "amount": '70'
    },
    {
      "name": 'Material Design',
      "amount": '70'
    },
    {
      "name": 'SCRUM/Kanban',
      "amount": '70'
    },
    {
      "name": 'Rest APIs',
      "amount": '60'
    },
    {
      "name": 'Google Firebase',
      "amount": '50'
    },
    {
      "name": 'React',
      "amount": '20'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
