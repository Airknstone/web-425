/*
 Title: app.module.ts
 Author: Professor Krasso
 Date: 06/25/2022
 Modified By: Allan Trejo
 Description: Assignment 5.4 - Dialogs
  Resources: Material Design https://material.angular.io/components/table/overview
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { BooksDetailsDialogComponent } from './book-details-dialog/books-details-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ContactComponent,
    AboutComponent,
    BooksDetailsDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
