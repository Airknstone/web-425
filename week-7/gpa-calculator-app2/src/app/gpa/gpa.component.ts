/*
 Title: gpa.components.css
 Author: Professor Krasso
 Date: 07/06/2022
 Modified By: Allan Trejo
 Description: Assignment 7.2 - Reactive Forms
  Resources: Material Design https://material.angular.io/components
*/
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: [ './gpa.component.css' ]
})
export class GpaComponent implements OnInit {
  /* recieves data from home component */
  @Input() gpaTotal: number;
  constructor () { }

  ngOnInit(): void {
  }

}
