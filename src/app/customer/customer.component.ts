import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-customer',
    templateUrl: 'app/customer/customer.component.html'
})

export class CustomerComponent implements OnInit {

    // customer: any;
    customerColor = 'gray';

    @Input() customer: { id: number, name: string };

    ngOnInit() { }

}