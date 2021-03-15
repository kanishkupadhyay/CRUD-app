import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DesignService } from '../../services/design.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  constructor(private designService:DesignService,private _snackBar: MatSnackBar) { }
  
data:any=[]
  ngOnInit(): void {
    this.designService.getProducts().subscribe(val=>{
      this.data=val
      console.log(val)
    })
  }
  onDelete(id){
    this.designService.deleteProducts(id).subscribe(data=>{
      console.log(data)
    })
    this.designService.getProducts().subscribe(val=>{
      this.data=val
    })
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
