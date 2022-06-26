

/*
 Title: book-list.components.ts
 Author: Professor Krasso
 Date: 06/25/2022
 Modified By: Allan Trejo
 Description: Assignment 5.4 - Dialogs
  Resources: Material Design https://material.angular.io/components/table/overview
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
  books: Observable<IBook[]>;

  header: Array<string> = [ 'isbn', 'title', 'numOfPages', 'authors' ];
  book: IBook;

  constructor (private booskService: BooksService, private dialog: MatDialog) {
    this.books = this.booskService.getBooks();
  }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string) {
    this.book = this.booskService.getBook(isbn);
    const dialogRef = this.dialog.open(BooksDetailsDialogComponent, { data: { book: this.book, disableClose: true, width: '800px' } });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirms') {
        this.book = null;
      }
    });
    console.log(this.book);
  }

}
