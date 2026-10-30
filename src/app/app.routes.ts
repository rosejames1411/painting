import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { PaintingsComponent } from './pages/paintings/paintings';
import { CustomOrderComponent } from './pages/custom-order/custom-order';
import { PaintingDetailsComponent } from './pages/painting-details/painting-details';
import { CartComponent } from './pages/cart/cart';
import { CheckoutComponent } from './pages/checkout/checkout';
import { OrdersComponent } from './pages/orders/orders';
import { LoginComponent } from './pages/login/login';
import { ProfileComponent } from './pages/profile/profile';
import { RegisterComponent } from './pages/register/register';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'paintings',
    component: PaintingsComponent
  },
  {
    path: 'custom-order',
    component: CustomOrderComponent
  },
  {
    path: 'painting-details/:title',
    component: PaintingDetailsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];