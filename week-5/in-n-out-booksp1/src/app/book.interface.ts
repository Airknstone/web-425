/*
 Title: book.interface.ts
 Author: Professor Krasso
 Date: 06/22/2022
 Modified By: Allan Trejo
 Description: Assignment 5.2 - Navigation and Layout
  Resources: Material Design https://material.io
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string,
  numOfPages: number;
  authors: Array<string>;
}
