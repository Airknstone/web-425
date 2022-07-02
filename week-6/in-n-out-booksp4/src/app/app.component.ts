/*
 Title: app.component.ts
 Author: Professor Krasso
 Date: 06/30/2022
 Modified By: Allan Trejo
 Description: Assignment 6.2 - Output Properties
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
    this.assignment = 'Exercise 6.2 - Input/Output Properties, Part 1';
  }
}
