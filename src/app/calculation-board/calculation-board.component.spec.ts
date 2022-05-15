import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationBoardComponent } from './calculation-board.component';

describe('CalculationBoardComponent', () => {
  let component: CalculationBoardComponent;
  let fixture: ComponentFixture<CalculationBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculationBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
