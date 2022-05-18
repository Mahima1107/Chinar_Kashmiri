import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  imageSrc: string = 'https://p.kindpng.com/picc/s/44-440249_paypal-payment-methods-icons-hd-png-download.png';
  modepay: any;
  pays: any[] = ['GooglePay', 'PhonePay', 'Paytm', 'Airtel', 'MasterCard'];


  constructor() { }

  ngOnInit(): void {
  }

}
