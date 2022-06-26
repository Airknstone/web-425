/*
 Title: book.interface.ts
 Author: Professor Krasso
 Date: 06/25/2022
 Modified By: Allan Trejo
 Description: Assignment 5.4 - Dialogs
  Resources: Material Design https://material.angular.io/components/table/overview
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string,
  numOfPages: number;
  authors: Array<string>;
}
