import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentPaymentMethodForm } from './document-payment-method-form';

describe('DocumentPaymentMethodForm', () => {
  let component: DocumentPaymentMethodForm;
  let fixture: ComponentFixture<DocumentPaymentMethodForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentPaymentMethodForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentPaymentMethodForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
