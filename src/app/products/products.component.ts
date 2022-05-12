import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  componentName:string = "List Product";
  isStatus = false;

  productName :string = "";
  Productlist :{id:number,name:string,price:number,status:boolean}[]=[
    {id:1,name:"Product 1" , price:12345,status:false},
    {id:2,name:"Product 2" , price:12345,status:true},

  ]

  constructor() { }

  ngOnInit(): void {
    
  }
  onHandleClick(){
    console.log(1);
    this.isStatus = !this.isStatus
  }
  onHandleDelete(id:number) {
    console.log(id);
    this.Productlist = this.Productlist.filter(product => product.id ! == id)
    
  }

}
