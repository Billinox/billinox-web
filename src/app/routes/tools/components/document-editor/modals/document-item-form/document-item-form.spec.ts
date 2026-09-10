import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentItemForm } from './document-item-form';

describe('DocumentItemForm', () => {
  let component: DocumentItemForm;
  let fixture: ComponentFixture<DocumentItemForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentItemForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentItemForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
