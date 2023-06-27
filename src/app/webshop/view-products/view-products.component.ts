import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html'
})
export class ViewProductsComponent {
  public products: Product[] = [];
  public addProduct: boolean = false;

  constructor(private http: HttpClient) {
    http.get<Product[]>("https://localhost:7020/Product/getProducts").subscribe(result => {
      this.products = result;
    }, error => console.error(error));
  }

  deleteProduct(productId: number) {
    console.log(productId)
    let headers = { 'Authorization': `Bearer ${sessionStorage.getItem("jwt")}` }
    this.http.delete(`https://localhost:7020/Product/deleteProduct/${productId}`, { headers: headers }).subscribe(result => console.log(result));
    window.location.reload()
  }
}

interface Product {
  productId: any
  productName: string;
  productDescription: string;
  imageSource: string;
  price: string;
}
