import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Card } from '../Models/card.model';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  public pokePipeCard = 0;
  private _endpoint = "cards";

  constructor(private _http : HttpClient) { }

  addCard(newCard : Card) : Observable<Card> {
    return this._http.post<Card>(`${environment.serverURL}/${this._endpoint}`,newCard).pipe(tap(() => this.pokePipeCard++));
  }

  updateCard(cardToUpdate: Card) : Observable<Card>  {
    return this._http.put<Card>(`${environment.serverURL}/${this._endpoint}/${cardToUpdate._id}`, cardToUpdate).pipe(tap(() => this.pokePipeCard++));
  }

}
