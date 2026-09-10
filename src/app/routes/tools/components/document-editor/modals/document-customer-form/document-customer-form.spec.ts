import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentCustomerForm } from './document-customer-form';

describe('DocumentCustomerForm', () => {
  let component: DocumentCustomerForm;
  let fixture: ComponentFixture<DocumentCustomerForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentCustomerForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentCustomerForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
