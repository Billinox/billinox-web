import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentInfoForm } from './document-info-form';

describe('DocumentInfoForm', () => {
  let component: DocumentInfoForm;
  let fixture: ComponentFixture<DocumentInfoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentInfoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentInfoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
