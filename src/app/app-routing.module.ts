import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MenuComponent } from './menu/menu.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { DrinksmenuComponent } from './drinksmenu/drinksmenu.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { PaymentComponent } from './payment/payment.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [

  { path: 'admin-login', component: AdminLoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'home', component: HomeComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'restaurant', component: RestaurantComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'addmenu', component: AddmenuComponent},
  { path: 'addrestaurant', component: AddrestaurantComponent},
  { path: 'drinksmenu', component: DrinksmenuComponent},
  { path: 'mainmenu', component: MainmenuComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'forgotpassword', component: ForgotpasswordComponent},
  { path: 'resetpassword', component: ResetpasswordComponent},
  { path: 'cart', component: CartComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
