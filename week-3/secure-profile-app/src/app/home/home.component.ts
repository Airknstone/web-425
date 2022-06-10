/**
 *  Title: home.component.ts
 *  Author: Professor Krasso
 *  Date: 06/10/2022
 *  Modified By: Allan Trejo
 *  Description: <app-home></app-home> Assignment 3.3 Passing Data to Routes, Part 2
 */


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
  /* Local Variables */
  isLoggedIn: Boolean;
  constructor (private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
  }

  ngOnInit(): void {
  }

}
