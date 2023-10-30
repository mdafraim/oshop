import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AuthGuard } from './services/auth/auth.guard';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';

const routes: Routes = [
  { path: 'admin/product/new', component: ProductFormComponent, canActivate: [AuthGuard] },
  { path: 'admin/product/:id', component: ProductFormComponent, canActivate: [AuthGuard] },
  { path: '', component: ProductsComponent },
  { path: 'my-order', component: MyOrderComponent, canActivate: [AuthGuard]},
  { path: 'products', component: ProductsComponent },
  { path: 'shoping-cart', component: ShopingCartComponent, canActivate: [AuthGuard] },
  { path: 'check-out', component: CheckOutComponent,canActivate: [AuthGuard] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
