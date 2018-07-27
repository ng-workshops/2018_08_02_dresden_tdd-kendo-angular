import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { of } from 'rxjs';
import { customerData } from '../customers';

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;

  beforeEach(async(() => {
    // const spy = jasmine.createSpyObj('CustomerService', ['getAll']);
    const spy = { getAll: () => Promise.resolve(JSON.parse(JSON.stringify(customerData))) };

    TestBed.configureTestingModule({
      declarations: [CustomerListComponent],
      providers: [{ provide: Router, useValue: {} }, { provide: CustomerService, useValue: spy }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
