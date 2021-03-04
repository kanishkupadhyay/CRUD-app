import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import{MaterialsModule}from '../materials/materials.module'

import{RouterModule}from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
console.log('Site layout module')
@NgModule({
  declarations: [NavbarComponent, HomeComponent, FooterComponent, ErrorComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    HomeComponent,
    FooterComponent ,
    ErrorComponent
  ]
})
export class SiteLayoutModule { }
