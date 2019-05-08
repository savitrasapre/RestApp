import { Injectable } from '@angular/core';
import { Observable,  from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user.model';
import { Board } from '../Models/board.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 private _url = '//localhost:8080';
 private _endpoint = 'user';

  constructor(private _http : HttpClient) { }

  getAllUsers() : Observable<User[]> {
  	return this._http.get<User[]>(`${this._url}/${this._endpoint}/all`);
  }

  

}

