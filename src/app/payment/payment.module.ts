import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule, MatIconModule, MatButtonModule,
    FormsModule, ReactiveFormsModule, MatRadioModule
  ]
})
export class PaymentModule { }
