import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { customerData } from './customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = customerData;

  constructor() {}

  getAll(searchTerm = '') {
    let result = this.customers;

    if (searchTerm) {
      result =
        this.customers.filter(
          c =>
            c.name.toLowerCase().includes(searchTerm.toLowerCase()) || (c.firstname || '').toLowerCase().includes(searchTerm.toLowerCase())
        ) || [];
    }

    return Promise.resolve(result.sort((a, b) => a.id - b.id));
  }

  getById(id: number) {
    return Promise.resolve(this.customers.find(c => c.id === id));
  }

  create(newCustomer: Customer) {
    const lastCustomer = this.customers.sort((a, b) => b.id - a.id)[0];
    const lastCustomerId = (lastCustomer && lastCustomer.id) || 0;

    newCustomer.id = lastCustomerId + 1;
    this.customers.push(newCustomer);

    return Promise.resolve(newCustomer);
  }

  update(customer: Customer) {
    const index = this.customers.findIndex(p => p.id === +customer.id);
    this.customers.splice(index, 1, { ...this.customers[index], ...customer });

    return Promise.resolve(customer);
  }

  delete(id: number) {
    const index = this.customers.findIndex(i => i.id === id);

    if (index > -1) {
      this.customers.splice(index, 1);
    }

    return Promise.resolve({});
  }
}
