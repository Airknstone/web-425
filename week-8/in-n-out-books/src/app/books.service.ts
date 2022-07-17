/*
 Title: book.service.ts
 Author: Professor Krasso
 Date: 07/16/2022
 Modified By: Allan Trejo
 Description: Assignment 8.2 – Server-side Communications
  Resources: Material Design https://material.angular.io/components
*/
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  /* Variables declarations */
  isbns: string[];

  /* Initialize isbn */
  constructor (private http: HttpClient) {
    this.isbns = [
      '0345339681,0261103571,9780593099322,9780261102361,9780261102378,9780590302715,9780316769532,9780743273565,9780590405959'
    ];
  }
  /* Function sets up headers and makes http request to Https://openlibrary.org/api/books */
  getBooks() {
    let params = new HttpParams;

    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');

    return this.http.get('https://openlibrary.org/api/books', {
      params: params
    });
  }

}
