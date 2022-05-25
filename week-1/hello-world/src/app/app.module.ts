/*
 Title: app.module.ts
 Author: Professor Krasso
 Date: 05/25/2022
 Modified By: Allan Trejo
 Description: Hello World Module Declarations
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
