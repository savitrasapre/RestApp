import { Component, OnInit, Input } from '@angular/core';
import { ListService } from 'src/app/Services/list.service';
import { List } from 'src/app/Models/list.model';
import { Board } from 'src/app/Models/board.model';
import { BoardService } from 'src/app/Services/board.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  newList : List = {name : "", isClosed : false, idBoard : "", pos : 0, sub : true }
  @Input() currentBoard : Board;
  boardURL : String;
 
  constructor(
    private _listService : ListService,
    private _boardService : BoardService) {}

  ngOnInit() {}

   // this getter provides the template access to the global pokePipe variable  
  get updateCount()
  {
    return this._listService.pokePipe;
  }

  get globalListsRef() : Array<List>
  {
    return this._boardService.getAllListsArrayForBoard();
  }

  sumbitNewList(newBoardName : String)
  {
    this.newList.name = newBoardName;
    this.newList.isClosed = false;
    this.newList.idBoard = this.currentBoard._id;
    this.newList.pos = this.getPosOfLastList() + 1;
    console.log(this.newList);
    
    this._listService.createList(this.newList).subscribe((listFromQuery : List) => {   
      console.log("new list added");
      this.globalListsRef.push(listFromQuery);
    });  
  }

  //make backend handle this
  getPosOfLastList() : number {
    if(this.globalListsRef.length >= 1)
      return this.globalListsRef[this.globalListsRef.length - 1].pos; 
    else
      return 0;
  }

  archiveCurrentList(listToArchive : List)
  {
    console.log(listToArchive.isClosed);
    this._listService.archiveList(listToArchive,true).subscribe(updatedListFromServer => {
      console.log(updatedListFromServer);
      console.log(this.globalListsRef);
      
    });
  }

}
