import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminRegisterComponent } from './Component/Admin/admin-register/admin-register.component';
import { AdminLoginComponent } from './Component/Admin/admin-login/admin-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './Component/Admin/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ShowProductComponent } from './Component/Admin/show-product/show-product.component';
import { SearchPipePipe } from './Pipes/search-pipe.pipe';
import { AddProductComponent } from './Component/Admin/add-product/add-product.component';
import { UserLoginComponent } from './Component/User/user-login/user-login.component';
import { UserRegisterComponent } from './Component/User/user-register/user-register.component';
import { ProductComponent } from './Component/User/product/product.component';
import { ProductDetailsComponent } from './Component/User/product-details/product-details.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminRegisterComponent,
    AdminLoginComponent,
    NavigationComponent,
    ShowProductComponent,
    SearchPipePipe,
    AddProductComponent,
    UserLoginComponent,
    UserRegisterComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
