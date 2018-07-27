import { AppPage } from './app.po';
import { element, by, browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello World!');
  });

  it('should change welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello World!');

    page.getButtonTitleChange().click();
    expect(page.getParagraphText()).toEqual('Hello from Kendo UI!');
  });

  it('should add a product', () => {
    page.navigateTo();

    const rows = element(by.css('.k-grid-table-wrap'))
      .element(by.tagName('table'))
      .all(by.tagName('tr'));
    const firstRow = rows.first();

    expect(element.all(by.css('.k-grid-table')).isPresent()).toBeTruthy();
    expect(rows.isPresent()).toBeTruthy();
    expect(firstRow.isPresent()).toBeTruthy();
    expect(firstRow.getText()).toBe('1 Chai Beverages 18 39');

    let actual = firstRow.all(by.tagName('td')).first().getText();
    let expected = '1';

    expect(actual).toBe(expected);

    page.getButtonAddProduct().click();

    const lastRow = rows.last();

    actual = lastRow.all(by.tagName('td')).first().getText();
    expected = '11';

    expect(actual).toBe(expected);
  });
});
