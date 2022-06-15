import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data!: IProduct[]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // chạy
    this.getProductList();
  }

  // khai báo
  getProductList() {
    this.productService.getProductList().subscribe(data => {
      this.data = data;
    })
  }
  onHandleRemove(id:number){
    this.productService.removeProduct(id).subscribe(()=>{
      this.data = this.data.filter(item => item .id !== id);
    })
  }
    onHandleUpdate(product:IProduct){
      this.productService.updateProduct(product).subscribe(()=>{
        this.data = this.data.filter(item => item .id === product.id ? product :item);
      })
  }

}