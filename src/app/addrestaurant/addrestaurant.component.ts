import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})
export class AddrestaurantComponent implements OnInit {
  imageSrc: string = 'https://p.kindpng.com/picc/s/44-440249_paypal-payment-methods-icons-hd-png-download.png';
  constructor() { }

  ngOnInit(): void {
  }

}
