/*
   Title: composer.service.ts
 Author: Professor Krasso
 Date: 06/17/2022
 Modified By: Allan Trejo
 Description: Assignment 4.4 - Async Pipe
 */
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable, of, map } from 'rxjs';


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
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }
  getComposer(composerId: number): IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }

    } return;
  }
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers =>
      composers.filter(composer =>
        composer.fullName.toLowerCase().indexOf(name) > -1)));
  }
}
