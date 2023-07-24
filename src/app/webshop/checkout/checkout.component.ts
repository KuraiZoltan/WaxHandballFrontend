import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { WebshopService } from '../webshop.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  products = this.service.getItems();
  constructor(private service: WebshopService) {
    
  }


}
