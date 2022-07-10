/*
 Title: sign-in.component.html
 Author: Professor Krasso
 Date: 07/09/2022
 Modified By: Allan Trejo
 Description: Assignment 7.3 - Form Validation
  Resources: Material Design https://material.angular.io/components
*/
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { SignInService } from '../sign-in.service';


/* Reactive form to validate user inputs */
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [ './sign-in.component.css' ]
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;


  constructor (private router: Router,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private signinService: SignInService) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: [ '', Validators.compose([ Validators.required, Validators.pattern('^[0-9]*$') ]) ]
    });
  }

  get form() {
    return this.signinForm.controls;
  }
  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate([ '/' ]);
    } else {
      this.errorMessage = 'The Student ID you entered is Invalid, Please Try Again.';
    }
  }
}
