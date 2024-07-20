import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesToDoComponent } from './components/games-to-do/games-to-do.component';

const routes: Routes = [{
  path: '/', component: GamesToDoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesToDoRoutingModule { }
