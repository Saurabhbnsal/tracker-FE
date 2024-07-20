import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesToDoRoutingModule } from './games-to-do-routing.module';

import {GamesToDoComponent } from './components/games-to-do/games-to-do.component';

@NgModule({
  declarations: [GamesToDoComponent],
  imports: [
    CommonModule,
    GamesToDoRoutingModule
  ]
})
export class GamesToDoModule { }
