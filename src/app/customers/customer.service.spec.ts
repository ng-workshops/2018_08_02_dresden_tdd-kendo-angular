import { TestBed, inject } from '@angular/core/testing';
import { CustomerService } from './customer.service';
import { customerData } from './customers';
import { Customer } from './customer.model';

let mockData: Customer[];
let service: CustomerService;

describe('CustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerService]
    });

    service = TestBed.get(CustomerService);
    mockData = JSON.parse(JSON.stringify(customerData));
  });

  it('should be created', inject([CustomerService], (sut: CustomerService) => {
    expect(sut).toBeTruthy();
  }));

  describe('.get()', () => {
    describe('when called with no search param', () => {
      it('should return the default customer data', done => {
        const expected = mockData;

        service.getAll().then(c => {
          expect(c).toEqual(expected);

          // async test with done callback
          done();
        });
      });
    });

    describe('when called with a search param', () => {
      it('should return the filtered customer data', () => {
        const expected = [mockData[2]];

        // async test by returning a Promise
        return service.getAll('bart').then(c => {
          expect(c).toEqual(expected);
        });
      });
    });
  });

  // Test in BDD style
  describe('GIVEN the service is initialized', () => {
    describe('WHEN the users wants to get a single customer', () => {
      it('THEN the customer with the given id should be returned', () => {
        const expected = mockData[1];
        const id = expected.id;

        return service.getById(id).then(c => expect(c).toEqual(expected));
      });
    });
  });
});
