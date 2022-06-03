/*
   Title: my-details.component.ts
 Author: Professor Krasso
 Date: 05/25/2022
 Modified By: Allan Trejo
 Description:  my-details component business logic

 */

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "CodingWithAngular", "#ngOmaha"
  ];
  constructor (fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
  }

  toString() {
    console.log(`\n  Full name: ${this.fullName} \n  Favorite Food: ${this.favoriteFood} \n  Favorite Color: ${this.favoriteColor}`);
  }
}
@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: [ './my-details.component.css' ]
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;
  constructor () {
    this.myProfile = new Person("Allan Trejo", "Meat Wrapped Veggies", "Sky Blue");
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
