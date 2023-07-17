import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-webshop-home',
  templateUrl: './webshop-home.component.html',
  styleUrls: ['./webshop-home.component.css']
})
export class WebshopHomeComponent implements OnInit {
  public cart: Product[] = []
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.cart.push(product)
    console.log(this.cart)
  }
}
