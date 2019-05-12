import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user.model';
import { BoardService } from './board.service';
import { TeamService } from './team.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

 private _url = '//localhost:8080';
 private _endpoint = 'user';

  constructor(private _http : HttpClient,
    private _boardService: BoardService,
    private _teamService: TeamService) { }

  getAllUsers() : Observable<User[]> {
  	return this._http.get<User[]>(`${this._url}/${this._endpoint}/all`);
  }
  
  getUserDetailsInParallel(currentUserId : String)
  {
    return forkJoin(
      this._boardService.getAllBoardsforUser(currentUserId),
      this._teamService.getTeamsForUser(currentUserId)
    );
  }

}

