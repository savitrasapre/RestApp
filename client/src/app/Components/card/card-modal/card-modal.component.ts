import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Card } from 'src/app/Models/card.model';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<CardModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit() { }

  onCloseClick(): void {  
    this.dialogRef.close();
  }

  onSaveClick()
  {
    this.dialogRef.close(this.data.openedCard);
  }
}
