import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginComponent } from './login/login.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { PaymentComponent } from './payment/payment.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { UserdashbaordComponent } from './userdashbaord/userdashbaord.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"adminHome",component:AdmindashboardComponent},
  {path:"userHome",component:UserdashbaordComponent},
  {path:"userProfile",component:UpdateprofileComponent},
  {path:"viewcart",component:ViewcartComponent},
  {path:"ordersummary",component:OrdersummaryComponent},
  {path:"payment",component:PaymentComponent},
  {path:"",redirectTo:"login",pathMatch:'full'},
  {path:"aboutus",component:AboutUsComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"navbar",component:NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
