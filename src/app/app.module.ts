import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Home/home/home.component';
import { UserAuthComponent } from './UserAuth/user-auth/user-auth.component';
import { AddProductComponent } from './Products/AddProduct/add-product/add-product.component';
import { EditProductComponent } from './Products/edit-product/edit-product.component';
import { OutOfStockComponent } from './OutStock/out-of-stock/out-of-stock.component';
import { AddOutStockComponent } from './OutStock/add-out-stock/add-out-stock.component';
import { UserComponent } from './User/user/user.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserAuthComponent,
    AddProductComponent,
    EditProductComponent,
    OutOfStockComponent,
    AddOutStockComponent,
    UserComponent,
    AddUserComponent,
    UpdateUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
