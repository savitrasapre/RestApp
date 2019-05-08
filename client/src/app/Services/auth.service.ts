import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';
import { tap, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : HttpClient) { }

  user : User;

  loginUser(email : String) : Observable<User> { 
    return this._http.post<User>('//localhost:8080/auth',{email})
            .pipe(
              tap( userReturned => {
                this.setUser(userReturned);
              })
            );
  }

  setUser(userParam : User) : void {
    this.user = userParam;
  }

  getuser() : User {
    return this.user;
  }

}
