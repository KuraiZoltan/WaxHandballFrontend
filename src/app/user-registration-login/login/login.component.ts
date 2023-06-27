import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean | undefined;

  constructor(private router: Router, private http: HttpClient) { }

  login(loginCredentials: any) {
    let payload = {
      Username: loginCredentials.form.controls["username"].value,
      Password: loginCredentials.form.controls["password"].value
    }
    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify(payload)
    this.http.post("https://localhost:7020/User/loginUser", body, { "headers": headers })
      .subscribe(response => {
        const token = (<any>response)
        sessionStorage.setItem("jwt", token.access_token)
        sessionStorage.setItem("jwtExpiresAt", token.expiresAt)
        this.invalidLogin = false
        window.location.href = "/"
      }, err => {
        this.invalidLogin = true
      })
  }
}
