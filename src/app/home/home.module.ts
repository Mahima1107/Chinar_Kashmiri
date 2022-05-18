import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule, MatButtonModule,
    MatGridListModule
  ]
})
export class HomeModule { }
