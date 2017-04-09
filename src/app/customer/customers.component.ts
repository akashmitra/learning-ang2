import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CustomerService } from './customer.service';

@Component({
    selector: 'app-customers',
    templateUrl: 'app/customer/customers.component.html',
    providers: [CustomerService]
})

export class CustomersComponent implements OnInit {
    // customers: Promise<any[]>;

    customers: any[];

    constructor(private _customerService: CustomerService) { }

    ngOnInit() {

        // Rx Observable Version with Subscribe Function 
        this._customerService.getCustomers_RxObservable()
            .subscribe(
            // Hey it worked
            (customers) => this.customers = customers,
            // No it didnt work
            (err) => { console.log(err); }
            );

        // Straight Up Promise to an Array
        // this._customerService.getCustomers()
        // .then((customers) => this.customers = customers)
        // .catch((err) => {
        //     console.log(err);
        // });

        // Promise <any[]> Version
        // this.customers = this._customerService.getCustomers()
        // .catch((err) => {
        //     console.log(err);
        // });

        // Rx Observable Version
        // this.customers = this._customerService.getCustomers_RxObservable()
        // .catch((err) => {
        //     console.log(err);
        //     return Observable.of(true);
        // });
    }
}   