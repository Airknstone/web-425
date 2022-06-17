/*
   Title: about.component.ts
 Author: Professor Krasso
 Date: 06/16/2022
 Modified By: Allan Trejo
 Description: Excercise 4.2 - Inversion of Control and Dependency Injection

 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [ './about.component.css' ]
})
export class AboutComponent implements OnInit {

  constructor () { }

  ngOnInit(): void {
  }

}
