/*
 Title: books-details-dialog.component.ts
 Author: Professor Krasso
 Date: 06/25/2022
 Modified By: Allan Trejo
 Description: Assignment 5.4 - Dialogs
  Resources: Material Design https://material.angular.io/components/table/overview
*/
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';
import { inject } from '@angular/core/testing';


@Component({
  selector: 'app-books-details-dialog',
  templateUrl: './books-details-dialog.component.html',
  styleUrls: [ './books-details-dialog.component.scss' ]
})
export class BooksDetailsDialogComponent implements OnInit {

  book: IBook;
  constructor (private dialogRef: MatDialogRef<BooksDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.book = data.book;
  }

  ngOnInit(): void {
  }

}
