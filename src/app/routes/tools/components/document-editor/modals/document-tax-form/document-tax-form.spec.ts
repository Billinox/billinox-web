import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTaxForm } from './document-tax-form';

describe('DocumentTaxForm', () => {
  let component: DocumentTaxForm;
  let fixture: ComponentFixture<DocumentTaxForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentTaxForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentTaxForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
