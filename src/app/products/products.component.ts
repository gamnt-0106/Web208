import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!: IProduct[]
  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    // chạy
    this.getProductList();
  }

  // khai báo
  getProductList() {
    this.productService.getProductList().subscribe(data => {
      this.products = data;
    })
  }

}