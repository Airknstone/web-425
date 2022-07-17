/*
Title: wishlist.component.html
 Author: Professor Krasso
 Date: 07/16/2022
 Modified By: Allan Trejo
 Description: Assignment 8.2 – Server-side Communications
  Resources: Material Design https://material.angular.io/components
*/
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: [ './wishlist-create.component.scss' ]
})
export class WishlistCreateComponent implements OnInit {
  /* Output data to parent */
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();
  item: IWishlistItem;

  constructor () {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }
  /* emit data to app-wishlist-create in wishlist component */
  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    });
    this.item = {} as IWishlistItem;
  }
}
