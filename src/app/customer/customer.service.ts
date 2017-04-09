import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    constructor() { }

    getCustomers() {
        return [
            { id: 1, name: 'Akash' },
            { id: 2, name: 'Amit' },
            { id: 3, name: 'Somu' },
            { id: 4, name: 'Sujan' }
        ];
    }

}
