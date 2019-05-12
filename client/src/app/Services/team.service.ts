import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../Models/team.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private _endpoint = "teams";
  public teamsForCurrentUser: Array<Team>;

  constructor(private _http: HttpClient) {  }

  getTeamsForUser(currentUsrId : String) : Observable<Array<Team>>
  {
    let parameter = new HttpParams().set("userId",currentUsrId.toString());
    return this._http.get<Array<Team>>(`${environment.serverURL}/${this._endpoint}`, {params: parameter}).pipe(
      tap(teamsFromServer => this.teamsForCurrentUser = teamsFromServer)
    );
  }

  getTeamArrayForUsr() : Array<Team>
  {
    return this.teamsForCurrentUser;
  }

  createTeam(teamToCreate: Team) : Observable<Team>
  {
    console.log("createTeam Called");
    
    return this._http.post<Team>(`${environment.serverURL}/${this._endpoint}`,teamToCreate).pipe(tap(teamCreated => this.teamsForCurrentUser.push(teamCreated)));
  }
  
}
