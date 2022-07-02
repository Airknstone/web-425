/*
 Title: book.interface.ts
 Author: Professor Krasso
 Date: 06/30/2022
 Modified By: Allan Trejo
 Description: Assignment 6.2 - Output Properties
  Resources: Material Design https://material.angular.io/components
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string,
  numOfPages: number;
  authors: Array<string>;
}
