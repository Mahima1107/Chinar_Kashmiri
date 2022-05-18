import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import {  ReactiveFormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule, ReactiveFormsModule, RouterModule,
    MatToolbarModule, MatIconModule
  ]
})
export class LoginModule { }
