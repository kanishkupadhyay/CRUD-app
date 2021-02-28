import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialsModule}from '../materials/materials.module'
import{SignInComponent}from './sign-in/sign-in.component'
import {MatButtonModule}from '@angular/material/button';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialsModule,
    SignInComponent,
    MatButtonModule
  ],
  exports:[
    SignInComponent
  ],

})
export class AuthenticationModule { }
 