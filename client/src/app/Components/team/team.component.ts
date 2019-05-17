import { Component, OnInit, Input } from '@angular/core';
import { TeamService } from 'src/app/Services/team.service';
import { Team } from 'src/app/Models/team.model';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/app/Models/user.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(
    private _teamService: TeamService, 
    private _authService: AuthService,
    private _snackBar: MatSnackBar
    ) { }
  
  @Input() allUsers : Array<User>;
  
  newTeam:  Team = {memberCount: 0, desc: "", idBoards: [], name: "", idMembers: []}; 
  searchText: string;
  usersToExclude : Array<String>;

  ngOnInit() {
  }

  get userTeams() : Array<Team>
  {
    return this._teamService.getTeamArrayForUsr();
  }

  get thisUser() : User
  {
    return this._authService.getuser();
  }

  createTeam()
  {
    //this adds current user to the Team by default
    this.newTeam.idMembers.push(this._authService.getuser()._id.toString());
    this._teamService.createTeam(this.newTeam).subscribe(teamFromServer => {
      console.log("team added to user" + teamFromServer.name);
    });
  }

  //try to get this down from O(n^2) to O(n+m)
  resolveIdToUserNames(userIdToResolve: Array<String>) : String[]
  {
    let resultArray = new Array<String>();
    userIdToResolve.forEach(userIds => {
      if(this.allUsers)
      {
        for (let index = 0; index < this.allUsers.length; index++) 
        {
          const element = this.allUsers[index];
          if(userIds === element._id)
          {
            resultArray.push(element.fullname);   //found in array
            break;
          }
        }
      }
    }); 
    return resultArray; 
  }

  updateTeam(userToAdd: String,onTeam: Team)
  {
    let usrToAdd = this.allUsers.find(user => user.fullname == userToAdd);

    if(!onTeam.idMembers.includes(usrToAdd._id.toString()))
    {
      onTeam.idMembers.push(usrToAdd._id.toString());
      this._teamService.addUserToTeam(onTeam).subscribe(teamFromServer => {
        let index = this.userTeams.findIndex(team => {
          return team._id == teamFromServer._id;
        });
        this.userTeams.splice(index,1,teamFromServer);
      });
    }
    else
    {
      this._snackBar.open("Member already in the Team","Dismiss",{
        duration : 2000
      });
    }
   
  }


}
