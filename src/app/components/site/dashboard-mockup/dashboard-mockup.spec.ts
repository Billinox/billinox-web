import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMockup } from './dashboard-mockup';

describe('DashboardMockup', () => {
  let component: DashboardMockup;
  let fixture: ComponentFixture<DashboardMockup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMockup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMockup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
