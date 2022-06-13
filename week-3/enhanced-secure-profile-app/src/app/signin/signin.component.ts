/**
 *  Title: signin.component.ts
 *  Author: Professor Krasso
 *  Date: 06/10/2022
 *  Modified By: Allan Trejo
 *  Description: Assignment 3.4 - Guarding Routes
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
  constructor (private router: Router) {

  }

  ngOnInit(): void {
  }

  signin() {
    this.isLoggedIn = true;
    this.router.navigate([ '/home' ], { queryParams: { isLoggedIn: this.isLoggedIn }, skipLocationChange: true });
  }
}
