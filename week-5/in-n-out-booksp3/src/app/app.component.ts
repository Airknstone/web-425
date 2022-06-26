/*
 Title: app.component.ts
 Author: Professor Krasso
 Date: 06/25/2022
 Modified By: Allan Trejo
 Description: Assignment 5.4 - Dialogs
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
    this.assignment = 'Assignment 5.4 - Dialogs';
  }
}
