import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/Services/team.service';
import { Team } from 'src/app/Models/team.model';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private _teamService: TeamService, private _authService: AuthService) { }
  
  newTeam:  Team = {memberCount: 0, desc: "", idBoards: [], name: "", idMembers: []}; 

  ngOnInit() {
    //get all teams for this user. 
  }

  get userTeams() : Array<Team>
  {
    return this._teamService.getTeamArrayForUsr();
  }

  createTeam()
  {
    this.newTeam.idMembers.push(this._authService.getuser()._id.toString());
    this._teamService.createTeam(this.newTeam).subscribe(teamFromServer => {
      console.log("team added to user" + teamFromServer.name);
    });
  }

}
