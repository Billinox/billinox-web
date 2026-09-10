import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDiscountForm } from './document-discount-form';

describe('DocumentDiscountForm', () => {
  let component: DocumentDiscountForm;
  let fixture: ComponentFixture<DocumentDiscountForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentDiscountForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentDiscountForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
