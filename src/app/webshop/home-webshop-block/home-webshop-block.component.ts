import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'home-webshop-block',
  templateUrl: './home-webshop-block.component.html',
  styleUrls: ['./home-webshop-block.component.css']
})
export class HomeWebshopBlockComponent {
  public products: Product[] = [];

  constructor(http: HttpClient) {
    http.get<Product[]>("https://localhost:7020/Product/getProducts").subscribe(result => {
      this.products = result;
    }, error => console.error(error));
  }
}
