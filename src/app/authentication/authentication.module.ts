import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialsModule}from '../materials/materials.module'
import{SignInComponent}from './sign-in/sign-in.component'
import {MatButtonModule}from '@angular/material/button';
import{RouterModule}from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component'
import{ReactiveFormsModule}from '@angular/forms';
console.log('Authentication module loaded')
@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    SignInComponent
  ],

})
export class AuthenticationModule { }
 