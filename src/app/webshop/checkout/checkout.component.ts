import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { WebshopService } from '../webshop.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  products = this.service.getItems();
  productCount!: Product[];
  priceSummary = 0;

  constructor(private service: WebshopService, private location: Location) {
    this.calculatePrice()
  }

  calculatePrice() {
    for (let product of this.products) {
      this.priceSummary += parseInt(product.price) * product.value;
    }
  }

  returnToShopping() {
    this.location.back()
  }
}
