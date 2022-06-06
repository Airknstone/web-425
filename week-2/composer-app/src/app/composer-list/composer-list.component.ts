
/*
   Title: composer.component.ts
 Author: Professor Krasso
 Date: 06/05/2022
 Modified By: Allan Trejo
 Description: composer component business logic

 */
import { Component, OnInit } from '@angular/core';
/* Composer Class */
export default class Composer {
  fullName: string;
  genre: string;

  constructor (fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: [ './composer-list.component.css' ]
})
export class ComposerListComponent implements OnInit {
  /* Define static Values for Composer */
  composers: Array<Composer>;
  constructor () {
    this.composers = [
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Ludgwig Van Beethoven", "Classical"),
      new Composer("Hildegard von Bingen ", "Classical"),
      new Composer("Claudio Monteverdi", "Classical"),
      new Composer("Antonio Vivaldi", "Classical"),
    ];

  }

  ngOnInit(): void {
  }

}
