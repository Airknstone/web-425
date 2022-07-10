/*
 Title: sign-in.service.ts
 Author: Professor Krasso
 Date: 07/09/2022
 Modified By: Allan Trejo
 Description: Assignment 7.3 - Form Validation
  Resources: Material Design https://material.angular.io/components
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  /* Static Data  */
  studentIds: Array<number>;
  constructor () {
    this.studentIds = [ 1007, 1008, 1009, 1010, 1011, 1012 ];
  }

  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
