import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatIconModule, MatToolbarModule
  ]
})
export class FooterModule { }
