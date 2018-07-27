import { Component } from '@angular/core';
import { IProduct, generateRandomInt, sampleProducts } from './products';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'Hello World!';
  gridData: IProduct[] = sampleProducts;

  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }

  addProduct() {
    const newProductId = this.gridData[this.gridData.length - 1].ProductID + 1;

    const newProduct: IProduct = {
      ProductID: newProductId,
      ProductName: `My new product ${newProductId}`,
      UnitPrice: generateRandomInt(),
      UnitsInStock: generateRandomInt()
    };

    this.gridData.push(newProduct);
  }
}
