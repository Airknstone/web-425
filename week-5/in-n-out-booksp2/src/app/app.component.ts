/*
 Title: app.component.ts
 Author: Professor Krasso
 Date: 06/22/2022
 Modified By: Allan Trejo
 Description: Assignment 5.3 - Data Tables
  Resources: Material Design https://material.angular.io/components/table/overview
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
    this.assignment = 'Exercise 5.3 - Data Tables';
  }
}
