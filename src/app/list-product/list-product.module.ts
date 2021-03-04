import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import{ReactiveFormsModule}from '@angular/forms'
import{MaterialsModule}from '../materials/materials.module'
import {RouterModule}from '@angular/router'
console.log('List module loaded')
@NgModule({
  declarations: [ViewAllProductComponent, AddProductComponent, UpdateProductComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    UpdateProductComponent,ViewAllProductComponent,AddProductComponent
  ]
})
export class ListProductModule { }
