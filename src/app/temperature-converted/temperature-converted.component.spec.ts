import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureConvertedComponent } from './temperature-converted.component';

describe('TemperatureConvertedComponent', () => {
  let component: TemperatureConvertedComponent;
  let fixture: ComponentFixture<TemperatureConvertedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemperatureConvertedComponent]
    });
    fixture = TestBed.createComponent(TemperatureConvertedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
