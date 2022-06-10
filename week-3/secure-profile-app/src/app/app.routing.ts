/**
 *  Title: app.routing.ts
 *  Author: Professor Krasso
 *  Date: 06/10/2022
 *  Modified By: Allan Trejo
 *  Description: route declarations Assignment 3.3 Passing Data to Routes, Part 2
 */
import { SigninComponent } from './signin/signin.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
