import { Component, ViewChild } from '@angular/core';
import { WebshopService } from '../webshop.service';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  @ViewChild('input') input!: HTMLInputElement;

  constructor(public webshopService: WebshopService) { }

  handleOnClick() {
    this.webshopService.findByProductName;
  }
}
