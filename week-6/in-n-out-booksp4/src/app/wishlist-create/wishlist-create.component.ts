/*
Title: wishlist.component.html
 Author: Professor Krasso
 Date: 06/30/2022
 Modified By: Allan Trejo
 Description: Assignment 6.2 - Output Properties
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
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();
  item: IWishlistItem;

  constructor () {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }

  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    });
    this.item = {} as IWishlistItem;
  }
}
