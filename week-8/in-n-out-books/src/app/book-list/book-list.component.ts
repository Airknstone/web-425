

/*
 Title: book-list.components.ts
 Author: Professor Krasso
 Date: 07/16/2022
 Modified By: Allan Trejo
 Description: Assignment 8.2 – Server-side Communications
  Resources: Material Design https://material.angular.io/components
*/
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BooksDetailsDialogComponent } from '../book-details-dialog/books-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: [ './book-list.component.scss' ]
})
export class BookListComponent implements OnInit {
  /* Variables */
  books: Array<IBook> = [];

  book: IBook;

  constructor (private booksService: BooksService, private dialog: MatDialog) {
    /* Subscribe to BooksService, calls getBooks http request and initializes
    books Array
    */
    this.booksService.getBooks().subscribe(res => {
      console.log(res);
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[ key ].details.authors) {
            authors = res[ key ].details.authors.map(author => {
              return author.name;
            });
          }

          this.books.push({
            isbn: res[ key ].details.isbn_13 ? res[ key ].details.isbn_13 : res[ key ].details.isbn_10,
            title: res[ key ].details.title,
            description: res[ key ].details.subtitle ? res[ key ].details.subtitle : 'n/a',
            numOfPages: res[ key ].details.number_of_pages,
            authors: authors,
          });
        }
      }

    });
  }

  ngOnInit(): void {
  }

  /* Onclick, opens matdialogue */
  showBookDetails(isbn: string) {
    this.book = this.books.find(book => book.isbn === isbn);
    const dialogRef = this.dialog.open(BooksDetailsDialogComponent, { data: { book: this.book, disableClose: true, width: '800px' } });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirms') {
        this.book = null;
      }
    });
    console.log(this.book);
  }

}
