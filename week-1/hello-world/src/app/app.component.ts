/*
 Title: app.components.ts
 Author: Professor Krasso
 Date: 05/25/2022
 Modified By: Allan Trejo
 Description: Hello World component Assignment 1.3
*/

import { Component } from '@angular/core';
/* Root component */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  myWorld = "Your now in Allan Trejo's World";

}
