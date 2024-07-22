import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthComponent } from './UserAuth/user-auth/user-auth.component';
import { HomeComponent } from './Home/home/home.component';
import { AddProductComponent } from './Products/AddProduct/add-product/add-product.component';
import { EditProductComponent } from './Products/edit-product/edit-product.component';
import { OutOfStockComponent } from './OutStock/out-of-stock/out-of-stock.component';
import { AddOutStockComponent } from './OutStock/add-out-stock/add-out-stock.component';
import { UserComponent } from './User/user/user.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';

const routes: Routes = [
  {path:'/', component:UserAuthComponent},
  {path:'home', component:HomeComponent},
  {path:'addProduct', component:AddProductComponent},
  {path:'editProduct/:id', component:EditProductComponent},
  {path:'outStock', component:OutOfStockComponent},
  {path:'addOutStock', component:AddOutStockComponent},
  {path:'userList', component:UserComponent},
  {path:'addUserList', component:AddUserComponent},
  {path:'updateUserList/:id', component:UpdateUserComponent},
  { path: '**', redirectTo: '' }  // Wildcard route for handling unknown paths
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
