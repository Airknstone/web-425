

/*
 Title: book-list.components.ts
 Author: Professor Krasso
 Date: 06/22/2022
 Modified By: Allan Trejo
 Description: Assignment 5.3 - Data Tables
  Resources: Material Design https://material.angular.io/components/table/overview
*/
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: [ './book-list.component.scss' ]
})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>;

  header: Array<string> = [ 'isbn', 'title', 'numOfPages', 'authors' ];
  book: IBook;

  constructor (private booskService: BooksService) {
    this.books = this.booskService.getBooks();
  }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string) {
    this.book = this.booskService.getBook(isbn);
    console.log(this.book);
  }

}
