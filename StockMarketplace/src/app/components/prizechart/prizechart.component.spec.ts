import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeChartComponent } from './prizechart.component';

describe('PrizechartComponent', () => {
  let component: PrizeChartComponent;
  let fixture: ComponentFixture<PrizeChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrizeChartComponent]
    });
    fixture = TestBed.createComponent(PrizeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
