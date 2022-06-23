/*
 Title: book.interface.ts
 Author: Professor Krasso
 Date: 06/22/2022
 Modified By: Allan Trejo
 Description: Assignment 5.3 - Data Tables
  Resources: Material Design https://material.angular.io/components/table/overview
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string,
  numOfPages: number;
  authors: Array<string>;
}
