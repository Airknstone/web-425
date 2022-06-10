/**
 *  Title: signin.component.ts
 *  Author: Professor Krasso
 *  Date: 06/10/2022
 *  Modified By: Allan Trejo
 *  Description: routed to this component first Assignment 3.3 Passing Data to Routes, Part 2
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: [ './signin.component.css' ]
})
export class SigninComponent implements OnInit {

  isLoggedIn = false;
  constructor (private router: Router) { }

  ngOnInit(): void {
  }

  signin() {
    this.isLoggedIn = true;
    this.router.navigate([ '/home' ], { queryParams: { isLoggedIn: this.isLoggedIn }, skipLocationChange: true });
  }
}
