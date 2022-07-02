/*
Title: wishlist.component.html
 Author: Professor Krasso
 Date: 06/30/2022
 Modified By: Allan Trejo
 Description: Assignment 6.2 - Output Properties
  Resources: Material Design https://material.angular.io/components
*/
import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: [ './wishlist.component.scss' ]
})
export class WishlistComponent implements OnInit {
  items: Array<IWishlistItem> = [];
  constructor () { }

  ngOnInit(): void {
  }

  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }
}
