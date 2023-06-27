import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
/*import { JwtHelperService } from '@auth0/angular-jwt'*/

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router/*, private jwtHelper: JwtHelperService*/) {
  }

  canActivate() {
    const token = sessionStorage.getItem("jwt")

    if (token /*&& !this.jwtHelper.isTokenExpired(token)*/) {
      return true
    } this.router.navigate(['/login'])
      alert('You have to login to access this page')
      return false
  }
}
