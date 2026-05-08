import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalCallout } from './legal-callout';

describe('LegalCallout', () => {
  let component: LegalCallout;
  let fixture: ComponentFixture<LegalCallout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalCallout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalCallout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
