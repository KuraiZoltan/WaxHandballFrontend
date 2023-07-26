import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { WebshopHomeComponent } from '../webshop-home/webshop-home.component';

@Component({
  selector: 'productsComponent',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public products: Product[] = [];

  constructor(http: HttpClient, private webshopHome: WebshopHomeComponent) {
    http.get<Product[]>("https://localhost:7020/Product/getProducts").subscribe(result => {
      this.products = result;
    }, error => console.error(error));
  }

  addToCart(product: Product, valueInput: any) {
    product.value = parseInt(valueInput.value);
    this.webshopHome.addToCart(product);
  }
}
