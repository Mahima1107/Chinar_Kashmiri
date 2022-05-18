import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddrestaurantComponent } from './addrestaurant.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddrestaurantComponent
  ],
  imports: [
    CommonModule, RouterModule,
    MatButtonModule, MatToolbarModule, MatIconModule,
    MatDividerModule, MatSidenavModule, MatListModule,
    MatMenuModule, MatCardModule, FormsModule, MatInputModule,
    ReactiveFormsModule
  ]
})
export class AddrestaurantModule { }
