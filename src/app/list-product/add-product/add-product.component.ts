import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl, FormBuilder, Validators}from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Product } from '../../interface/product';
import { DesignService } from '../../services/design.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private fb:FormBuilder,private design:DesignService,private _snackBar: MatSnackBar,private router:Router) { }

  ngOnInit(): void {
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
  this.router.navigate(['view-all-product'])
  this.design.createProducts(data).subscribe(data=>{
    console.log(data)
  })
this.design.formData.next(data)

}
openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 2000,
  });
}
}
