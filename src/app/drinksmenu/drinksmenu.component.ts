import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drinksmenu',
  templateUrl: './drinksmenu.component.html',
  styleUrls: ['./drinksmenu.component.css']
})
export class DrinksmenuComponent implements OnInit {
  imageSrc: string = 'https://p.kindpng.com/picc/s/44-440249_paypal-payment-methods-icons-hd-png-download.png';
 
  constructor() { }

  ngOnInit(): void {
  }

}
