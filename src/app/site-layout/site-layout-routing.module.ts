import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../products/about/about.component';
import { AddProductComponent } from '../products/add-product/add-product.component';
import { CheckoutComponent } from '../products/checkout/checkout.component';


const routes: Routes = [
{ path: 'products/add-product', component: AddProductComponent },
{ path: 'products/checkout', component: CheckoutComponent },
{ path: 'products/about', component: AboutComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteLayoutRoutingModule { }
