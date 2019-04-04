import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanLifeComponent } from './loan-life.component';

describe('LoanLifeComponent', () => {
  let component: LoanLifeComponent;
  let fixture: ComponentFixture<LoanLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
