/* /**
 *  Title: my-details.component.css
 *  Author: Professor Krasso
 *  Date: 06/10/2022
 *  Modified By: Allan Trejo
 *  Description: Assignment 3.4 - Guarding Routes
 */
import { Component, OnInit } from '@angular/core';

export default class Person {
  /* Class Variables */
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
  /* for testing */
  toString() {
    console.log(`\n  Full name: ${this.fullName} \n  Favorite Food: ${this.favoriteFood} \n  Favorite Color: ${this.favoriteColor}`);
  }
}
/* @Component controls a screen patch aka view  */
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

