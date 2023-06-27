import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-player-form',
  templateUrl: './add-player-form.component.html',
  styleUrls: ['./add-player-form.component.css']
})
export class AddPlayerFormComponent {
  invalidData: boolean | undefined
  constructor(private http: HttpClient) { }

  submit(playerForm: NgForm) {
    let playerValues = playerForm.form.controls
    if (playerValues['age'].value === "" ||
      playerValues['first-name'].value === "" ||
      playerValues['last-name'].value === "" ||
      playerValues['current-team'].value === "" ||
      playerValues['height'].value === "" ||
      playerValues['position'].value === "" ||
      playerValues['image'].value === "") {
      this.invalidData = true
    } else {
      let payload = {
        FirstName: playerValues['first-name'].value,
        LastName: playerValues['last-name'].value,
        Position: playerValues['position'].value,
        CurrentTeam: playerValues['current-team'].value,
        Age: playerValues['age'].value,
        HeightInCentimeters: playerValues['height'].value,
        Image: playerValues['image'].value
      }
      const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${sessionStorage.getItem("jwt")}` }
      const body = JSON.stringify(payload);
      this.http.post("https://localhost:7020/Player/addPlayer", body, { 'headers': headers }).subscribe(() => { window.location.reload() })
    }
  }
}
