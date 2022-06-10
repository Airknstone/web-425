/*
   Title: composer-detail.component.ts
 Author: Professor Krasso
 Date: 06/09/2022
 Modified By: Allan Trejo
 Description: composer-detail component business logic

 */

/* Imports */
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: [ './composer-details.component.css' ]
})
export class ComposerDetailsComponent implements OnInit {
  /* class Variables type declarations */
  composerId: number;
  composer!: IComposer;

  constructor (private route: ActivatedRoute) {
    /*Passes parameters to route  */
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId')!, 10);

    if (this.composerId) {
      this.composer = new Composer().getComposer(this.composerId)!;
    }

  }

  ngOnInit(): void {
  }

}
