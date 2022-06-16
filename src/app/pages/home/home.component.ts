import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data!: IProduct[]
  @Input('data') myName: string = "";
  username!:string 
  constructor(private productService: ProductService) {

    //this.products = this.ProductService.getProductList()!;
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem("user") as string).user;
    if (user) {
      this.username = user.username
    }
    this.getProductList();
  }
  getProductList() {
    this.productService.getProductList().subscribe(data => {
      this.data = data;
    })
  }
}
