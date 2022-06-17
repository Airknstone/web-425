/*
   Title: app.component.ts
 Author: Professor Krasso
 Date: 06/16/2022
 Modified By: Allan Trejo
 Description: Excercise 4.2 - Inversion of Control and Dependency Injection
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  assignment: string = 'Excercise 4.2 - Inversion of Control and Dependency Injection';
}
