/*
   Title: composer-list.component.ts
 Author: Professor Krasso
 D Date: 06/16/2022
 Modified By: Allan Trejo
 Description: Excercise 4.2 - Inversion of Control and Dependency Injection

 */

/* Imports */
import { IComposer } from './../composer.interface';
import { Component, OnInit } from '@angular/core';
import { ComposerService } from './../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: [ './composer-list.component.css' ]
})
export class ComposerListComponent implements OnInit {
  /* Defines Variables and initializes array */
  composers: Array<IComposer>;
  constructor (private composerService: ComposerService) {

    this.composers = this.composerService.getComposers();

  }

  ngOnInit(): void {
  }

}
