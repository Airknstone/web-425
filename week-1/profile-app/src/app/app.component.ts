/*
   Title: app.component.ts
 Author: Professor Krasso
 Date: 05/25/2022
 Modified By: Allan Trejo
 Description: Root component business logic

 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  assignment: string = "Assignment 1.5 - Components";
}
