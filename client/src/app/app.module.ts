import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatGridListModule, MatPaginatorModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatListModule, MatExpansionModule, MatDialogModule } from "@angular/material";
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './Components/user/user.component';
import { AuthComponent } from './Components/auth/auth.component';
import { BoardComponent } from './Components/board/board.component';
import { ListComponent } from './Components/list/list.component';
import { CardComponent } from './Components/card/card.component';
import { FilterListsPipe } from './Common/Pipes/filter-lists.pipe';
import { SortListsPipe } from './Common/Pipes/sort-lists.pipe';
import { FilterCardsPipe } from './Common/Pipes/filter-cards.pipe';
import { CardModalComponent } from './Components/card/card-modal/card-modal.component';
import { SortCardsPipe } from './Common/Pipes/sort-cards.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AuthComponent,
    BoardComponent,
    ListComponent,
    CardComponent,
    FilterListsPipe,
    SortListsPipe,
    FilterCardsPipe,
    CardModalComponent,
    SortCardsPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatDialogModule,
    DragDropModule
  
  ],
  providers: [],
  entryComponents: [CardModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
