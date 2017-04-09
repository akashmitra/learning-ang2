import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customer/customers.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule],

  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent],

  bootstrap: [AppComponent]
})

export class AppModule { }
