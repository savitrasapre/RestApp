import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Board } from '../Models/board.model';
import { Observable, of, Subject } from 'rxjs';
import { tap, find, map } from 'rxjs/operators';
import { List } from '../Models/list.model';
import { Card } from '../Models/card.model';

@Injectable({
  providedIn : 'root'
})
export class BoardService {

  constructor(private _http : HttpClient) { }

  private _url = "//localhost:8080/boards/";

  allBoardsList : Map<String,Board> = new Map<String,Board>();
  public allListsForBoard = new Array<List>();
  public allCardsForBoard = new Array<Card>();
  

  getAllListsArrayForBoard() : List[]
  { 
    return this.allListsForBoard;
  }

  getAllCardsArrayForBoard() : Card[]
  { 
    return this.allCardsForBoard;
  }

  getAllBoardsforUser(userID : String) : Observable<Board[]> {
    let parameter = new HttpParams().set("userId",userID.toString());
    return this._http.get<Board[]>(`${this._url}`,{params : parameter}).pipe(tap((boardsFromServer : Board[]) => {
      for(let items of boardsFromServer)
      {
        this.allBoardsList.set(items._id,items);
      }
    }));
  }

  getCurrentBoardInfo(boardID : String) : Observable<Board> {
    let foundBoard = this.findCachedBoard(boardID);

    if(foundBoard)
      return of(foundBoard);
    
    return this._http.get<Board>(`${this._url}` + boardID);
  }

  createNewBoard(newBoard : Board) : Observable<Board> {
    let foundBoard = this.findCachedBoard(newBoard._id);

    if(foundBoard)
      return of(foundBoard);
    
    return this._http.post<Board>(`${this._url}`, newBoard).pipe(tap((newBoardFromServer : Board) => {
      this.allBoardsList.set(newBoardFromServer._id,newBoardFromServer);
    }));
  }

  findCachedBoard(boardIdToSearch : String) : Board
  { 
    return this.allBoardsList.get(boardIdToSearch);
  }

  getAllCardsForBoard(currentBoard : Board) : Observable<Card[]> {
    return this._http.get<Card[]>(`${this._url}`+ currentBoard._id + "/cards").pipe(tap(cardsFromServer => {
      cardsFromServer.forEach(cardItem => {
        this.allCardsForBoard.push(cardItem);
      });
    }));
  }  

  getAllListsForBoard(currentBoard : Board) : Observable<List[]> {
    return this._http.get<List[]>(`${this._url}` + currentBoard._id + "/lists").pipe(tap(listsFromServer => {
      listsFromServer.forEach(listItem => {
        this.allListsForBoard.push(listItem);
      });
    }));
  }

}
