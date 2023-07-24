import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { WebshopService } from '../webshop.service';

@Component({
  selector: 'app-webshop-home',
  templateUrl: './webshop-home.component.html',
  styleUrls: ['./webshop-home.component.css']
})
export class WebshopHomeComponent implements OnInit {
  constructor(public service: WebshopService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.service.addToCart(product);
    window.alert("Your product has been added to your cart!");
  }
}
