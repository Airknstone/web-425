/**
 *  Title: home.component.ts
 *  Author: Professor Krasso
 *  Date: 06/10/2022
 *  Modified By: Allan Trejo
 *  Description: Assignment 3.4 - Guarding Routes
 */


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {


  constructor (private route: ActivatedRoute) {
    console.log(route);
  }

  ngOnInit(): void {
  }

}
