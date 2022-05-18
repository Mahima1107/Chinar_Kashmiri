import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginModule } from './admin-login/admin-login.module';
import { LoginModule } from './login/login.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './navbar/navbar.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { CheckoutModule } from './checkout/checkout.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MenuModule } from './menu/menu.module';
import { AddmenuModule } from './addmenu/addmenu.module';
import { AddrestaurantModule } from './addrestaurant/addrestaurant.module';
import { DrinksmenuModule } from './drinksmenu/drinksmenu.module';
import { MainmenuModule } from './mainmenu/mainmenu.module';
import { PaymentModule } from './payment/payment.module';
import { ForgotpasswordModule } from './forgotpassword/forgotpassword.module';
import { ResetpasswordModule } from './resetpassword/resetpassword.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent,
   
    // CartComponent,
    // ForgotpasswordComponent,
    // CheckoutbillComponent,
    // PaymentComponent,
    // MainmenuComponent,
    // DrinksmenuComponent,
    // AddmenuComponent,
    // RestaurantComponent,
    // CheckoutComponent,
    // HomeComponent,
    // DashboardComponent,
    // FooterComponent,
    // HeaderComponent,
    // LoginComponent,
    // SignUpComponent,
    // AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminLoginModule,
    LoginModule, 
    SignUpModule, BrowserAnimationsModule, NavbarModule,
    HeaderModule, FooterModule,
    DashboardModule, HomeModule,
    CheckoutModule, RestaurantModule, MenuModule,
    AddmenuModule, AddrestaurantModule, DrinksmenuModule, MainmenuModule,
    PaymentModule, ForgotpasswordModule, ResetpasswordModule, CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
