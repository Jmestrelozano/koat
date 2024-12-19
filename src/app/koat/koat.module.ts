import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { DetailPageComponent } from './details/pages/detail-page/detail-page.component';
import { CheckoutPageComponent } from './checkout/pages/checkout-page/checkout-page.component';
import { ProfilePageComponent } from './profile/pages/profile-page/profile-page.component';
import { KoatRoutingModule } from './koat-routing.module';

@NgModule({
  declarations: [
    HomePageComponent,
    DetailPageComponent,
    CheckoutPageComponent,
    ProfilePageComponent,
  ],
  imports: [CommonModule, KoatRoutingModule],
})
export class KoatModule {}
