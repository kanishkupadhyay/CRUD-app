import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
url="http://localhost:3000/products";

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get(this.url)
  }
}
