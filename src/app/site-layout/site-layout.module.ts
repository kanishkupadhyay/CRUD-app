import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import{MaterialsModule}from '../materials/materials.module'

import{RouterModule}from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [NavbarComponent, HomeComponent, FooterComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    HomeComponent,
    FooterComponent 
  ]
})
export class SiteLayoutModule { }
