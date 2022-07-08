
/*
 Title: base-layout.components.ts
 Author: Professor Krasso
 Date: 07/06/2022
 Modified By: Allan Trejo
 Description: Assignment 7.2 - Reactive Forms
  Resources: Material Design https://material.angular.io/components
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: [ './base-layout.component.css' ]
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor (private cookieService: CookieService, private router: Router) {
    this.assignment = 'Exercise 7.2 - Reactive Forms';
  }

  ngOnInit(): void {
  }

  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate([ '/session/sign-in' ]);
  }
}
