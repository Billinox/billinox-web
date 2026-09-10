import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSignatureForm } from './document-signature-form';

describe('DocumentSignatureForm', () => {
  let component: DocumentSignatureForm;
  let fixture: ComponentFixture<DocumentSignatureForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentSignatureForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentSignatureForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
