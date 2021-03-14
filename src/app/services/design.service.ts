import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
  data:Product={
    proName:'',
    price:0,
    rating:0,
    isAvailable:''
  }
dbUrl="https://angular-auth-database.herokuapp.com/products";
formData=new BehaviorSubject(this.data)
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get(this.dbUrl)
  }
  createProducts(data:Product){
    return this.http.post(this.dbUrl,data)
  }
  updateProduct(id:any){
    return this.http.put(this.dbUrl,id)
  }
  deleteProducts(id:any){
    return this.http.delete(`${this.dbUrl}/${id}`)
  }
 
}
