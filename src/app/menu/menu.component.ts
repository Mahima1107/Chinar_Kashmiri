import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  imageSrc: string = 'https://p.kindpng.com/picc/s/44-440249_paypal-payment-methods-icons-hd-png-download.png';
  constructor() { }

  ngOnInit(): void {
  }

}
