import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  imageSrc: string = 'https://p.kindpng.com/picc/s/44-440249_paypal-payment-methods-icons-hd-png-download.png';
  
  constructor() { }

  ngOnInit(): void {
  }
  onclick(): void{
    console.log("Successfully Reset your password!!!");
    alert("Successfully done reset your password!!!!");
}
}