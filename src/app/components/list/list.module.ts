import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';


@NgModule({
  imports: [CommonModule, ListRoutingModule],
  declarations: [ListComponent],
  providers: []
})
export class ListModule { }
