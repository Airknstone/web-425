/*
   Title: app.routing.module.ts
 Author: Professor Krasso
 Date: 06/16/2022
 Modified By: Allan Trejo
 Description: Excercise 4.2 - Inversion of Control and Dependency Injection
 */
import { ComposerListComponent } from './composer-list/composer-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent
  },
  {
    path: 'composer',
    component: ComposerListComponent
  },

  {
    path: 'composer-details/:composerId',
    component: ComposerDetailsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
