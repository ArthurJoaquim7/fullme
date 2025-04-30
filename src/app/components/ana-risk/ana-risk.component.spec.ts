import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaRiskComponent } from './ana-risk.component';

describe('AnaRiskComponent', () => {
  let component: AnaRiskComponent;
  let fixture: ComponentFixture<AnaRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnaRiskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
