import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from '../products/add-product/add-product.component';


const routes: Routes = [
{ path: 'products/add-product', component: AddProductComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteLayoutRoutingModule { }
