import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: MyOrderComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard] },
  { path: 'admin/product/:id', component: ProductFormComponent, canActivate: [AuthGuard] },
  { path: 'admin/product/new', component: ProductFormComponent, canActivate: [AuthGuard] },
  { path: 'admin/orders', component: AdminOrderComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
