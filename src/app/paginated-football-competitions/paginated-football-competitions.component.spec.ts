import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedFootballCompetitionsComponent } from './paginated-football-competitions.component';

describe('PaginatedFootballCompetitionsComponent', () => {
  let component: PaginatedFootballCompetitionsComponent;
  let fixture: ComponentFixture<PaginatedFootballCompetitionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatedFootballCompetitionsComponent]
    });
    fixture = TestBed.createComponent(PaginatedFootballCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
