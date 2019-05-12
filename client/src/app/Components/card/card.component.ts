import { Component, OnInit, Input } from '@angular/core';
import { CardService } from 'src/app/Services/card.service';
import { List } from 'src/app/Models/list.model';
import { Card } from 'src/app/Models/card.model';
import { BoardService } from 'src/app/Services/board.service';
import { MatDialog } from '@angular/material';
import { CardModalComponent } from './card-modal/card-modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() inList : List;
  newCard : Card = {name : "", desc : "", due_in : 0, isClosed : false, idList : "", idBoard : "", idMembers : [], pos : 0};
  constructor(
    private _cardService : CardService,
    private _boardService : BoardService,
    private _matDialog : MatDialog) { }

  ngOnInit() {  }

  get globalCardsRef() : Array<Card>
  {
    return this._boardService.getAllCardsArrayForBoard();
  }

  get pipeCount() : number
  {
    return this._cardService.pokePipeCard;
  } 

  //ngForm needs ngModel to register child elements to the form.
  addCardToList()
  {
    this.newCard.idList = this.inList._id;
    this.newCard.idBoard = this.inList.idBoard;
    this.newCard.pos = this.getPosOfLastCard() + 1;
    
    this._cardService.addCard(this.newCard).subscribe((newCardFromQuery : Card) => {
      this.globalCardsRef.push(newCardFromQuery);   
      console.log(this._boardService.allCardsForBoard);
    });
  }

  getPosOfLastCard() : number {
    let cardArrayForList = this.globalCardsRef.filter(card => card.idList == this.inList._id);
    console.log(this.globalCardsRef);
    if(cardArrayForList.length >= 1) {
      return cardArrayForList[cardArrayForList.length - 1].pos;
    }
    else {
      return 0;
    }
  }

  openDialog(cardItemClicked: Card)
  { 
    let dialogRef = this._matDialog.open(CardModalComponent,{data : { openedCard : cardItemClicked, currentList : this.inList }, width : '600px', height: '600px'});    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.updateCard(cardItemClicked);
      }
    });
  }

  updateCard(cardToUpdate: Card)
  {
    this._cardService.updateCard(cardToUpdate).subscribe(updatedCardFromServer => {
      let indexToUpdate =  this.globalCardsRef.findIndex(card => {
          return card._id == updatedCardFromServer._id;
      });
      this.globalCardsRef.splice(indexToUpdate,1,updatedCardFromServer);
      console.log("in update card" + updatedCardFromServer);
    });
  }

}
