import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { SortDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  searchTerm = new FormControl();

  sort: SortDescriptor[] = [
    {
      field: 'id',
      dir: 'asc'
    }
  ];

  constructor(private router: Router, private customerService: CustomerService) {}

  ngOnInit() {
    this.searchTerm.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(v => this.getData(v));

    this.getData();
  }

  addCustomer() {
    this.router.navigateByUrl('/customers/new');
  }

  editCustomer(event: any) {
    this.router.navigateByUrl(`/customers/${event.dataItem.id}`);
  }

  deleteCustomer(event: any) {
    this.customerService.delete(event.dataItem.id).then(_ => this.getData());
  }

  private getData(search?: string) {
    this.customerService.getAll(search).then(c => (this.customers = c));
  }
}
