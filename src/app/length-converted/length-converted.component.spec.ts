import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthConvertedComponent } from './length-converted.component';

describe('LengthConvertedComponent', () => {
  let component: LengthConvertedComponent;
  let fixture: ComponentFixture<LengthConvertedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LengthConvertedComponent]
    });
    fixture = TestBed.createComponent(LengthConvertedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
