/*
 Title: base-layout.components.ts
 Author: Professor Krasso
 Date: 07/03/2022
 Modified By: Allan Trejo
 Description: Assignment 6.4 - Input Properties
  Resources: Material Design https://material.angular.io/components
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: [ './base-layout.component.css' ]
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor () {
    this.assignment = 'Exercise 6.4 - Input Properties';
  }

  ngOnInit(): void {
  }

}
