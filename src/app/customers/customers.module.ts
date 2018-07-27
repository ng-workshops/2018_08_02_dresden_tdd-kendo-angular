import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerStatusPipe } from './customer-status.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    ButtonsModule,
    GridModule,
    CustomersRoutingModule
  ],
  declarations: [
    CustomerListComponent,
    CustomerFormComponent,
    CustomerStatusPipe
  ]
})
export class CustomersModule { }
