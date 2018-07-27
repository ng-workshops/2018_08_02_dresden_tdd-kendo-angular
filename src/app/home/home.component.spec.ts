import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [GridModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hello World!');

    component.onButtonClick();
    fixture.detectChanges();

    expect(compiled.querySelector('h1').textContent).toContain('Hello from Kendo UI!');
  }));

  it('should add a new product', async(() => {
    expect(component.gridData.length).toBe(10);

    component.addProduct();

    expect(component.gridData.length).toBe(11);
  }));

  it('should add a new product 2', async(() => {
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;

    const firstRow = compiled.querySelector('[data-kendo-grid-item-index="0"]');
    expect(firstRow.firstElementChild.innerText).toBe('1');

    component.addProduct();
    fixture.detectChanges();

    const lastRow = compiled.querySelector('[data-kendo-grid-item-index="10"]');
    expect(lastRow.firstElementChild.innerText).toBe('11');
  }));
});
