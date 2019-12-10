import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutHeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule, RouterModule, SharedModule
  ],
  declarations: [LayoutComponent, LayoutHeaderComponent],
   exports: [LayoutComponent, LayoutHeaderComponent]
})
export class LayoutModule { }
