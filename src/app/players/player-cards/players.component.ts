import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  public players: Players[] = [];

  constructor(private http: HttpClient) {
    http.get<Players[]>("https://localhost:7020/Player/getPlayers").subscribe(result => {
      for (let i = 0; i < 4; i++) {
        this.players.push(result[i])
      }
    }, error => console.error(error));
  }

  

}

interface Players {
  playerId: number
  firstName: string;
  lastName: string;
  position: string;
  currentTeam: string;
  age: number;
  heightInCentimeters: number
  image: string
}
