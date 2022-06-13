/**
 *  Title: sign-in.guard.ts
 *  Author: Professor Krasso
 *  Date: 06/10/2022
 *  Modified By: Allan Trejo
 *  Description: Assignment 3.4 - Guarding Routes
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {


  constructor (private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    /* Stores route parameter value */
    let isLoggedIn = route.queryParams[ 'isLoggedIn' ];

    /* If true grant access */
    if (isLoggedIn) {
      return true;
    }
    else {
      /* else navigate to sign in component at / path */
      this.router.navigate([ '/' ]);
      return false;
    }

  }

}
