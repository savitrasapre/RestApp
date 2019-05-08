import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User } from '../../Models/user.model';
import { AuthService } from 'src/app/Services/auth.service';
import { Board } from 'src/app/Models/board.model';
import { PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BoardService } from 'src/app/Services/board.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : User[];
  currentUser : User;
  newBoard : Board = { for_teams : [],name : "", desc : "", due_in : 0, isClosed : false, user_id : "" };
  boards : Board[];
  pagedBoardList : Board[];
  length : Number = 100;
  pageSizeOptions : Number[] = [10,50,100];

  constructor(private _authService : AuthService, 
    private _router : Router,
    private _boardService : BoardService
    ) { }

  ngOnInit() {
    this.fetchCurrentUserWithBoards();
  }

  fetchCurrentUserWithBoards()
  {
    this.currentUser = this._authService.getuser();
    this._boardService.getAllBoardsforUser(this.currentUser._id).subscribe((boardsFromQuery : Board[]) => {    
      this.boards = boardsFromQuery;
      this.pagedBoardList = this.boards.slice(0,10);
    });
  }

  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = Number(this.length);
    }
    this.pagedBoardList = this.boards.slice(startIndex, endIndex);
  }

  navigateToBoard(clickedBoard : Board)
  {
    this._router.navigate(['board',clickedBoard._id]);
  }

  createBoard(boardName : String)
  {
    this.newBoard.name = boardName;
    this.newBoard.user_id = this.currentUser._id;

    this._boardService.createNewBoard(this.newBoard).subscribe((boardFromQuery : Board) => {
      this.navigateToBoard(boardFromQuery);
    });

  }

}
