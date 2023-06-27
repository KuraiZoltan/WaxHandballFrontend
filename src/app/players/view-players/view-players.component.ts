import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-players',
  templateUrl: './view-players.component.html',
  styleUrls: ['./view-players.component.css']
})
export class ViewPlayersComponent {
  public players: Players[] = [];
  public isAddPlayerPressed: boolean = false;

  constructor(private http: HttpClient) {
    http.get<Players[]>("https://localhost:7020/Player/getPlayers").subscribe(result => {
      this.players = result;
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
