
/*
   Title: composer-list.component.ts
 Author: Professor Krasso
 Date: 06/09/2022
 Modified By: Allan Trejo
 Description: composer-list component business logic

 */

/* Imports */
import { IComposer } from './../composer.interface';
import { Component, OnInit } from '@angular/core';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: [ './composer-list.component.css' ]
})
export class ComposerListComponent implements OnInit {
  /* Defines Variables and initializes array */
  composers: Array<IComposer>;
  constructor () {
    this.composers = new Composer().getComposers();

  }

  ngOnInit(): void {
  }

}
