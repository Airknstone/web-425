/*
 Title: app.component.ts
 Author: Professor Krasso
 Date: 07/16/2022
 Modified By: Allan Trejo
 Description: Assignment 8.2 – Server-side Communications
  Resources: Material Design https://material.angular.io/components
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  assignment: string;
  constructor () {
    this.assignment = 'Welcome to In-N-Out-Books';
  }
}
