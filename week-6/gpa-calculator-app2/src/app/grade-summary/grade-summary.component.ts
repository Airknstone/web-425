/*
 Title: grade-summary.component.ts
 Author: Professor Krasso
 Date: 07/03/2022
 Modified By: Allan Trejo
 Description: Assignment 6.4 - Input Properties
  Resources: Material Design https://material.angular.io/components
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: [ './grade-summary.component.css' ]
})
export class GradeSummaryComponent implements OnInit {
  @Input() grade: string;
  @Input() course: string;
  constructor () { }

  ngOnInit(): void {
  }

}
