/*
   Title: composer.service.ts
 Author: Professor Krasso
 Date: 06/16/2022
 Modified By: Allan Trejo
 Description: Excercise 4.2 - Inversion of Control and Dependency Injection
 */
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor () {
    this.composers = [
      {
        composerId: 100,
        fullName: "Wolfgang Amadeus Mozart",
        genre: "Classical"
      },
      {
        composerId: 200,
        fullName: "Ludgwig Van Beethoven",
        genre: "Classical"
      },
      {
        composerId: 300,
        fullName: "Hildegard von Bingen ",
        genre: "Classical"
      },
      {
        composerId: 400,
        fullName: "Claudio Monteverdi",
        genre: "Classical"
      },
      {
        composerId: 500,
        fullName: "Antonio Vivaldi",
        genre: "Classical"
      }
    ];
  }
  getComposers() {
    return this.composers;
  }
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }

    } return;
  }
}
