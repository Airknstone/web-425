/*
   Title: composer-list.component.ts
 Author: Professor Krasso
 Date: 06/17/2022
 Modified By: Allan Trejo
 Description: Assignment 4.4 - Async Pipe

 */

/* Imports */
import { IComposer } from './../composer.interface';
import { Component, OnInit } from '@angular/core';
import { ComposerService } from './../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: [ './composer-list.component.css' ]
})
export class ComposerListComponent implements OnInit {
  /* Defines Variables and initializes array */
  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl('');
  constructor (private composerService: ComposerService) {

    this.composers = this.composerService.getComposers();
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));

  }

  ngOnInit(): void {
  }

  filterComposers(name: string): void {
    this.composers = this.composerService.filterComposers(name);
  }
}
