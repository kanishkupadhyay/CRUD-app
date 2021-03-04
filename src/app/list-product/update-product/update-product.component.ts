import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Product } from '../../interface/product';
import { DesignService } from '../../services/design.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private fb:FormBuilder,private design:DesignService) { }
data:any=[]
  ngOnInit(): void {
    this.design.formData.subscribe(val=>{
      this.data=val
    })
  }
  contactForm=this.fb.group({
    name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    price:['',[Validators.required]],
    rating:['',[Validators.required]],
    available:['',[Validators.required]]
  })
formSubmit(val){
  let prodcutName=val.name;
  let productPrice=val.price;
  let productRating=val.rating;
  let productAvailable=val.available
  let data=<Product>{
    proName:prodcutName,
    price:productPrice,
    rating:productRating,
    isAvailable:productAvailable
  }
 
}
}
