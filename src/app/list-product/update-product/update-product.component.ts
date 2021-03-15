import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interface/product';
import { DesignService } from '../../services/design.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
values:any=[]
contactForm:any=[]
  constructor(private fb:FormBuilder,private design:DesignService,private activatedRoute:ActivatedRoute,private _snackBar: MatSnackBar) { 
    let id=activatedRoute.snapshot.params.id
    this.design.getSingleProduct(id).subscribe(data=>{
      this.values=data
      this.contactForm=this.fb.group({
        name:[this.values['proName'],[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        price:[this.values['price'],[Validators.required]],
        rating:[this.values['rating'],[Validators.required]],
        available:[this.values['isAvailable'],[Validators.required]]
      })
      
    })
    
  }
data:any=[]
  ngOnInit(): void {
    this.design.formData.subscribe(val=>{
      this.data=val
    })
  }
  
formSubmit(val){
  let productName=val.name;
  let productPrice=val.price;
  let productRating=val.rating;
  let productAvailable=val.available
  let data=<Product>{
    proName:productName,
    price:productPrice,
    rating:productRating,
    isAvailable:productAvailable

  }
  let id=this.activatedRoute.snapshot.params.id
  this.design.updateProduct(id,data).subscribe(data=>{
    console.log(data)
  })
 
}
openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 2000,
  });
}
}
