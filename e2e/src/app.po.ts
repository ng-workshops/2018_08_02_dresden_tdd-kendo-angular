import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getButtonTitleChange() {
    return element(by.tagName('button'));
  }

  getButtonAddProduct() {
    return element(by.id('addProduct'));
  }

  getGridRow(id: string) {
    return element(by.css(`[data-kendo-grid-item-index="${id}"]`));
  }

  getTableRows() {
    return element.all(by.tagName('tr'));
  }
}
