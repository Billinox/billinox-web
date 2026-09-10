import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTermForm } from './document-term-form';

describe('DocumentTermForm', () => {
  let component: DocumentTermForm;
  let fixture: ComponentFixture<DocumentTermForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentTermForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentTermForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
