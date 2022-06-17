/*
   Title: composer-detail.component.ts
 Author: Professor Krasso
 Date: 06/16/2022
 Modified By: Allan Trejo
 Description: Exercise 4.3 - Handling Events with Observables

 */

/* Imports */
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
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

  constructor (private route: ActivatedRoute, private composerService: ComposerService) {
    /*Passes parameters to route  */
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId')!, 10);

    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId)!;
    }

  }

  ngOnInit(): void {
  }

}
