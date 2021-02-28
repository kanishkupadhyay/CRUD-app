import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';



@NgModule({
  declarations: [ViewAllProductComponent, AddProductComponent, UpdateProductComponent],
  imports: [
    CommonModule,
    
  ],
  exports:[
    UpdateProductComponent,ViewAllProductComponent,AddProductComponent
  ]
})
export class ListProductModule { }
