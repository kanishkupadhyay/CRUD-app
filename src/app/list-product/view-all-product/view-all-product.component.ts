import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../services/design.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  constructor(private designService:DesignService) { }
data:any=[]
  ngOnInit(): void {
    this.designService.getProducts().subscribe(val=>{
      this.data=val
    })
  }

}
