import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPurchaseComponentComponent } from './stock-purchase-component.component';

describe('StockPurchaseComponentComponent', () => {
  let component: StockPurchaseComponentComponent;
  let fixture: ComponentFixture<StockPurchaseComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockPurchaseComponentComponent]
    });
    fixture = TestBed.createComponent(StockPurchaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
