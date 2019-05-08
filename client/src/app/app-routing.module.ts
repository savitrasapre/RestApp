import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from  './Components/user/user.component';
import { AuthComponent } from './Components/auth/auth.component';
import { BoardComponent } from './Components/board/board.component';


const routes: Routes = [{
  path: '',
  component: AuthComponent
},
{
  path : 'user/:userId/boards',
  component : UserComponent
},
{
  path : 'board/:boardId',
  component : BoardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
