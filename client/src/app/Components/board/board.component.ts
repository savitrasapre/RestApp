import { Component, OnInit, ViewChild } from '@angular/core';
import { BoardService } from 'src/app/Services/board.service';
import { Board } from 'src/app/Models/board.model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { ListService } from 'src/app/Services/list.service';
import { List } from 'src/app/Models/list.model';
import { ListComponent } from '../list/list.component';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  currentBoard : Board;
  boardIDFromURL : String;
  isAllDataSet = false;
  
  constructor(
    private _boardService : BoardService,
    private _activatedRoute : ActivatedRoute, 
    private _listService : ListService,
    private _authService : AuthService,
    private router : Router 
    ) { }

  ngOnInit() {
    this._activatedRoute.paramMap.pipe(
      mergeMap((urlParams : ParamMap) => {
        this.boardIDFromURL = urlParams.get("boardId");
        return this._boardService.getCurrentBoardInfo(this.boardIDFromURL);
      }),
      mergeMap((boardFromQuery : Board) => {
        this.currentBoard = boardFromQuery;
        return this._boardService.getAllListsForBoard(this.currentBoard);
      }),
      mergeMap(() => {
        return this._boardService.getAllCardsForBoard(this.currentBoard);
      }))
    .subscribe(() => {
      console.log("fetched all cards for a board");
      this.isAllDataSet = true;
    });
  }

  // this getter provides the template access to the global pokePipe variable  
  get updateCount() : number
  {
    return this._listService.pokePipe;
  }

  get globalListsRef() : Array<List>
  {
    return this._boardService.getAllListsArrayForBoard();
  }

  //add this to list component
  addToOpenLists(listToOpen : List) {
     this._listService.archiveList(listToOpen,false).subscribe(updatedListFromServer => {
        console.log("flipped to false");
    });    
  }

  navigateToHome()
  {
    this.router.navigate(['user',this._authService.getuser()._id,'boards']);
  }
  
}
