import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListOrderComponent } from './order/list-order/list-order.component';
import { ProductsComponent } from './products/products.component';
import { SiteLayoutModule } from './site-layout/site-layout.module';


const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'site-layout', loadChildren: () => import('./site-layout/site-layout.module').then(m => m.SiteLayoutModule) },
{path:'order', component:ListOrderComponent},
{path:'products', component:ProductsComponent},
{path:'site-layout', component:SiteLayoutModule}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
