import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    RestaurantComponent
  ],
  imports: [
    CommonModule, RouterModule,
    MatButtonModule, MatToolbarModule, MatIconModule
  ]
})
export class RestaurantModule { }
