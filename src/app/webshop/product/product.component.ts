import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'productsComponent',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public products: Product[] = [];

  constructor(http: HttpClient) {
    http.get<Product[]>("https://localhost:7020/Product/getProducts").subscribe(result => {
      this.products = result;
    }, error => console.error(error));
  }
}

interface Product {
  productName: string;
  productDescription: string;
  imageSource: string;
  price: string;
}
