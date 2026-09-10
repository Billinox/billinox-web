import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentShippingForm } from './document-shipping-form';

describe('DocumentShippingForm', () => {
  let component: DocumentShippingForm;
  let fixture: ComponentFixture<DocumentShippingForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentShippingForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentShippingForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
