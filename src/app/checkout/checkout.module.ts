import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule, RouterModule,
    MatToolbarModule, MatIconModule,
    MatButtonModule, MatCardModule,
    MatFormFieldModule, MatInputModule, FormsModule,
    MatDividerModule, MatRadioModule
  ]
})
export class CheckoutModule { }
