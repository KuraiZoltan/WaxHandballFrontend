import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent {

  constructor(private http: HttpClient) { }

  async submit(product: any) {
    console.log(product.form.controls)
    let payload = {
      ProductName: product.form.controls["product-name"].value,
      Price: product.form.controls["product-price"].value,
      ProductDescription: product.form.controls["product-description"].value,
      ImageSource: product.form.controls["product-image-source"].value
    }
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${sessionStorage.getItem("jwt")}` }
    const body = JSON.stringify(payload);
    return this.http.post("https://localhost:7020/Product/addProduct", body, { 'headers': headers }).subscribe(() => { window.location.reload() })
  }
}
