import { Component, OnInit } from '@angular/core';

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
