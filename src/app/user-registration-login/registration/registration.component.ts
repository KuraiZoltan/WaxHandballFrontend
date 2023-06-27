import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private http: HttpClient) { }

  async submit(userForm: any) {
    let responseResult: any;
    let payload = {
      FirstName: userForm.form.controls["first-name"].value,
      LastName: userForm.form.controls["last-name"].value,
      Username: userForm.form.controls["username"].value,
      Email: userForm.form.controls["email"].value,
      Password: userForm.form.controls["password"].value,
      ConfirmPassword: userForm.form.controls["confirm-password"].value
    }
    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify(payload)
    return await this.http.post("https://localhost:7020/User/addUser", body, { 'headers': headers }).subscribe(r => { this.checkResponse(r) })
  }

  checkResponse(result: any) {
    if (result.statusCode === 200) {
      window.location.href = '/'
      alert("Registered successfully")
    } else {
      alert("Something went wrong! Check your email and password!")
    }
  }
}
