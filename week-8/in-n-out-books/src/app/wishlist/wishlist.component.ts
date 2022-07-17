/*
Title: wishlist.component.html
 Author: Professor Krasso
 <app-wishlist-create fxFlex (addItemEmitter)="updateItemsHandler($event)"></app-wishlist-create>
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
