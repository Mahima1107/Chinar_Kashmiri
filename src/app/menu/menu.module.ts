import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule, RouterModule,
    MatButtonModule, MatToolbarModule, MatIconModule,
    MatDividerModule, MatSidenavModule, MatListModule
  ]
})
export class MenuModule { }
