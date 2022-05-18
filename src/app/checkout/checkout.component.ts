import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  use={
    FirstName:'',
    LastName:'',
    Email:'',
    Address:'',
    City:'',
    Country:'',
    Zipcode:'',
    Telephone:''

  }
  modepay: any;
  pays: any[] = ['GooglePay', 'PhonePay', 'Paytm', 'Airtel', 'MasterCard'];

  imageSrc: string = 'https://p.kindpng.com/picc/s/44-440249_paypal-payment-methods-icons-hd-png-download.png';
  constructor() { }

  ngOnInit(): void {
  }

  onclick(){
    console.log("Successfully Done!!!");
    alert("Successfully");
}
}
