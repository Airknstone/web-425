/*
 Title: book.service.ts
 Author: Professor Krasso
 Date: 06/30/2022
 Modified By: Allan Trejo
 Description: Assignment 6.2 - Output Properties
  Resources: Material Design https://material.angular.io/components
*/
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Array<IBook>;

  constructor () {
    this.books = [
      {
        isbn: '9780099528531',
        title: 'Twenty Thousand Leagues Under the Sea',
        description: 'An adventure classic of deep-sea volcanoes, giant squid, and the renegade scientist Captain Nemo Professor Aronnax embarks on an expedition to hunt down and destroy a menacing sea monster. ',
        numOfPages: 256,
        authors: [ 'Jules Verne' ]
      },
      {
        isbn: '9780141442433',
        title: 'The Republic',
        description: 'The Republic is a Socratic dialogue, written by Plato around 380 BC, concerning the definition of justice, the order and character of the just city-state and the just man—for this reason ',
        numOfPages: 513,
        authors: [ 'Plato' ]
      },
      {
        isbn: '9780345404473',
        title: 'Do Androids Dream of Electric Sheep?',
        description: 'By 2021, the World War has killed millions, driving entire species into extinction and sending mankind off-planet. Those who remain covet any living creature, and for people who can’t afford one, companies built incredibly realistic simulacra: horses, birds, cats, sheep ',
        numOfPages: 240,
        authors: [ 'Philip K. Dick' ]
      },
      {
        isbn: '9780395489321',
        title: 'The Lord Of The Rings',
        description: 'The three volumes that make up Tolkien`s epic classic The Lord of the Rings are here presented in their standard cloth editions including large format fold-out maps and an extensive appendices.  ',
        numOfPages: 290,
        authors: [ 'J.R.R. Tolkien' ]
      },
      {
        isbn: '9780099528531',
        title: 'The Hobbit',
        description: 'The journey through Middle-earth begins here with J.R.R. Tolkien`s classic prelude to his Lord of the Rings trilogy. ',
        numOfPages: 300,
        authors: [ 'J. R. R. Tolkien' ]
      },

    ];
  }
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
