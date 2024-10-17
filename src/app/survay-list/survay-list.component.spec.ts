import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvayListComponent } from './survay-list.component';

describe('SurvayListComponent', () => {
  let component: SurvayListComponent;
  let fixture: ComponentFixture<SurvayListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurvayListComponent]
    });
    fixture = TestBed.createComponent(SurvayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
