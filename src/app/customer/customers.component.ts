import { Component, OnInit } from '@angular/core';

// import { CustomerService } from './customer.service';

@Component({
    selector: 'app-customers',
    templateUrl: 'app/customer/customers.component.html',
    // providers: [CustomerService]
})

export class CustomersComponent implements OnInit {
    customers: any[];

    constructor() { }

    ngOnInit() {
        this.customers = customerService.getCustomers();
    }
}