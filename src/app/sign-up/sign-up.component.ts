import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  use={
    Name:'',
    Email:'',
    Password:'',
    Con_Password:'',
    Contact:'',
    State:'',
    
  }

  imageSrc: string = 'https://p.kindpng.com/picc/s/44-440249_paypal-payment-methods-icons-hd-png-download.png';

  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
    console.log("Successfully Done!!!");
    alert("Successfully");
}
}
