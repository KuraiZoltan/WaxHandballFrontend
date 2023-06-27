import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-league-standings',
  templateUrl: './league-standings.component.html',
  styleUrls: ['./league-standings.component.css']
})
export class LeagueStandingsComponent {
  private apiKey: any
  teams: any;
  selectedSize: number | undefined;
  
  constructor(private http: HttpClient) {
    this.main()
  }

  async main() {
    await this.getApiKey();
  }

  async getApiKey() {
    await this.http.get("https://localhost:7020/Api/getApiKey").subscribe(result => {
      this.apiKey = result;
      console.log(this.apiKey)
      let date = formatDate(new Date(), 'yyyy', 'en')
      console.log(date)
      var headers = {
        'x-rapidapi-key': this.apiKey["apiKey"],
        'x-rapidapi-host': 'https://v1.handball.api-sports.io/'
      };
      this.http.get(`https://v1.handball.api-sports.io/standings?league=49&season=2022`, { 'headers': headers }).subscribe((results: any) => {
        const teamStandings = []
        for (let i = 0; i < 3; i++) {
          var teamStanding = {
            Team: results.response[0][i].team.name,
            Logo: results.response[0][i].team.logo,
            Stage: results.response[0][i].stage,
            Position: results.response[0][i].position,
            Points: results.response[0][i].points,
            Wins: results.response[0][i].games.win.total,
            Lost: results.response[0][i].games.lose.total,
            Draw: results.response[0][i].games.draw.total,
          }
          teamStandings.push(teamStanding)
          this.teams = teamStandings
        }
        console.log(this.teams)
      })
    })
    
  }
}

