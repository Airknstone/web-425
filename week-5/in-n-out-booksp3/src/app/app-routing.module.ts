/*
 Title: app-routing.module.ts
 Author: Professor Krasso
 Date: 06/25/2022
 Modified By: Allan Trejo
 Description: Assignment 5.4 - Dialogs
  Resources: Material Design https://material.angular.io/components/table/overview
*/
import { BookListComponent } from './book-list/book-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'about',
    component: AboutComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
