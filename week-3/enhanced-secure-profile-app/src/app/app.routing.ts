/**
 *  Title: app.routing.ts
 *  Author: Professor Krasso
 *  Date: 06/10/2022
 *  Modified By: Allan Trejo
 * Description: Assignment 3.4 - Guarding Routes
 */
import { SigninComponent } from './signin/signin.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInGuard } from './sign-in.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ SignInGuard ]
  }
];
