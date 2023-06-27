import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private router: Router/*, private jwtHelper: JwtHelperService*/) {

  }

  isUserAuthenticated() {
    const token: any = sessionStorage.getItem("jwt")
    if (token /*&& !this.jwtHelper.isTokenExpired(token)*/) {
      return true
    } else {
      return false
    }
  }

  logout() {
    sessionStorage.removeItem("jwt")
  }
}
