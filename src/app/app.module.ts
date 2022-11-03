import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderModule } from './order/order.module';
import { SiteLayoutModule } from './site-layout/site-layout.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './site-layout/header/header.component';
import { ViewAllComponent } from './view-all/view-all.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule,
    SiteLayoutModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
