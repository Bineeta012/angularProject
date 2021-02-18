import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { AdminLoginComponent } from '../Component/Admin/admin-login/admin-login.component';
import { AdminRegisterComponent } from '../Component/Admin/admin-register/admin-register.component';
import { AdminAuthGuard } from '../Auth/admin-auth.guard';
import { ShowProductComponent } from '../Component/Admin/show-product/show-product.component';
import { AddProductComponent } from '../Component/Admin/add-product/add-product.component';
import { UserLoginComponent } from '../Component/User/user-login/user-login.component';
import { UserRegisterComponent } from '../Component/User/user-register/user-register.component';
import { ProductComponent } from '../Component/User/product/product.component';
import { UserAuthGuard } from '../Auth/user-auth.guard';
import { ProductDetailsComponent } from '../Component/User/product-details/product-details.component';


const myRoutes:Routes=[
  {path:'',redirectTo:'userLogin',pathMatch:'full'},
  {path: 'userLogin',component:UserLoginComponent},
  {path: 'userRegister',component:UserRegisterComponent},
  {path:'showProducts',component:ProductComponent,canActivate:[UserAuthGuard]},
  {path: 'productDetails/:id',component:ProductDetailsComponent,canActivate:[UserAuthGuard]},
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'adminRegister',component:AdminRegisterComponent},
  {path:'products',component:ShowProductComponent,canActivate:[AdminAuthGuard]},
  {path:'addProduct',component:AddProductComponent,canActivate:[AdminAuthGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(myRoutes, {
    initialNavigation: 'enabled'
})
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
