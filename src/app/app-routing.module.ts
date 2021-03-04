import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { AddProductComponent } from './list-product/add-product/add-product.component';
import { ViewAllProductComponent } from './list-product/view-all-product/view-all-product.component';
import { HomeComponent } from './site-layout/home/home.component';
import{ErrorComponent}from './site-layout/error/error.component';
import {UpdateProductComponent}from './list-product/update-product/update-product.component'
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'view-all-product',component:ViewAllProductComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'update-product/:id',component:UpdateProductComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
