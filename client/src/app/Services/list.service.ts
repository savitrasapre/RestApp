import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { List } from '../Models/list.model';
import { BoardService } from './board.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private _http : HttpClient,private _boardService : BoardService) {   }

  private _listUrl = "//localhost:8080/lists";
  public pokePipe = 0;

  createList(listToCreate : List) : Observable<List> {
    console.log(listToCreate);
    let isFoundInListArray = this._boardService.allListsForBoard.find(l => l._id == listToCreate._id);    //returns [ [l] ]
    if(isFoundInListArray)
    {
      return of(isFoundInListArray);
    }
    return this._http.post<List>(`${this._listUrl}`,listToCreate).pipe(tap(() => this.pokePipe++));
  }
  
  archiveList(listToUpdate : List, toClose : boolean) : Observable<List> {
    let parameter = new HttpParams().set("isClosed",toClose.toString());
    return this._http.put<List>(`${this._listUrl}/${listToUpdate._id}/closed`, parameter).pipe(tap(listFromServer => {
      this._boardService.allListsForBoard.find(l => l._id == listFromServer._id).isClosed = listFromServer.isClosed;
      this.pokePipe++;
      console.log(this._boardService.allListsForBoard);
    })); 
  }

}
