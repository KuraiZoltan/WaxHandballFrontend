import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class WebshopService {
  public cart: Product[] = []
  constructor() { }

  addToCart(product: Product) {
    if (this.cart.find(element => element.productName == product.productName)) {
      this.cart.find(element => element.productName == product.productName)!.value += product.value
    } else {
      this.cart.push(product);
    }
  }

  getItems() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }
}
