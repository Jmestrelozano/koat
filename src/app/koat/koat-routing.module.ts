import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './details/pages/detail-page/detail-page.component';
import { CheckoutPageComponent } from './checkout/pages/checkout-page/checkout-page.component';
import { ProfilePageComponent } from './profile/pages/profile-page/profile-page.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'checkout',
        component: CheckoutPageComponent,
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
      },
      {
        path: ':id',
        component: DetailPageComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KoatRoutingModule {}
