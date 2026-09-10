import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationGenerator } from './quotation-generator';

describe('QuotationGenerator', () => {
  let component: QuotationGenerator;
  let fixture: ComponentFixture<QuotationGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotationGenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotationGenerator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
