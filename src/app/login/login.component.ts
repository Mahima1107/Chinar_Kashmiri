import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
    alert("Successfully done!!!")
  }

  imageSrc: string = 'https://p.kindpng.com/picc/s/44-440249_paypal-payment-methods-icons-hd-png-download.png';
  constructor() { }

  ngOnInit(): void {
  }
  
    
}
